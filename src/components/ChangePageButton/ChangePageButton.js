import { useContext } from "react";
import { pageWrapper } from "../App/App";
import { ACTION } from "../UseReducer/UseReducer";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
const ChangePageButton = ({pageNum,title}) => {
const history = useHistory();

  let stateObj = useContext(pageWrapper)
  return ( 
    
    <Link to={`./Categories#${title}`}>
    <li onClick={()=>{
      stateObj.dispatch({type:ACTION.CHOOSEN_PAGE,payload:pageNum})
}}
    >{title}</li>
    </Link>
   );
}
 
export default ChangePageButton;