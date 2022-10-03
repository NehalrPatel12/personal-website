import React from "react";

function Twocolumn (props){
    return(
        <section id={props.block._uid} className="pd0">
        <div className="container">
            <div className="row">
                <div className="col-6 aboutcnt text-right">
                    <h2 className="fblack">{props.block.headline}</h2>
                    <p>{props.block.frtblockdesc}</p>
                    <ul className="aboutinfo">
                        <li className="d-flex"><span className="fsbold">Name:</span><span>{props.block.aboutmeName}</span></li>
                        <li className="d-flex"><span className="fsbold">Date of Birth:</span><span>{props.block.aboutmeDob}</span></li>
                        <li className="d-flex"><span className="fsbold">Address:</span><span>{props.block.aboutmeAdd}</span></li>
                        <li className="d-flex"><span className="fsbold">Postal Code:</span><span>{props.block.aboutmePcode}</span></li>
                        <li className="d-flex"><span className="fsbold">Email:</span><span>{props.block.aboutmeEmail}</span></li>
                        <li className="d-flex"><span className="fsbold">Mobile:</span><span>{props.block.aboutmePhn}</span></li>
                    </ul>
                    <div className="col text-center">
                        <button className="btn btn-primary">Downlaod CV</button>
                    </div>
                </div>
                <div className="col-6 pd0">
                    <div className="aboutmeimg"></div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Twocolumn;