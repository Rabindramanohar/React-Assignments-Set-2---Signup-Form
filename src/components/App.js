import React, {Component, useState} from "react";
import '../styles/App.css';
import useForm from './useForm';
import validate from './ValidateForm'

const App = () => {

  const {handleChange, values, handleSubmit, errors} = useForm(validate);

/* Form must have the following Input Fields with given attributes:
1) Name | data-testid = 'name'
2) Email address | data-testid = 'email'
3) Gender | data-testid = 'gender'
4) Phone Number | data-testid = 'phoneNumber'
5) Password | data-testid = 'password', type='password'
6) Submit button | data-testid = 'submit' */


/* const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [gender, setGender] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [password, setPassword] = useState(""); */


  return (
    <div id="main">
      <form onSubmit = {handleSubmit}>
        <label>Name: </label>
        <input 
          type="text" 
          name= "name" 
          value = {values.name}
          onChange = {handleChange} 
          data-testid = "name" 
        /> {errors.name && <p>{errors.name}</p>}
        <br />
        <label>Email: </label>
        <input 
          type="email" 
          name= "email" 
          value = {values.email}
          onChange = {handleChange} 
          data-testid = "email" 
        /> {errors.email && <p>{errors.email}</p>}
        <br />
        <label>Gender: </label>
        <input 
          type="radio" 
          name= "gender" 
          value = {values.gender}
          onChange = {handleChange} 
          checked = {values.gender === "male"}
          data-testid = "gender" 
        />Male
        {errors.gender && <p>{errors.gender}</p>}
        <input 
          type="radio" 
          name= "gender" 
          value = {values.gender}
          onChange = {handleChange} 
          checked = {values.gender === "female"}
          data-testid = "gender" 
        />Female
        {errors.gender && <p>{errors.gender}</p>}
        <input 
          type="radio" 
          name= "gender" 
          value = {values.gender}
          onChange = {handleChange} 
          checked = {values.gender === "other"}
          data-testid = "gender" 
        />Others
        {errors.gender && <p>{errors.gender}</p>}
        <br />
        <label>Ph Number: </label>
        <input 
          type="text" 
          name= "phone" 
          value = {values.phone}
          onChange = {handleChange} 
          data-testid = "phoneNumber" 
        /> {errors.phone && <p>{errors.phone}</p>}
        <br />
        <label>Password: </label>
        <input 
          type="password" 
          name= "password" 
          value = {values.password}
          onChange = {handleChange} 
          data-testid = "password" 
        /> {errors.password && <p>{errors.password}</p>}
        <br />
        <button data-testid = 'submit'>Submit</button>
      </form>
    </div>
  )
}


export default App;
