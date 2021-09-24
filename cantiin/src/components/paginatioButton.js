import React, { Component } from 'react';

/* it takes these inputs
1. type (string):
It must have one of these values
["first","prev","number","next","last"]

2. disabled (boolean) (default = true):
if disabled, this link will not work

3. link (str)  (default = "")
-if not disabled, a link must be passed

4. number (int) (default=1)
if the type in number, then a number must be passed

5. active (bool) (default=false)
-if number, it could be active
- if active it will be auto disabled

*/

PaginationButton = (type, disabled=false, link="", number =1, active=false)=>
{}


 
export default PaginationButton;





