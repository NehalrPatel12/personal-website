import React from "react";

function Threecolumn (props){
    return(
        <section id={props.block._uid}>
        <div className="container">
            <div className="row">
                <h2 className="col-12 text-center fblack">{props.block.headline}</h2>
                <div className="col">
                    <h3>{props.block.frtblocktitle}</h3>
                    <p>{props.block.frtblockdesc}</p>
                </div>
                <div className="col">
                    <h3>{props.block.scdblocktitle}</h3>
                    <p>{props.block.scdblockdesc}</p>
                </div>
                <div className="col">
                    <h3>{props.block.trdblocktitle}</h3>
                    <p>{props.block.trdblockdesc}</p>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Threecolumn;