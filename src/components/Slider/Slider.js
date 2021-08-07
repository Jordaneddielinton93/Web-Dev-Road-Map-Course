import "./Slider.scss"
import { BrowserRouter, Route, Link } from "react-router-dom";
const Slider = ({title}) => {




  return ( 

    <div className="Slider">
      <Link to="./Categories">
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