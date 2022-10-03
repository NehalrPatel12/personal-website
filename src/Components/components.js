import React from "react";
import Threecolumn from "./template/threeColumn";
//import SlideCarousel from "./carousel";

const Components = {
  threeColumn: Threecolumn,
  carousel: SlideCarousel
};

export default block => {
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: block._uid,
      block: block
    });
  }
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
};
