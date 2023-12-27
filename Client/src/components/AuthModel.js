import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom";
import {useCookies} from 'react-cookie'

const AuthModel = ({setShowModal, isSignUp}) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

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
            /* if they are tryna sign up, post to link ending with signup else login */
           const response = await axios.post(
               `http://localhost:8000/${isSignUp ? 'signup' : 'login'}`, {email, password})

            setCookie('UserId', response.data.userId)
            setCookie('AuthToken', response.data.token)

            /* if the response status is 201 it will be stored in var success */

            const success = response.status === 201

            /* redirect to next page in program flow */
            if (success && isSignUp) navigate('/onboarding')
            if (success && !isSignUp) navigate('/dashboard')

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
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {isSignUp && <input /* if creating an account show this*/
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="Confirm Password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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