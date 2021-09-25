import { getUrlPage } from '../functions/urls';
import React, { Component } from 'react';
import renderer from 'react-test-renderer';
var assert = require('assert');

/* it takes these inputs
1. type (string):
It must have one of these values
["first","prev","number","next","last","dots"]

2. disabled (boolean) (default = false):
if not disabled, this link will not work

3. link (str)  (default = "")
-if not disabled, and type != dots, then a link must be passed

4. active (bool) (default=false)
- if number, it could be active
- if active it will be auto disabled

*/













class PaginationButton extends React.Component {
    render() { 
        let {type} = this.props.type;
        let {disabled = false} = this.props.disabled;
        let {link = null} = this.props.link;
        let {active = false} = this.props.active;
        //type, disabled=false, link=null, active=false
        if(link){var number = getUrlPage(link);}
        
        console.log("type is");
        console.log(type);

        assert(type in ["first","prev","number","next","last","dots"],
        'type must must be one of these values: ["first","prev","number","next","last","dots"]');
        
        if(!disabled)
        {if(type!="dots")
            {assert(link!=null,"this is not disabled, so a link must be passed");}
        }
    
        if(active){return <li><button disabled>{number}</button></li>;}
    
        let buttonText="";
    
        if      (type=="first"){buttonText="<<";}
        else if (type=="prev"){buttonText="<";}
        else if (type=="number"){buttonText="<";}
        else if (type=="next"){buttonText="<";}
        else if (type=="last"){buttonText="<";}
        else {return <li><button disabled>...</button></li>;} //type = dots
    
    
    
        if(disabled){
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
/*

const PaginationButton = (props)=>
{
    let {type} = props.type;
    let {disabled = false} = props.disabled;
    let {link = null} = props.link;
    let {active = false} = props.active;
    //type, disabled=false, link=null, active=false
    if(link){var number = getUrlPage(link);}
    
    assert(type in ["first","prev","number","next","last","dots"],
    'type must must be one of these values: ["first","prev","number","next","last","dots"]');
    
    if(!disabled)
    {if(type!="dots")
        {assert(link!=null,"this is not disabled, so a link must be passed");}
    }

    if(active){return <li><button disabled>{number}</button></li>;}

    let buttonText="";

    if      (type=="first"){buttonText="<<";}
    else if (type=="prev"){buttonText="<";}
    else if (type=="number"){buttonText="<";}
    else if (type=="next"){buttonText="<";}
    else if (type=="last"){buttonText="<";}
    else {return <li><button disabled>...</button></li>;} //type = dots



    if(disabled){
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


 
export default PaginationButton;


*/


