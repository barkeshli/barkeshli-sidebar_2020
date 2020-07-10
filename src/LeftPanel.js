/*global chrome*/
/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
import Frame, { FrameContextConsumer }from 'react-frame-component';
import App from "./App";


function LeftPanel()  {
      return (
            <div id="left-side-panel" className = "bs_react_container">
              <Frame head={[<link type="text/css" rel="stylesheet" href={chrome.runtime.getURL("/static/css/content.css")} ></link>]}> 
              <FrameContextConsumer>
              {
                  ({document, window}) => {
                    return <App document={document} window={window} isExt={true}/> 
                  }
                }
                </FrameContextConsumer>
              </Frame>
            </div>
      );
}

export default LeftPanel;
