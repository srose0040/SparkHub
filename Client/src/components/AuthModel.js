import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom";

const AuthModel = ({setShowModal, isSignUp}) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)

    let navigate = useNavigate()


    const handleClick = () =>
    {
        setShowModal(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault() /* prevent page from refreshing */
        try {
            if (isSignUp && (password !== confirmPassword))
            {
                setError('Passwords need to match!')
                return
            }
            /* get out if there is error else post to backend */
           const response = await axios.post(
               'http://localhost:8000/signup', {email, password})

            /* if the response status is 201 it will be stored in var success */

            const success = response.status === 201

            /* redirect to next page in program flow */
            if (success) navigate('/onboarding')

        }
        catch (error) {
            console.log(error)
        }
    }



    return (
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>✖</div>
            <h2>{isSignUp ? 'Sign Up' : 'Log In'}</h2>
            <p>By clicking Log In, you agree with our terms of use.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    required={true}
                    onChange={(e) => setEmail(e.target)}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    required={true}
                    onChange={(e) => setPassword(e.target)}
                />
                {isSignUp && <input /* if creating an account show this*/
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="Confirm Password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target)}
                />}
                <input className="secondaryButton" type="submit"/>
                <p>{error}</p>
            </form>
            <hr/>
            <h2>WELCOME TO YOUR SAFE SPACE</h2>

        </div>
    )
}
export default AuthModel