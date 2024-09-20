import { useNavigate } from 'react-router-dom'
import HatImg from '../../public/hat.png'
import { Button } from './Button';
import { useLocation } from 'react-router-dom';


export const Navbar = ({isAuthenticated}) => {

  const location = useLocation();

  const navigate = useNavigate();

  return (
    <div className="bg-white flex justify-between items-center px-4 md:px-10 py-4 fixed z-20 w-full top-0">
       <div className='flex items-center'>
       <img src={HatImg} className='w-10 md:w-12 rounded-full' alt="" />
       <h2 className='lowercase font-bold text-lg md:text-3xl ml-2 cursor-pointer' 
       onClick={isAuthenticated ? () => navigate('/welcome') : () => navigate('/')}>CAREER COMPASS</h2>
       </div>
      
       <Button paddingX="20px" paddingY="8px" rounded="18px" location={location.pathname === 
        '/signup' || '/signupform' ? 'login' : 'signup'
       }>
      {location.pathname === '/signup' || '/signupform' ? "Login" : "Sign Up"}</Button>

    </div>
  )
}