import React, { createContext, useState, useContext } from 'react'

const authContext = createContext();
function Auth({children}) {
  const [authenticate, isAuthenticate] = useState(false);

  const adminLogin = ()=> isAuthenticate(true);
  return (
    <>
   <authContext.Provider value={{authenticate,adminLogin}}>
{children}
   </authContext.Provider>
    </>
  )
}

export default Auth
export const useAuth = () => useContext(authContext);
