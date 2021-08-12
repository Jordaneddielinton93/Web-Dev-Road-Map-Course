import "./Slider.scss"
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { pageWrapper } from "../App/App";
import { ACTION } from "../UseReducer/UseReducer";
const Slider = ({pageNum,title}) => {

  let stateObj = useContext(pageWrapper)


  return ( 

    <div onClick={()=>{stateObj.dispatch({type:ACTION.CHOOSEN_PAGE,payload:pageNum})}}
    className="Slider">
      <Link to={`./Categories#${title}`}>
      <section className="Slider__imgCont">
        {title}
      </section>
      <section className="Slider__textCont">
        <h3 className="Slider__textCont-text1">Beginner's {title}</h3>
        <h4 className="Slider__textCont-text2">Free</h4>
      </section>
      </Link>
    </div>
   );
}
 
export default Slider;