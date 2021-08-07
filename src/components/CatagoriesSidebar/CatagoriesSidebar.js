import { useContext } from "react";
import { pageWrapper } from "../App/App";
import { ACTION } from "../UseReducer/UseReducer";
import "./CatagoriesSidebar.scss"
const CatagoriesSidebar = () => {

  let stateObj = useContext(pageWrapper)

  // let [openCat,SetOpenCat]=useState("none")

  

  class DropdownList{
    constructor(mainTag,subTag1,subTag2,subTag3,subTag4,subTag5,subTag6,
      // below this is the page numbers
      pageSubTitle1,pageSubTitle2,pageSubTitle3,pageSubTitle4,pageSubTitle5,pageSubTitle6
      ){
      this.mainTag=mainTag;
      this.subTag1=subTag1;
      this.subTag2=subTag2;
      this.subTag3=subTag3;
      this.subTag4=subTag4;
      this.subTag5=subTag5;
      this.subTag6=subTag6;

      this.pageSubTitle1=pageSubTitle1;
      this.pageSubTitle2=pageSubTitle2;
      this.pageSubTitle3=pageSubTitle3;
      this.pageSubTitle4=pageSubTitle4;
      this.pageSubTitle5=pageSubTitle5;
      this.pageSubTitle6=pageSubTitle6;

    }
    makePage(){
      return(
        <div key={this.mainTag} className="catagoriesCont">
          <h2 className="catagoriesCont-title">{this.mainTag}</h2>
          <ul className="catagoriesCont__list" >

            <li onClick={()=>
              stateObj.dispatch({type:ACTION.CHOOSEN_PAGE,payload:this.pageSubTitle1})}>{this.subTag1}</li>

            <li onClick={()=>
              stateObj.dispatch({type:ACTION.CHOOSEN_PAGE,payload:this.pageSubTitle2})}>{this.subTag2}</li>

            <li onClick={()=>
              stateObj.dispatch({type:ACTION.CHOOSEN_PAGE,payload:this.pageSubTitle3})}>{this.subTag3}</li>

            <li onClick={()=>
              stateObj.dispatch({type:ACTION.CHOOSEN_PAGE,payload:this.pageSubTitle4})}>{this.subTag4}</li>

            <li onClick={()=>
              stateObj.dispatch({type:ACTION.CHOOSEN_PAGE,payload:this.pageSubTitle5})}>{this.subTag5}</li>

            <li onClick={()=>
              stateObj.dispatch({type:ACTION.CHOOSEN_PAGE,payload:this.pageSubTitle6})}>{this.subTag6}</li>
          </ul>
        </div>
      )
    }
  }

  let HTML = new DropdownList("HTML","Tags","Elements","Refs","Tips","","",
  // below this is the page numbers
  0,1,2,3
  )
  let CSS  = new DropdownList("CSS","Selectors","Display","Variables","Tips","","",
  // below this is the page numbers
  4,5,6,7
  )
  let SASS  = new DropdownList("SASS","Nesting","Import","Mixin","Variables","","",
   // below this is the page numbers
   8,9,10,11
  )
  let JavaScript  = new DropdownList("JavaScript","Functions","Data-Types","Classes","Variables","","",
   // below this is the page numbers
   12,13,14,15
  )
  let REACT  = new DropdownList("REACT","State","JSX","useState","useEffect","useReducer","useContext",
   // below this is the page numbers
   16,17,18,19,20,21
  )
  let FIREBASE  = new DropdownList("Firebase","Auth","Database","Storage","","","",
   // below this is the page numbers
   22,23,24
  )
  let CODEWARS  = new DropdownList("CodeWars","Kata6","","","","","",
   // below this is the page numbers
  25
  )

  const DropDownToJSX = [HTML,CSS,SASS,JavaScript,REACT,FIREBASE,CODEWARS]


  return ( 
    <aside className="sidebar">
      {DropDownToJSX.map((item)=>{
        return item.makePage()
      })}
      
      
    </aside>
   );
}
 
export default CatagoriesSidebar;