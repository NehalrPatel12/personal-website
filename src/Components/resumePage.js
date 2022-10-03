import React from 'react';
import Threecolumn from "./template/threeColumn";

const Resumecmpnent = {
  //carousel: SlideCarousel
  threeColumn: Threecolumn
};

export default block => {
  if (typeof Resumecmpnent[block.component] !== "undefined") {
    return React.createElement(Resumecmpnent[block.component], {
      key: block._uid,
      block: block
    });
  }
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
};
