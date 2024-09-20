import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[100vh]">
        <div className='signupPage h-[100%] w-[100%] flex flex-col justify-center items-left px-5 lg:px-40 text-white md:pt-20'>
        <h1 className='font-bold text-4xl lg:text-6xl pb-4'>Get Started With Career Compass</h1>
        <p className='font-medium text-xl'>Join Us Today To Find Out What Major Suits You The Most</p>

       <button className="bg-[#6d31ed] text-white font-medium text-lg hover:bg-pink-500 transition-all duration-1000 w-[120px]
       mt-[10px] py-3 rounded" 

       onClick={() => navigate('/signupform')}
       >Sign Up</button>

       </div>
      </div>
  )
}

export default SignUp