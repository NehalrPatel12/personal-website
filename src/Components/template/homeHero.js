import React from "react";

function Hero(props) {
  return (
    <section id={props.block._uid} className="hero-wrap">
      <div className="overlay"></div>
      <div className="container hmContent">
        <div className="row">
          <div className="col">
            <div className="text text-center">
              <span className="subheading fsbold">Hey! I am</span>
              <h1 className="hmheroh1">{props.block.headline}</h1>
              <h2>I'm a <span>{props.block.designation}</span></h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
