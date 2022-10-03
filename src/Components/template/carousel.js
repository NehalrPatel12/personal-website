import React , {useState} from "react";
import Carousel from "react-bootstrap/Carousel";

function Slidhome(props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.block.slideoneimage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>{props.block.slideonetitle}</h2>
          <p>{props.block.slideonedesc}</p>
          <a href={props.block.slideonelink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Get Started</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.block.slideoneimage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>{props.block.slidetwotitle}</h2>
          <p>{props.block.slidetwodesc}</p>
          <a href={props.block.slidetwolink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Get Started</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slidhome;
