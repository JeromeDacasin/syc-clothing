
import './App.css';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header.component';




function App() {
  
 
  return (
    <div>
        <Header/>
        <Routes>
          
          <Route  path='/' element={<HomePage/>}/>
          <Route  path='/shop/hats' element={<ShopPage/>}/>
          
        
        </Routes>
      
    
        
    </div>
  );
}

export default App;
