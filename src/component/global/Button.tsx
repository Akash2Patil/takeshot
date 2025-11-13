import React from 'react'

type Buttonprops = {
    onClick? : () => void;
    children : React.ReactNode;  
}

const Button: React.FC<Buttonprops> = ({onClick , children}) => {
  return (
    
    <button onClick={onClick} className="px-5 py-2 bg-white text-white shadow border-1 border-[#dadada] rounded-lg transition-all cursor-pointer">
        {children}
    </button>
    
  )
}

export default Button