import './loginSignUp.style.scss';
import SignIn from '../../components/sign-in/sign-in.login';
import SignUp from '../../components/sign-up/sign-up.component';

const Login = () => {

    return (
        <div className='loginSignUp'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}


export default Login