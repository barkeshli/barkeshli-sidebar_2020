/*global chrome*/
import React from 'react'
import ReactDOM from 'react-dom';
import Frame, { FrameContextConsumer }from 'react-frame-component';



// function RightPanel() {
//     return(
//         <div><br /><br /> This is the right side. <br /><br /></div>
//     );
// }


// function RightPanel()  {
//     const renderHTML = (rawHTML: string) => 
//             //https://stackoverflow.com/questions/42361689/implement-html-entity-decode-in-react-js
//             React.createElement(
//                 "div", 
//                 { 
//                     dangerouslySetInnerHTML: { __html: rawHTML } 
//                 }
//             );

//     const html = document.body.innerHTML;
//     return (
//           <div className = "container">
//             <Frame head={[<link type="text/css" rel="stylesheet" href={chrome.runtime.getURL("/static/css/RightPanel.css")} ></link>]}> 
//             <FrameContextConsumer>
//             {
//                 () => {
//                   return(renderHTML(html)); 
//                 }
//               }
//               </FrameContextConsumer>
//             </Frame>
//           </div>
//     );
// }
function RightPanel()  {
    const renderHTML = (rawHTML: string) => 
            //https://stackoverflow.com/questions/42361689/implement-html-entity-decode-in-react-js
            React.createElement(
                "div", 
                { 
                    dangerouslySetInnerHTML: { __html: rawHTML } 
                }
            );

    const html = document.body.innerHTML;
    return (
        <>
            {
                () => {
                  return(renderHTML(html)); 
                }
            }
        </>
);
}

export default RightPanel;

// function RightPanelOld() {
//     const html = document.body.innerHTML;
//     return(
//         <div><br /><br /> This is the right side. <br /><br /></div>
//     );
// }




// function RightSideOld() {
//     const page_body = () => {
//       const html = document.body.outerHTML;
//       console.log("\n\n------\n\n RightSide: \n\n");
//       console.log(html);
//       return "html";
  
//     }
  
  
//     const html = document.createElement("div");
//     html.innerHTML = document.body.innerHTML;
//     console.log("\n\n------\n\n RightSide: \n\n");
//     console.log(html);
//   return (
//          html
//     )
  
  
  
//   }
  
//   class RightSide extends React.Component {
  
//     render() {
//         return (
//               <div className = "container">
//                 <Frame head={[<link type="text/css" rel="stylesheet" href={chrome.runtime.getURL("/static/css/content.css")} ></link>]}> 
//                 <FrameContextConsumer>
//                 {
//                     ({document, window}) => {
//                       return <App document={document} window={window} isExt={true}/> 
//                     }
//                   }
//                   </FrameContextConsumer>
//                 </Frame>
//               </div>
//         )
//     }
//   }
  