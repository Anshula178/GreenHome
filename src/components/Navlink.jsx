import React from 'react'
import { Link } from 'react-router-dom'

const Navlink = (props) => {
    const {link,children}=props
  return (
    <div>
        <Link  to={link} className="font-semibold  no-underline py-4 hover:text-blue-700 transition  px-3 text-black">{children}</Link>
      
    </div>
  )
}

export default Navlink
