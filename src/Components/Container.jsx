import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`lg:max-w-[1398px] md:max-w-[728px] max-w-full px-[15px] md:px-0 mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default Container