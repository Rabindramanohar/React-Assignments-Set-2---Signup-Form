import {useState, useEffect} from 'react';


function useForm(callback, validate) {
    const [values, setValues] = useState({
        name: '',
        email: '',
        gender: 'male',
        phone: '',
        password: ''
    });

    const [errors, setError] =useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    // const {name, value, type, checked} = event.target
    //     type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    const handleChange = (event) => {
        const {name, value, type, checked} = event.target;
        
        type === "checkbox" ? setValues({...values, [name] : checked,}) : setValues({...values, [name] : value});
    }

    const handleSubmit = (event) => {
        console.log("inside onSubmit");
        event.preventDefault();
        setError(validate(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors])

    return {handleChange, values, handleSubmit, errors};
}

export default useForm;