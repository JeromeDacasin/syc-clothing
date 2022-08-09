// import { auth } from '../firebase/firebase.utils';
// import { useEffect, useState, useContext, createContext } from 'react';


// const AuthContext = createContext();


// export const AuthContextProvider = ({children}) => {
//     let [currentUser, setCurrentUser] = useState({});

//     useEffect( () => {
//       const unsubscribeFromAuth = auth.onAuthStateChanged( user => {
//           setCurrentUser(user);
  
       
       
//       })
//       return unsubscribeFromAuth;
//     }, [])
    
//     const logOut = () => {
//         auth.signOut();
//     }

//     return (
//         <AuthContext.Provider value={{currentUser,logOut}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }



// export const UserAuth = () => {
//     return useContext(AuthContext);
// }