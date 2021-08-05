import { useState } from "react";
import "./CatagoriesSidebar.scss"
const CatagoriesSidebar = () => {

  // let [openCat,SetOpenCat]=useState("none")

  

  class DropdownList{
    constructor(mainTag,subTag1,subTag2,subTag3,subTag4){
      this.mainTag=mainTag;
      this.subTag1=subTag1;
      this.subTag2=subTag2;
      this.subTag3=subTag3;
      this.subTag4=subTag4;
    }
    makePage(){
      return(
        <div className="catagoriesCont">
          <h2 className="catagoriesCont-title">{this.mainTag}</h2>
          <ul className="catagoriesCont__list" >
            <li>{this.subTag1}</li>
            <li>{this.subTag2}</li>
            <li>{this.subTag3}</li>
            <li>{this.subTag4}</li>
          </ul>

        </div>
      )
    }
  }

  let HTML = new DropdownList("HTML","Tags","Elements","Refs","Tips")
  let CSS  = new DropdownList("CSS","Selectors","Display","Variables","Tips")
  let SASS  = new DropdownList("SASS","Nesting","Import","Mixin","Variables")
  let JavaScript  = new DropdownList("JavaScript","Functions","Data-Types","Classes","Variables")
  let REACT  = new DropdownList("REACT","State","JSX","Hooks")

  const DropDownToJSX = [HTML,CSS,SASS,JavaScript,REACT]


  return ( 
    <aside className="sidebar">
      {DropDownToJSX.map((item)=>{
        return item.makePage()
      })}
      
      
    </aside>
   );
}
 
export default CatagoriesSidebar;