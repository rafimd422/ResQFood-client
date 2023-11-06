import { createContext, useState } from "react";



export const AuthContext = createContext(null)


const OurContext = ({children}) => {



const AuthValue = {}

  return (
<AuthContext.Provider value = {AuthValue}>
{children}
</AuthContext.Provider>
  )
}

export default OurContext
