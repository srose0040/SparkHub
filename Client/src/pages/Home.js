import Nav from '../components/Nav'
import {useState}  from "react";
import AuthModel from "../components/AuthModel";
import {useCookies} from 'react-cookie'

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true) /* assuming everyone in our website has not signed up yet */
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const authToken = cookies.AuthToken

    const handleClick = () => {
        if (authToken) {
            removeCookie('UserId', cookies.UserId)
            removeCookie('AuthToken', cookies.AuthToken)
            window.location.reload()
            return
        }
        setShowModal(true)
        setIsSignUp(true)
    }

    return (
        <div className="overlay">
        <Nav minimal={false}
             authToken={authToken}
             setShowModal={setShowModal}
             showModal={showModal}
             setIsSignUp={setIsSignUp}/>
        <div className="home">
            <h1 className='primary-title'>Swipe Right</h1>
            <button className="primary-button" onClick={handleClick}>
                {
                    authToken ? 'Sign In' : 'Create Account'
                }
            </button>

            {showModal && (
                <AuthModel setShowModal={setShowModal} isSignUp={isSignUp}/>
            )}

        </div>
        </div>
    )
}
export default Home