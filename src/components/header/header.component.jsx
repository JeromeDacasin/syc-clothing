import './header.style.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from './../../assets/SYCLOGO.svg'

const Header = ({users}) => {

    return(
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo'/>
            </Link>

            <div className='options'>
                <Link className='option' to="/shop">
                    SHOP
                </Link>
                <Link className='option' to="/shop">
                    CONTACT
                </Link>
                    {
                        users ? 
                        <div className='option' onClick={() => {return auth.signOut()}}>SIGN OUT</div>
                        :
                        <Link className='option' to="/login">LOGIN</Link>
                    } 
              
            </div>
        </div>
    )
}

export default Header