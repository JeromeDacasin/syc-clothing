import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-buttom.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import './sign-up.style.scss';

const SignUp = () => {
    let [ inputField, setInputField] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleSubmit = async e => {

        e.preventDefault();
      
        if(inputField.password !== inputField.confirmPassword)
        {
            alert("password doesnt match")
            return;
        }

        try {

            const displayName = inputField.displayName 
      
            const { user } = await auth.createUserWithEmailAndPassword(inputField.email, inputField.password)
       
          await createUserProfileDocument(user, { displayName })

          inputField = {displayName: "", email: "", password: "", confirmPassword: ""}

        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = e => {
        
        const { name, value } = e.target
        
        setInputField({ ...inputField, [name]: value})

      

    }
    return(
        <div className="sign-up">
            <h2 className="title"> I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                
                <FormInput
                    type='text'
                    name='displayName'
                    value={inputField.displayName || ""}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                  <FormInput
                    type='text'
                    name='email'
                    value={inputField.email || ""}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                  <FormInput
                    type='password'
                    name='password'
                    value={inputField.password || ""}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                  <FormInput
                    type='password'
                    name='confirmPassword'
                    value={inputField.confirmPassword || ""}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />

                <CustomButton type="submit">Sign Up</CustomButton>

            </form>
        </div>
    )
}

export default SignUp;