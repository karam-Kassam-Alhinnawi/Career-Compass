import {auth} from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import styles from './SignUpForm.module.css'


export const SignUpForm = ({setFullName, fullName, email, setEmail, password, 
  setPassword, error, setError}) => {

  // Set The State For the Email, password, and name;
  const navigate = useNavigate();

  // Handle the submition, creates a userProfile
  
  let handleSubmit = async (e) => {
    e.preventDefault();
    try{
       const userCredential = await createUserWithEmailAndPassword(auth, email, password)
       const user = userCredential.user;
       navigate('/welcome');

     // If the email is already in use set the Error
    } catch(err){
        if(err.code === 'auth/email-already-in-use'){
            setError(true);
        };
        console.log(err)
    }
  }

  return (
    <div className=" mt-[100px] flex items-center justify-center border-2 w-[50%] m-auto rounded-lg">
        <form className="flex flex-col items-center justify-between h-[75vh] pt-10" onSubmit={handleSubmit}>
            <h2 className="font-bold text-6xl">Sign Up</h2>
            
            {/*Inputs*/}
            <div className="flex flex-col items-center justify-center">
            <label className="mt-10 mr-4">
                Full Name: <br />
                <input type="text" name="" id="" onChange={(e) => setFullName(e.target.value)}
                className={styles.inputStyles} value={fullName} required/>
            </label>

            <label className="mt-10 mr-4">
                Email: <br />
                <p className={`${error ? 'text-red-600' : ''}`}>{error ? "Email Is Already In Use" : ''}</p>
                <input type="text" name="" id="" onChange={(e) => setEmail(e.target.value)}
                className={styles.inputStyles} required/>
            </label>

            <label htmlFor="password" className="mt-10 mr-4">
                Password: <span className="text-sm text-gray-600">(6 Characters Minimum) </span> <br />
                <input type="password" name="" id="" onChange={(e) => setPassword(e.target.value)}
                className={styles.inputStyles} required/>
            </label>
            </div>

            <button type='submit' className="bg-[#6d31ed] text-white font-medium text-lg px-8 py-2 rounded
            hover:bg-pink-500 transition-all duration-1000">Sign Up</button>

            <p>Already Have An Accout? <Link to='/login' style={{textDecoration: 'underline'}}>Log In</Link></p>
        </form>
    </div>
  )
}
