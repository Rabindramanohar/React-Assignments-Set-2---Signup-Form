import React, {useState} from 'react'
import SignUpForm from './SignUpForm'
import SuccessForm from './SuccessForm';



function Form() {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div>
            {!isSubmitted ? <SignUpForm submitForm = {submitForm} /> : <SuccessForm />}
        </div>
    )
}

export default Form
