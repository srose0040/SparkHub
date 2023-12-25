import Nav from '../components/Nav'
import {useState}  from "react";
import AuthModel from "../components/AuthModel";

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true) /* assuming everyone in our website has not signed up yet */

    const authToken = false

    const handleClick = () => {
        console.log('clicked')
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