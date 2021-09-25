import { getUrlPage } from '../functions/urls';
import React, { Component } from 'react';
var assert = require('assert');

/* it takes these inputs
1. type (string):
It must have one of these values
["first","prev","number","next","last","dots"]


2. link (str)  (default = "")
- If link is passed, then there is a link, else, it is disabled
- if type is snumber, then a link must be passed

3. active (bool) (default=false)
- if number, it could be active
- if active it will be auto disabled

*/








class PaginationButton extends React.Component {
    render() { 

        let {type} = this.props;
        let {link = null} = this.props;
        let {active = false} = this.props;

        if(link){var pageNumber = getUrlPage(link);}
        
        /*console.log(`props is:`);
        console.log(this.props);*/


        if(!type){throw("PaginationButton: type is required");}



        if(!(["first","prev","number","next","last","dots"].includes(type)))
        {throw('PaginationButton: type must be one of these values: ["first","prev","number","next","last","dots"]');}
        
        if(type=="number")
        {
            if(!link){
                throw('PaginationButton: type is number, so a link must be passed');
            }
        }


        
        if(active){return <li className="paginationListIndex">
            <button className="PaginationButton PaginationButton-disabled PaginationButton-active" disabled>{pageNumber}</button></li>;}
    
        let buttonText="";
    
        if      (type=="first"){buttonText="<<";}
        else if (type=="prev"){buttonText="<";}
        else if (type=="number"){buttonText="<";}
        else if (type=="next"){buttonText="<";}
        else if (type=="last"){buttonText="<";}
        else {return <li className="paginationListIndex">
            <button
            className="PaginationButton PaginationButton-disabled"
            disabled>...</button></li>;} //type = dots
    
    
    
        if(!link){
            return <li className="paginationListIndex">
                <button 
                className="PaginationButton PaginationButton-disabled"
                disabled>{buttonText}</button>
            </li>;
        }
        else{
            return <li className="paginationListIndex">
                <a className="paginationLink" href={link}>
                    <button className="PaginationButton">{buttonText}</button>
                </a>
            </li>;
        }
    }
}

export default PaginationButton;
