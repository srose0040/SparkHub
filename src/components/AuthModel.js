import {useState} from 'react'

const AuthModel = ({setShowModal, isSignUp}) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)


    const handleClick = () =>
    {
        setShowModal(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault() /* prevent page from refreshing */
        try {
            if (isSignUp && (password !== confirmPassword))
            {
                setError('Passwords need to match!')
            }
            console.log('make a post req to database')
        }
        catch (error) {
            console.log(error)
        }
    }



    return (
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>X</div>
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