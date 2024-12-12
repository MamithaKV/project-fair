import React, { createContext, useState } from 'react'
export const addProjectContext=createContext()
export const editProjectContext=createContext()

const ContextShare = ({children}) => {
  const [editProjectResponse,setEditProjectResponse]=useState("")
    const [addProjectResponse,setAddProjectResponse]=useState("")

  return (
    <addProjectContext.Provider value={{addProjectResponse,setAddProjectResponse}}>
   <editProjectContext.Provider value={{editProjectResponse,setEditProjectResponse}}> 
    {children}
    </editProjectContext.Provider>
    </addProjectContext.Provider>
  )
}

export default ContextShare