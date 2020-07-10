/*global chrome*/
/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
import Frame, { FrameContextConsumer }from 'react-frame-component';
import App from "./App";
import RightPanel from "./RightPanel";
// import clone_page from "./RightPanel";
import LeftPanel from "./LeftPanel";
// import RecreatePage from "./RecreatePage";

function clone_page() {
  const renderHTML = (rawHTML: string) => 
          //https://stackoverflow.com/questions/42361689/implement-html-entity-decode-in-react-js
          React.createElement(
              "div", 
              { 
                  dangerouslySetInnerHTML: { __html: rawHTML } 
              }
          );

  //-------------------------------------------------------------------------------------- 
  //I would prefer to simply extract the entire page.
  //document.outerHTML is not valid.
  //document.html.outerHTML is not valid. 
  //  what is the property of document to get the entire page?       
  const page_string = "<html>" + document.head.outerHTML + document.body.outerHTML + "</html>";
  //--------------------------------------------------------------------------------------        
  const renderedHTML = renderHTML(page_string);
  console.debug("=20 clone_page renderedHTML length: ", renderedHTML);
  // return (<div id = "right-side-panel">{renderedHTML}</div>); //this is a div!
  return(renderedHTML);
}

console.log("=20 content.js: -------- TOP----------: ");

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  clone the page before clearing the body tag. 
const renderedHTML = clone_page();
console.log("=20 content.js: renderedHTML: ",renderedHTML);
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

console.log("=20 content.js: making the react div: ");
const app = document.createElement('div');
app.id = "my-extension-root2";




//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
//clear the body tag.
//document.head.innerHTML="<head></head>";
//There has to be a better way to do this.
document.body.innerHTML="<body></body>";
document.body.prepend(app);
//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 



ReactDOM.render(
  <React.StrictMode>
    <LeftPanel />
   {/* {renderedHTML} */}
    <RightPanel renderedHTML = {renderedHTML}/>  
  </React.StrictMode>,
  app
);

console.log("=20 content.js: Leaving.... ");

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


// const body = document.getElementsByTagName("body");
// console.debug("content.js: here is the body: ", body);
//app = document.getElementsByName("body");
//document.body.outerHTML = app;
//ReactDOM.render(<Main />, app);


//--------------------------------------------

//app.style.display = "none";

// chrome.runtime.onMessage.addListener(
//    function(request, sender, sendResponse) {
//       if( request.message === "clicked_browser_action") {
//         toggle();
//       }
//    }
// );

// function toggle(){
//    if(app.style.display === "none"){
//      app.style.display = "block";
//      console.log("toggiling!!!");
     

//    }else{
//      app.style.display = "none";
//    }
// }
