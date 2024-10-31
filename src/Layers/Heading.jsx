import React from 'react'

const Heading = ({className, text}) => {
  return (
    <h1 className={`lg:text-[44px] text-[32px] text-white font-medium leading-[132.5%] ${className}`}>
      {text}
    </h1>
  )
}

export default Heading