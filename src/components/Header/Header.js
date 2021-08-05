import "./Header.scss"
import {FcCustomerSupport,FcSearch} from 'react-icons/fc';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { auth } from "../../Lib/FireBase/FireBase";

const Header = ({state}) => {
  return ( 
    <header className="header">

      <h1 className="header__Logo">
        <Link to ="./" style={{color:"black"}}>School Of Code</Link>
        
      </h1>
      
      <div className="header__Dropdown">
        <Link to="./Categories">
          <p className="header__Dropdown__Categories">Categories</p>
        </Link> 
        <ul className="header__Dropdown__UList">
          <li className="header__Dropdown__UList-li">HTML</li>
          <li className="header__Dropdown__UList-li">CSS</li>
          <li className="header__Dropdown__UList-li">Sass</li>
          <li className="header__Dropdown__UList-li">JavaScript</li>
          <li className="header__Dropdown__UList-li">React</li>
          <li className="header__Dropdown__UList-li">Firebase</li>
        </ul>
      </div>

      <div className="header__SearchCont">
        <FcSearch className="header__SearchCont-icon"/>
        <input type="text" className="header__SearchCont-Bar"/>
      </div>


      <h1 className="header__Login"
      style={state.userStatus?{display:"none"}:{display:"block"}}
      >
        <Link to="/signin">
        Login
        </Link>
        
      </h1>

      <div className="header__Dropdown">
      <div 
      style={state.userStatus?{border:"thick solid lime"}:{border:"thin solid #343F4B"}}
      className="header__profileImg">
      <FcCustomerSupport/>
      </div>
        <ul className="header__Dropdown__UList">
          <li className="header__Dropdown__UList-li"
          onClick={()=>auth.signOut()}
          >Sign Out</li>
          
        </ul>
      </div>

      

    </header>
   );
}
 
export default Header;