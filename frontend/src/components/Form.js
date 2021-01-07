import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom"

const Form = ({history}) => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    const redirectSubmit = () => {
        history.push("/fulfilled")
    }


  return (
    <div className="form__container">
      <h2>Complete your order</h2>
      <form onSubmit={handleSubmit(onSubmit)}>  
        <input type="name" placeholder="Your name" name="name" ref={register({required: true, minLength: 3})} />{errors.name && <span>Enter a valid name!</span>}
        <input type="email" placeholder="Your email" name="email" ref={register({required: true, pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "email is invalid"}})} />{errors.email && <p>{errors.email.message}</p>}
        <input type="text" placeholder="Address" name="Address" ref={register({required: true, minLength: 5})} /> {errors.address && <span>Address is invalid</span>}
        <input type="text" placeholder="Country" name="country" ref={register({required: true, minLength: 3})} /> {errors.country && <span>Enter a valid country</span>}
        <input type="text" placeholder="City" name="city" ref={register({required: true, minLength: 3})}></input>
        <input type="zipcode" placeholder="Zipcode" name="zipcode" ref={register({required: true, minLength: 3})}></input>
        <button type="submit" onClick={redirectSubmit}>Submit your order</button>
      </form>
    </div>
  );
};

export default Form;
