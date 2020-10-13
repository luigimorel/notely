import React, { useState } from 'react';
import { FormWrapper, SignUpWrapper, Button } from '../styles'


const UserForm = (props: any) => {
    // set the default state of the form
    const [values, setValues] = useState();

    // update the state when a user types in the form
    const onChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (
        <SignUpWrapper>
            {/* Display the appropriate form header */}
            {props.formType === 'signup' ? <h2>Sign Up</h2> : <h2>Sign In</h2>}
            {/* perform the mutation when a user submits the form */}
            <FormWrapper
                onSubmit={event => {
                    event.preventDefault();
                    props.action({
                        variables: {
                            ...values
                        }
                    });
                }}
            >
                {props.formType === 'signup' && (
                    <React.Fragment>
                        <label htmlFor="username">Username:</label>
                        <input
                            required
                            type="text"
                            id="username"
                            name="username"
                            placeholder="username"
                            onChange={onChange}
                        />
                    </React.Fragment>
                )}
                <label htmlFor="email">Email:</label>
                <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={onChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                    required
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChange}
                />
                <Button type="submit">Submit</Button>
            </FormWrapper>
        </SignUpWrapper>
    );
};

export default UserForm;
