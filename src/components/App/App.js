
import { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import FireLoginStatus from "../../Lib/FireLoginStatus/FireLoginStatus";
import Categories from "../Catagories/Categories";
import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import RoadMap from "../RoadMap/RoadMap";
import Signin from "../Signin/Signin";
import { ACTION, initState, reducer } from "../UseReducer/UseReducer";
import React from "react";
import './App.scss';
import { CategoriesApi } from "../../CategoriesApi/CategoriesApi";

export const pageWrapper = React.createContext()

function App() {
  
  let [state,dispatch]= useReducer(reducer,initState)

  let [user]=FireLoginStatus()
  useEffect(()=>{
    dispatch({type:ACTION.USER_STATUS,payload:user?true:false})
  },[user])

  console.log(state)

  return (

    <Router>
    <div className="App">

    <pageWrapper.Provider value={{state,dispatch}}>

      <Header/>
    
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/RoadMap" component={RoadMap} />
        <Route exact path="/Categories" component={Categories}/>
        {/* <Route path="/BackEnd" component={BackEnd}/> */}
      </Switch>
    
      </pageWrapper.Provider>

    </div>
    </Router>

  );
}

export default App;
