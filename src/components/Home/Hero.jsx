import { Button } from "../Button"

export const Hero = () => {
  return (
        <div className="h-[100vh]">
        <div className='hero h-[100%] w-[100%] flex flex-col justify-center items-left px-5 lg:px-40 text-white'>
        <h1 className='font-bold text-4xl lg:text-6xl pb-4'>Discover Your Future Career</h1>
        <p className='font-medium text-xl'>Career Compass Is a Free Website That Helps Student Exploring Thier Carrer Pathways</p>
       <Button mt='10px' paddingY='10px' width="120px" rounded="3px" location="signup">Sign Up</Button>
       </div>
      </div>
  )
}
