import "./Signin.scss"
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useRef } from "react";
import {auth} from "../../Lib/FireBase/FireBase";


const Signin = () => {


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


  return ( 
    <main className="Signin">
      <div className="Signin__Container">

        <h1 className="Signin__Container-title">Log In to Your Account</h1>

        <form>
          <label htmlFor="email">
          <AiOutlineMail className="icons"/>
            <input ref={emailRef} name="email" type="email" />
          </label>

          <label htmlFor="Password">
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