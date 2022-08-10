import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-buttom.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";


import './sign-in.style.scss';


// class SignIn extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             email: "",
//             password: ""
//         }
//     }

//      HandleSubmit = e => {
//         e.preventDefault();

//         this.setState({ email: "", password: ""})

       
//      }

//      HandleChange = e => {
//         const { value , name} = e.target

//         this.setState({ [name]: value })
//      }
    
//     render() {
//         return(
//             <div className="sign-in">
//                 <h2>I already have an account</h2>
//                 <span>Sing in with your email and password</span>

//                 <form>
//                     <input 
//                         name="email"
//                         type="email" 
//                         value={this.state.email}
//                         onChange={this.HandleChange}
//                         
//                     />

//                     <label >Email</label>

//                     <input 
//                         name="password" 
//                         type="password" 
//                         value={this.state.password} 
//                         onChange={this.HandleChange}
//                         
//                     />
//                     <label >Password</label>

//                     <input type="submit" value="submit form"/>
//                 </form>
//             </div>
//         )
//     }
// }


const SignIn = () => {
    let [inputField, setInputField] = useState({email: '', password: ''});
   

    const HandleSubmit = e => {
        e.preventDefault();
        
        inputField = { email: '', password: ''}
     
    }

    const HandleChange = e => {

        let { value, name } = e.target
      
        setInputField({ ...inputField, [name]: value})

    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sing in with your email and password</span>

            <form onSubmit={HandleSubmit}>
                <FormInput 
                    name="email"
                    type="email" 
                    label="Email"
                    value={inputField.email || ''}
                    handleChange={HandleChange}
                    required
                />

            
                <FormInput 
                    name="password" 
                    type="password" 
                    label="Password"
                    value={inputField.password || ''} 
                    handleChange={HandleChange}
                    required
                    autoComplete="true"
                />
                <div className="button">
                    <CustomButton  type="submit" > Sign In</CustomButton>
                    <CustomButton  onClick={signInWithGoogle} isGoogleSignIn >{' '} Sign In with Google {' '} </CustomButton>
                </div>
            </form>
        </div>
  
    )
}

export default SignIn;