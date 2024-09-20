import { Link } from "react-router-dom"
import { Button } from "../components/Button"

const WelcomePage = ({fullName, isAuthenticated}) => {
  
  return (
   <>
   {isAuthenticated ? <div className="h-[100vh]">
        <div className='welcomePage h-[100%] w-[100%] flex flex-col justify-center items-left px-5 lg:px-40 text-white md:pt-20'>
        <h1 className='font-bold text-4xl lg:text-6xl pb-4'>Welcome <span className='underline'>{fullName}</span></h1>
        <p className='font-medium text-xl mb-4'>Get Started By Taking The Quiz To Find Out Which Major Fits You The Most</p>
        <Button paddingX="12px" paddingY="8px" width="180px" location='quiz'>Take The Quiz</Button>
       </div>
      </div> : 
      
      <div className="flex items-center justify-center h-[100vh]">
        <h1 className="text-center font-bold text-6xl">Please <Link to='/login' className="underline text-red-800">Log In</Link> First</h1>
      </div>
      
      }
   </>
  )
}

export default WelcomePage