import "./ButtonTakeStep.scss"
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { ACTION } from "../UseReducer/UseReducer";
import { pageWrapper } from "../App/App";

const ButtonTakeStep = () => {

  let stateObj = useContext(pageWrapper)

  return ( 
    <Link to="./Categories">
      <button onClick={()=>stateObj.dispatch({type:ACTION.CHOOSEN_PAGE,payload:0})}
      className="ButtonTakeStep">
      Take Your Step
    </button></Link>
   );
}
 
export default ButtonTakeStep;