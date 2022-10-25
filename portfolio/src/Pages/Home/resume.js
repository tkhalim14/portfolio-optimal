import './resume.css';
import React from 'react';

function resume(){
    return (
        <div className="grid">
            <div className="effect-background">
                <div className="effect-hera">
                    <figcaption>
                        <h2>My<span>Resume</span></h2>
                        <p className="reveal">
                            <a className="reveal" href='https://docs.google.com/document/d/1FTaxzn7rCfry6-7_Z1oMIsHLvUcLBfZO0_UTNUZ_Tt8/edit?usp=sharing'>📄</a>
                            .docs
                        </p>
                    </figcaption>		
                </div>
            </div>
        </div>
    );
}

export default resume;