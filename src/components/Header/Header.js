import "./Header.scss"
import { ACTION } from "../UseReducer/UseReducer";
import {FcCustomerSupport,FcSearch} from 'react-icons/fc';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { auth } from "../../Lib/FireBase/FireBase";
import { pageWrapper } from "../App/App";
import { useContext } from "react";
const Header = () => {
  
  let stateObj = useContext(pageWrapper)

  return ( 
    <header className="headerFixed">
    <header className="header">

      
      <h1 className="header__Logo">
        <Link to ="./" style={{color:"black"}}>School Of Code</Link>
        
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

          <li onClick={()=>stateObj.dispatch({type:ACTION.CHOOSEN_PAGE,payload:21})}
          className="header__Dropdown__UList-li">Firebase</li>

          <li onClick={()=>stateObj.dispatch({type:ACTION.CHOOSEN_PAGE,payload:24})}
          className="header__Dropdown__UList-li">CodeWars</li>
          </Link>
        </ul>
      </div>

      <div className="header__SearchCont">
        <FcSearch className="header__SearchCont-icon"/>
        <input type="text" className="header__SearchCont-Bar"/>
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