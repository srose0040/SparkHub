import logo from '../images/SparkHub_Logo_Black-e1625218533269.png'
import colorLogo from '../images/OIP.jpg'

const Nav = ({minimal}) => {



    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : logo}/>
            </div>
        </nav>
    )
}
export default Nav