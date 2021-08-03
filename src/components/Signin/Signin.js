import "./Signin.scss"
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

const Signin = () => {
  return ( 
    <main className="Signin">
      <div className="Signin__Container">

        <h1 className="Signin__Container-title">Log In to Your Account</h1>

        <form>
          <label htmlFor="email">
          <AiOutlineMail className="icons"/>
            <input name="email" type="email" />
          </label>

          <label htmlFor="Password">
            <RiLockPasswordLine className="icons"/>
            
            <input name="Password" type="password" />
          </label>

          <button>Log in</button>
        </form>
      </div>
      
    </main>
   );
}
 
export default Signin;