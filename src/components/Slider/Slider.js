import "./Slider.scss"
const Slider = ({title}) => {




  return ( 
    <div className="Slider">
      <section className="Slider__imgCont">
        {title}
      </section>
      <section className="Slider__textCont">
        <h3 className="Slider__textCont-text1">Beginner's {title}</h3>
        <h4 className="Slider__textCont-text2">Free</h4>
      </section>
      
    </div>
   );
}
 
export default Slider;