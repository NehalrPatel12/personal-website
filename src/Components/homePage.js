import React from 'react';
import Twocolumn from "./template/twoColumn";
import ServicesCmp from "./template/servicesCmp";
import Homehero from "./template/homeHero";
//import SlideCarousel from "./carousel";

const Homecmpnent = {
  hmHero: Homehero,
  twoColumn: Twocolumn,
  servicesCmp : ServicesCmp,
  //carousel: SlideCarousel
};

//export default Homepage;
export default block => {
  if (typeof Homecmpnent[block.component] !== "undefined") {
    return React.createElement(Homecmpnent[block.component], {
      key: block._uid,
      block: block
    });
  }
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
};
