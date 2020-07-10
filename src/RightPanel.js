/*global chrome*/
import React, { useState } from "react"
import ReactDOM from 'react-dom';
import Frame, { FrameContextConsumer }from 'react-frame-component';

function RightPanel({renderedHTML})  {
    return (
          <div id="right-side-panel" className = "bs_react_container">
            <Frame> 
            {/* <FrameContextConsumer> */}
                {/* this works.
                <html><head></head><body><h1>testing the iframe</h1></body></html> */}
                {renderedHTML}
              {/* </FrameContextConsumer> */}
            </Frame>
          </div>
    );
}


function RightPanel_old({renderedHTML})  {



    console.debug("=20: RightPanel: ---- TOP -----");

    // const [html, setHTML] = useState(renderedHTML);
    // console.debug("=20: RightPanel html: ", renderedHTML);
    // const page_clone = clone_page();
    return (
        // <div id="right_side_panel">
            // {
                // () => {
                //   return(renderHTML(html)); 
                // }

                //. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                //will work if you send me the rendered html from contents.js
                renderedHTML
                //. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 

                //-- -- -- -- -- -- -- -- -- -- -- -- --  
                //<div>{"this is the right div"}</div>
                //-- -- -- -- -- -- -- -- -- -- -- -- --  
            // }
        // </div>
    );
}

export default RightPanel;

