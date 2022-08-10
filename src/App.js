
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header.component';
import Login from './pages/LoginAndSignUp/login';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { useEffect, useState } from 'react';




function App() {
  
  let [currentUser, setCurrentUser] = useState(null);

  useEffect( () => {
    const unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {
          
       setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()  
          })
          
        })
      } else {
        setCurrentUser(userAuth)
      }
    
    })
    return unsubscribeFromAuth;
  }, [])
 
  return (

    <div>
        <Header users={currentUser}/>
        <Routes>
          
          <Route  path='/' element={<HomePage/>}/>
          <Route  path='/shop' element={<ShopPage/>}/>
          <Route  path='/login' element={<Login/>}/>
        
        </Routes>
      
    
        
    </div>
  );
}

export default App;
