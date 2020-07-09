/*global chrome*/
/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
import Frame, { FrameContextConsumer }from 'react-frame-component';
import App from "./App";
import RightPanel from "./RightPanel";


function Main()  {
      return (
            <div className = "container">
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


class MainOld extends React.Component {
    render() {
        return (
              <div className = "container">
                <Frame > 
                  <FrameContextConsumer>
                {
                    ({document, window}) => {
                      return <App document={document} window={window} isExt={true}/> 
                    }
                  }
                  </FrameContextConsumer>
                </Frame>
              </div>
        )
    }
}

const app = document.createElement('div');
app.id = "my-extension-root";

// const left = document.createElement('div');
// left.id = "left-side-panel";

// const right = document.createElement('div');
// right.id = "right_side-panel";

// app.appendChild(left);
// app.appendChild(right);

// const outerHTML = document.body.outerHTML
// console.log(outerHTML);
// right.innerHTML = outerHTML;


//document.body.replaceWith(app);
// document.body.appendChild(app);
document.body.prepend(app);
//const app = document.getElementsByTagName("body");
//app = document.getElementsByName("body");
//document.body.outerHTML = app;
//ReactDOM.render(<Main />, app);
ReactDOM.render(
  <React.StrictMode>
    <Main />
    <RightPanel />  
  </React.StrictMode>,
  app
);

//app.style.display = "none";

chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action") {
        toggle();
      }
   }
);

function toggle(){
   if(app.style.display === "none"){
     app.style.display = "block";
     console.log("toggiling!!!");
     

   }else{
     app.style.display = "none";
   }
}
