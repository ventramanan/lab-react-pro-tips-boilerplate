import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Reg() {
    const [formData, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: ""
    });
    const [formError, setError] = useState({});
    const [formsubmit, setSubmit] = useState(false);

    const handler = (e) => {
        let { name, value } = e.target;
        setForm({
            ...formData,
            [name]: value,
        });
    };

    const submit = (e) => {
        e.preventDefault();
        let errors = Validate(formData);
        setError(errors);

        if (Object.keys(errors).length === 0) {
            setSubmit(true);
            toast.success('Registered successfully');
        } else {
            setSubmit(false);
            toast.error('Please fill out all required fields');
        }
    };

    const Validate = (data) => {
        let error = {};
        if (data.firstname.trim() === "") {
            error.firstname = "Please enter the first name";
        }
        if (data.lastname.trim() === "") {
            error.lastname = "Please enter the last name";
        }
        if (data.email.trim() === "") {
            error.email = "Please enter the email";
        }
        if (data.phonenumber.trim() === "" || data.phonenumber.trim().length !== 10) {
            error.phonenumber = "Please enter a valid phone number";
        }
        return error;
    };

    return (
        <div>
            <ToastContainer />
            <div className='form-parent'>
                <form className='my-form' onSubmit={submit}>
                    <div className='success-message'>
                        {formsubmit && <p id='reg'>Registered successfully</p>}
                    </div>
                    <label htmlFor="first-name"></label>
                    <input type="text" name="firstname" id="" placeholder='First Name' onChange={handler} />
                    {formError.firstname ? <p className='error-message'>{formError.firstname}</p> : null}

                    <label htmlFor="last-name"></label>
                    <input type="text" name="lastname" id="" placeholder='Last Name' onChange={handler} />
                    {formError.lastname ? <p className='error-message'>{formError.lastname}</p> : null}

                    <label htmlFor="email"></label>
                    <input type="email" name="email" id="" placeholder='Email' onChange={handler} />
                    {formError.email ? <p className='error-message'>{formError.email}</p> : null}

                    <label htmlFor="contacts"></label>
                    <input type="number" name="phonenumber" id="" placeholder='Phone Number' onChange={handler} />
                    {formError.phonenumber ? <p className='error-message'>{formError.phonenumber}</p> : null}

                    <input type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
}
