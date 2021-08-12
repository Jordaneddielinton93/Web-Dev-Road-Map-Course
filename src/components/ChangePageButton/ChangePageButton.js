import { useContext } from "react";
import { pageWrapper } from "../App/App";
import { ACTION } from "../UseReducer/UseReducer";
const ChangePageButton = ({pageNum,title}) => {
  let stateObj = useContext(pageWrapper)
  return ( 
    <li onClick={()=>stateObj.dispatch({type:ACTION.CHOOSEN_PAGE,payload:pageNum})}
    className="header__Dropdown__UList-li">{title}</li>
   );
}
 
export default ChangePageButton;