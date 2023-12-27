import whiteLogo from '../images/SparkHub_Logo_Black-e1625218533269.png'
import colorLogo from '../images/OIP.jpg'

const Nav = ({minimal, setShowModal, showModal, setIsSignUp}) => {

    const handleClick = () =>{
        setShowModal(true) /* Shows Log In modal */
        setIsSignUp(false) /* false bc we are logging in */
    }
    const authToken = false /* WAS PREVIOUSLY SET TO TRUE. SET TO FALSE IF YOU WANT LOG IN BTN TO SHOW */

    return (
        <nav className="overlay">
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : whiteLogo}/>
            </div>
            {!authToken && !minimal && <button
                className="nav-button"
                onClick={handleClick}
                disabled={showModal}
                > Log In</button>}
        </nav>
    )
}
export default Nav