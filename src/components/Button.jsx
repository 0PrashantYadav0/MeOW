import React from 'react'

function Button({children, onClick, className}) {
  return (
    <button className={`bg-[#ff4820] my-2 px-8 py-3 rounded-md text-md text-center font-medium ${className}`}onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
