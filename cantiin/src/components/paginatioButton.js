import { getUrlPage } from '../functions/urls';
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

const PaginationButton = (type, disabled=false, link=null, active=false)=>
{
    if(link){var number = getUrlPage(link);}
    
    assert(type in ["first","prev","number","next","last","dots"],
    'type must must be one of these values: ["first","prev","number","next","last","dots"]');
    
    if(!disabled)
    {if(type!="dots")
        {assert(link!=null,"this is not disabled, so a link must be passed");}
    }

    if(active){disabled=true;}

    let buttonText="";

    if      (type=="first"){buttonText="<<";}
    else if (type=="prev"){buttonText="<";}
    else if (type=="number"){buttonText="<";}
    else if (type=="next"){buttonText="<";}
    else if (type=="last"){buttonText="<";}
    else{buttonText="...";} //type = dots



}


 
export default PaginationButton;





