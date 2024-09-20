import {auth} from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import styles from './SignUpForm.module.css'


export const LoginForm = ({ email, setEmail, password, setPassword, setIsAuthenticated, setFullName}) => {
  
  const navigate = useNavigate();
  
  // Handle the submition
  
  let handleSubmit = async (e) => {
    e.preventDefault();
    try{
       const userCredential = await signInWithEmailAndPassword(auth, email, password)
       const user = userCredential.user;

       navigate('/welcome')

       setFullName(user.displayName);

       setIsAuthenticated(true);
       localStorage.setItem('isAuthenticated', true);


       
     // If the email is already in use set the Error
    } catch(err){
        console.log(err)
    }
  }


  navigate('/welcome');

  return (
    <div className=" mt-[100px] flex items-center justify-center border-2 w-[50%] m-auto rounded-lg">
        <form className="flex flex-col items-center justify-between h-[75vh] pt-10" onSubmit={handleSubmit}>
            <h2 className="font-bold text-6xl">Login</h2>
            
            {/*Inputs*/}
            <div className="flex flex-col items-center justify-center">

            <label className="mt-10 mr-4">
                Email: <br />
                <input type="text" name="" id="" onChange={(e) => setEmail(e.target.value)}
                className={styles.inputStyles} required/>
            </label>

            <label htmlFor="password" className="mt-10 mr-4">
                Password: <br />
                <input type="password" name="" id="" onChange={(e) => setPassword(e.target.value)}
                className={styles.inputStyles} required/>
            </label>
            </div>

            <button type='submit' className="bg-[#6d31ed] text-white font-medium text-lg px-8 py-2 rounded
            hover:bg-pink-500 transition-all duration-1000">Log In</button>

            <p>Don't Have An Account Yet? <Link to='/signupform' style={{textDecoration: 'underline'}}>Make One Right Now</Link></p>
        </form>
    </div>
  )
}
