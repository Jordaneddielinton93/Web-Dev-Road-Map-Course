import "./ButtonTakeStep.scss"
import { BrowserRouter, Route, Link } from "react-router-dom";

const ButtonTakeStep = () => {

  return ( 
    <Link to="./RoadMap"><button  className="ButtonTakeStep">
      Take Your Step
    </button></Link>
   );
}
 
export default ButtonTakeStep;