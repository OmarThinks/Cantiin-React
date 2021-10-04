import {Link:StandardLink} from 'react-router-dom';

/*
This expects These inputs:
- className: Default = ""
- to:
    - type: string
    - Functionality: Where it takes to

*/


const Link = (props) => {
    let className = props.className;
    let to = props.to;
    return ( 
        <StandardLink className={className} to={to}/>

     );
}
 
export default Link;
