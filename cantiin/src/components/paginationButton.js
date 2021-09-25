import { getUrlPage } from '../functions/urls';
import React, { Component } from 'react';
import renderer from 'react-test-renderer';
var assert = require('assert');

/* it takes these inputs
1. type (string):
It must have one of these values
["first","prev","number","next","last","dots"]


3. link (str)  (default = "")

- If link is passed, then there is a link, else, it is disabled
- if type != dots, then a link must be passed

4. active (bool) (default=false)
- if number, it could be active
- if active it will be auto disabled

*/








class PaginationButton extends React.Component {
    render() { 

        let {type} = this.props;
        let {disabled = false} = this.props;
        let {link = null} = this.props;
        let {active = false} = this.props;
        //type, disabled=false, link=null, active=false
        if(link){var pageNumber = getUrlPage(link);}
        
        console.log(`props is:`);
        console.log(this.props);


        if(!type){throw("PaginationButton: type is required");}



        if(!(["first","prev","number","next","last","dots"].includes(type)))
        {throw('PaginationButton: type must must be one of these values: ["first","prev","number","next","last","dots"]');}
        
        if(!disabled)
        {if(type!="dots")
            {
                if(link==null)
                {
                    throw(
                    "PaginationButton: is not disabled, so a link must be passed");
                }
            }
        }
        if(active){return <li><button disabled>{pageNumber}</button></li>;}
    
        let buttonText="";
    
        if      (type=="first"){buttonText="<<";}
        else if (type=="prev"){buttonText="<";}
        else if (type=="number"){buttonText="<";}
        else if (type=="next"){buttonText="<";}
        else if (type=="last"){buttonText="<";}
        else {return <li><button disabled>...</button></li>;} //type = dots
    
    
    
        if(!link){
            return <li>
                <button disabled>{buttonText}</button>
            </li>;
        }
        else{
            return <li>
                <a href={link}>
                    <button>{buttonText}</button>
                </a>
            </li>;
        }
    }
}

export default PaginationButton;



