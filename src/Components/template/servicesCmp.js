import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServicesCmp(props) {
  return (
    <section id={props.block._uid}>
      <div className="container-fluid">
        <div className="row">
          <h2 className="col-12 text-center fblack">{props.block.headline}</h2>
          <div className="col-lg-4 col-md-6 col-sm-12 srvcBox">
            <div className="inSrvcBox">
              <FontAwesomeIcon
                className="srvcIcon"
                icon={["fas", "search"]}
                size="4x"
              />
              <h6>{props.block.frtblocktitle}</h6>
              <p>{props.block.frtblockdesc}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 srvcBox">
            <div className="inSrvcBox">
              <FontAwesomeIcon
                className="srvcIcon"
                icon={["fas", "flask"]}
                size="4x"
              />
              <h6>{props.block.scdblocktitle}</h6>
              <p>{props.block.scdblockdesc}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 srvcBox">
            <div className="inSrvcBox">
              <FontAwesomeIcon
                className="srvcIcon"
                icon={["fas", "code"]}
                size="4x"
              />
              <h6>{props.block.trdblocktitle}</h6>
              <p>{props.block.trdblockdesc}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 srvcBox">
            <div className="inSrvcBox">
              <FontAwesomeIcon
                className="srvcIcon"
                icon={["fas", "code"]}
                size="4x"
              />
              <h6>{props.block.frtblocktitle}</h6>
              <p>{props.block.frtblockdesc}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 srvcBox">
            <div className="inSrvcBox">
              <FontAwesomeIcon
                className="srvcIcon"
                icon={["far", "lightbulb"]}
                size="4x"
              />
              <h6>{props.block.scdblocktitle}</h6>
              <p>{props.block.scdblockdesc}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 srvcBox">
            <div className="inSrvcBox">
              <FontAwesomeIcon
                className="srvcIcon"
                icon={["fas", "code"]}
                size="4x"
              />
              <h6>{props.block.trdblocktitle}</h6>
              <p>{props.block.trdblockdesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesCmp;
