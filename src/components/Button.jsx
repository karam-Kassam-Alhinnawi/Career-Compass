import { useNavigate } from "react-router-dom"

export const Button = ({children, paddingX, paddingY, mt, width, rounded, location}) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(`/${location}`)} 
    className="bg-[#6d31ed] text-white font-medium text-lg hover:bg-pink-500 transition-all duration-1000" 
    style={{paddingInline: paddingX, paddingBlock: paddingY, marginTop: mt, width: width, borderRadius: rounded}}>{children}</button>
  )
}