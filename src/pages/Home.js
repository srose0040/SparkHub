import Nav from '../components/Nav'
import {useState}  from "react";
import AuthModel from "../components/AuthModel";

const Home = () => {
    const [showModal, setShowModal] = useState(false)

    const authToken = false

    const handleClick = () => {
        console.log('clicked')
        setShowModal(true)
    }

    return (
        <>
        <Nav minimal={false} authToken={authToken} setShowModal={setShowModal} showModal={showModal}/>
        <div className="home">
            <h1>Swipe Right</h1>
            <button className="primary-button" onClick={handleClick}>
                {
                    authToken ? 'Sign In' : 'Create Account'
                }
            </button>

            {showModal && (
                <AuthModel setShowModal={setShowModal}/>
            )}

        </div>
        </>
    )
}
export default Home