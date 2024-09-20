import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Navbar } from './components/Navbar';
import SignUp from './pages/SignUp';
import { SignUpForm } from './components/SignUp-Login-Forms/SignUpForm';
import { LoginForm } from './components/SignUp-Login-Forms/LoginInForm';
import WelcomePage from './pages/WelcomePage';
import { auth } from './firebase'; // Adjust the import path as necessary
import { onAuthStateChanged } from "firebase/auth";
import QuizPage from './pages/QuizPage';
import NotFound from './pages/404';

function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, []);
   
  return(
    
    <>
    <Navbar isAuthenticated={isAuthenticated}/>
    <Routes>

      <Route path='*' element={<NotFound/>} />

      <Route path='/' element={<Home/>}/>

      <Route path='/signupform' element={<SignUpForm fullName={fullName} setFullName={setFullName} email={email} setEmail={setEmail}
      password={password} setPassword={setPassword} error={error} setError={setError} isAuthenticated={isAuthenticated}
       setIsAuthenticated={setIsAuthenticated}
      />}/>

      <Route path='/signup' element={<SignUp/>} />

      <Route path='/login' element={<LoginForm 
      email={email} setEmail={setEmail}
      password={password} setPassword={setPassword} setFullName={setFullName}
      setIsAuthenticated={setIsAuthenticated}
      />} />

      <Route path='*' element={<NotFound/>}/>

      <Route path='/welcome' element={<WelcomePage fullName={fullName} isAuthenticated={isAuthenticated}/>}/>

      <Route path='/quiz' element={<QuizPage/>} />

    </Routes>
    </>
  )
  
}

export default App
