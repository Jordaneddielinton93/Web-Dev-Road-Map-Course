import "./Header.scss"
import { ACTION } from "../UseReducer/UseReducer";
import {FcCustomerSupport,FcSearch} from 'react-icons/fc';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { auth } from "../../Lib/FireBase/FireBase";
import { pageWrapper } from "../App/App";
import { useContext, useEffect, useState } from "react";
import SearchCategorie from "../SearchCategorie/SearchCategorie";
const Header = () => {
  
  let stateObj = useContext(pageWrapper)

  let [inputValue,setInputValue] = useState("")
  let [returnedSearch,setReturnedSearch] = useState("")
  
  useEffect(()=>{
    console.log(inputValue)
    if(inputValue.length>1){
      let {ArrayOfSearchedItem} = SearchCategorie(inputValue)
      setReturnedSearch(ArrayOfSearchedItem)
    }
  },[inputValue])

  return ( 
    <header className="headerFixed">
    <header className="header">

      
      <h1 className="header__Logo">
        <Link to ="./" style={{color:"black"}}>JordLinton</Link>
        
      </h1>
      
      <div className="header__Dropdown">
        <Link to="./Categories">
          <p className="header__Dropdown__Categories">Categories</p>
        </Link> 
        <ul className="header__Dropdown__UList">
        <Link to="./Categories">
          <li 
          onClick={()=>stateObj.dispatch({type:ACTION.CHOOSEN_PAGE,payload:0})}
          className="header__Dropdown__UList-li">HTML</li>

          <li
          onClick={()=>stateObj.dispatch({type:ACTION.CHOOSEN_PAGE,payload:4})}
          className="header__Dropdown__UList-li">CSS</li>

          <li onClick={()=>stateObj.dispatch({type:ACTION.CHOOSEN_PAGE,payload:8})}
          className="header__Dropdown__UList-li">Sass</li>

          <li
          onClick={()=>stateObj.dispatch({type:ACTION.CHOOSEN_PAGE,payload:12})}
          className="header__Dropdown__UList-li">JavaScript</li>

          <li 
          onClick={()=>stateObj.dispatch({type:ACTION.CHOOSEN_PAGE,payload:18})}
          className="header__Dropdown__UList-li">React</li>

          <li onClick={()=>stateObj.dispatch({type:ACTION.CHOOSEN_PAGE,payload:22})}
          className="header__Dropdown__UList-li">Firebase</li>

          <li onClick={()=>stateObj.dispatch({type:ACTION.CHOOSEN_PAGE,payload:25})}
          className="header__Dropdown__UList-li">CodeWars</li>
          </Link>
        </ul>
      </div>

      <div className="header__SearchCont">
        <FcSearch className="header__SearchCont-icon"/>
        <input type="text" onChange={(e)=>setInputValue(e.target.value)}
         className="header__SearchCont-Bar"
        placeholder="STILL WORKING ON THE J.S FOR THIS"
        />
        <div 
        style={inputValue.length>=1?{display:"inline"}:{display:"none"}}
        className="header__SearchCont__Query">
          {returnedSearch.length>=1?returnedSearch.map((query)=>{
            return(
              <Link to="./Categories">
              <h3 onClick={()=>stateObj.dispatch({type:ACTION.CHOOSEN_PAGE,payload:query.page})}
               className="header__SearchCont__Query--item">{query.title1}: {query.title}</h3>
               </Link>
            )}):<></>
            }
        </div>
      </div>


      <h1 className="header__Login"
      style={stateObj.state.userStatus?{display:"none"}:{display:"block"}}
      >
        <Link to="/signin">
        Login
        </Link>
        
      </h1>

      <div className="header__Dropdown">
      <div 
      style={stateObj.state.userStatus?{border:"thick solid lime"}:{border:"thin solid #343F4B"}}
      className="header__profileImg">
      <FcCustomerSupport/>
      </div>
        <ul className="header__Dropdown__UList">
          <li 
          className="header__Dropdown__UList-li"
          onClick={()=>auth.signOut()}>
            Sign Out
          </li>
          
          <li className="header__Dropdown__UList-li">
            Settings
          </li>
          
        </ul>
      </div>

      

    </header>
    </header>
   );
}
 
export default Header;