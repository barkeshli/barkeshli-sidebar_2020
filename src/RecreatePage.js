/*global chrome*/
/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
//Not being used. Do not know how to assign the result of this 
//  function to the html tag on the DOM

function RecreatePage({renderedHTML}){
    return(
        <html>
            <head className="sb-recreated-page-head">
                <title></title>
            </head>
            <body className="sb-recreated-page-body">
                <div id="my-extension-root2">

                </div>
            </body>
        </html>
    );
}

export default RecreatePage;
