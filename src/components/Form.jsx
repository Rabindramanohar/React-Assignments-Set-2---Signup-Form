import React, {useState} from 'react'
import SignUpForm from './SignUpForm'
import SuccessForm from './SuccessForm';



function Form() {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [emailValue, setEmailValue] = useState("");

    function submitForm() {
        setIsSubmitted(true);
    }

    function emailProfileHandler(item) {
        setEmailValue({emailValue: item});
        console.log("inside emailProfile: "+emailValue);
    }
    return (
        <div>
            {!isSubmitted ? <SignUpForm emailProfile = {emailProfileHandler} submitForm = {submitForm} /> : <SuccessForm />}
        </div>
    )
}

export default Form
