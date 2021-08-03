import "./Signin.scss"
import { useHistory } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useEffect, useRef } from "react";
import {auth} from "../../Lib/FireBase/FireBase";
import LoadingPage from "../LoadingPage/LoadingPage";


const Signin = ({state,USER}) => {


  const emailRef=useRef(null)
  const PasswordRef=useRef(null)

  function signUp(e){
    e.preventDefault()
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      PasswordRef.current.value
    ).then(User=>{
      console.log(User)
    }).catch(err=>console.log(err))
  }

  function signIn(e){
    e.preventDefault()
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      PasswordRef.current.value
    ).then(User=>{
      console.log(User)
    }).catch(err=>console.log(err))
  }

  const history = useHistory();
  // function changePage(){
  //   history.push('/')


  // }
useEffect(()=>{

  if(state.userStatus===true){
    setTimeout(()=>{
      history.push('/')
    },2000)
  }

},[state.userStatus])

    




  return ( 
    <main className="Signin">
      {state.userStatus?<LoadingPage/>:<></>}
      
      <div className="Signin__Container">

        <h1 className="Signin__Container-title">Log In to Your Account</h1>

        <form>
          <label htmlFor="email" style={state.userStatus?{border:"thick solid lime"}:{border:"thin solid red"}}>
          <AiOutlineMail className="icons"/>
            <input ref={emailRef} name="email" type="email" />
          </label>

          <label htmlFor="Password" style={state.userStatus?{border:"thick solid lime"}:{border:"thin solid #343F4B"}}>
            <RiLockPasswordLine className="icons"/>
            
            <input ref={PasswordRef} name="Password" type="password" />
          </label>

          <button onClick={signIn}
          className="Login">
            Log in</button>
          <button onClick={signUp}
          className="signUp"
          >Sign up</button>
        </form>
      </div>
      
    </main>
   );
}
 
export default Signin;