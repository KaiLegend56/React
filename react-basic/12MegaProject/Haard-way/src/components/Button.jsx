import React from 'react'

function Button({
    children, // children here is just button text
    type = "button",
    bgColor = "bg-bue-600",
    textColor = "text-white",
    className = "",
    ...props

}) {
  return (
    <button className={` px-4 py-2 rounded-lg ${ className } ${bgColor} ${ textColor } `} {...props}>
        { children } 
    </button> 
  )
}

export default Button