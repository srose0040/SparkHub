import {useState} from 'react'
import Nav from "../components/Nav";
import {useCookies} from 'react-cookie'

const Onboarding = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [formData, setFormData] = useState({
        user_id: cookies.UserId,
        first_name: "",
        dob_day: "",
        dob_month: "",
        dob_year: "",
        show_gender: false,
        gender_identity: "man",
        gender_interest: "woman",
        url: "",
        about: "",
        matches: []
    })

    const handleSubmit = () => {
        console.log('submitted')
    }

    const handleChange = (e) => {
        console.log('e', e)
        /* if it is a checkbox we want to know if it is checked or not else get value */
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        const name = e.target.name
        /* getting previous state */

        setFormData((prevState) => ({
            ...prevState,
            [name] : value
        }))
    }

    return (
        <>
            <Nav minimal={true} setShowModal={() => {
            }} showModal={false}/>
            <div className="onboarding">
                <h2>CREATE ACCOUNT</h2>
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first_name">First Name</label>
                        <input id="first_name"
                               type="text"
                               name="first_name"
                               placeholder="First Name"
                               required={true}
                               value={formData.first_name}
                               onChange={handleChange}
                        />

                        <label>Birthday</label>
                        <div className="multiple-input-container">
                            <input id="dob_day"
                                   type="number"
                                   name="dob_day"
                                   placeholder="DD"
                                   required={true}
                                   value={formData.dob_day}
                                   onChange={handleChange}
                            />
                            <input id="dob_month"
                                   type="number"
                                   name="dob_month"
                                   placeholder="MM"
                                   required={true}
                                   value={formData.dob_month}
                                   onChange={handleChange}
                            />
                            <input id="dob_year"
                                   type="number"
                                   name="dob_year"
                                   placeholder="YYYY"
                                   required={true}
                                   value={formData.dob_year}
                                   onChange={handleChange}
                            />
                        </div>

                        <label>Gender</label>
                        <div className="multiple-input-container">
                            <input id="man-gender-identity"
                                   type="radio"
                                   name="gender_identity"
                                   value="man"
                                   onChange={handleChange}
                                   checked={formData.gender_identity === 'man'} /* makes it return true */
                            />
                            <label htmlFor="man-gender-identity">Man</label>
                            <input id="woman-gender-identity"
                                   type="radio"
                                   name="gender_identity"
                                   value="woman"
                                   onChange={handleChange}
                                   checked={formData.gender_identity === 'woman'} /* makes it return true */
                            />
                            <label htmlFor="woman-gender-identity">Woman</label>
                            <input id="nonbinary-gender-identity"
                                   type="radio"
                                   name="gender_identity"
                                   value="nonbinary"
                                   onChange={handleChange}
                                   checked={formData.gender_identity === 'nonbinary'} /* makes it return true */
                            />
                            <label htmlFor="nonbinary-gender-identity">Nonbinary</label>
                        </div>

                        <label htmlFor="show-gender">Show gender on my profile</label>
                        <input id="show-gender"
                               type="checkbox"
                               name="show_gender"
                               onChange={handleChange}
                               checked={formData.show_gender} /* makes it return true */
                        />
                        <label>I am interested in</label>
                        <div className="multiple-input-container">
                            <input id="man-gender-interest"
                                   type="radio"
                                   name="gender_interest"
                                   value="man"
                                   onChange={handleChange}
                                   checked={formData.gender_interest === 'man'} /* makes it return true */
                            />
                            <label htmlFor="man-gender-interest">Men</label>
                            <input id="woman-gender-interest"
                                   type="radio"
                                   name="gender_interest"
                                   value="woman"
                                   onChange={handleChange}
                                   checked={formData.gender_interest === 'woman'} /* makes it return true */
                            />
                            <label htmlFor="woman-gender-interest">Women</label>
                            <input id="nonbinary-gender-interest"
                                   type="radio"
                                   name="gender_interest"
                                   value="nonbinary"
                                   onChange={handleChange}
                                   checked={formData.gender_interest === 'nonbinary'} /* makes it return true */
                            />
                            <label htmlFor="nonbinary-gender-interest">Nonbinary</label>
                            <input id="everyone-gender-interest"
                                   type="radio"
                                   name="gender_interest"
                                   value="everyone"
                                   onChange={handleChange}
                                   checked={formData.gender_interest === 'everyone'} /* makes it return true */
                            />
                            <label htmlFor="everyone-gender-interest">Everyone</label>
                        </div>

                        <label htmlFor="about">About me</label>
                        <input id="about"
                               type="text"
                               name="about"
                               required={true}
                               placeholder="I like long walks.."
                               value={formData.about}
                               onChange={handleChange}
                        />
                        <input type="submit"/>

                    </section>

                    <section>

                        <label htmlFor="url">Profile Photo</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className="photo-container">
                            {formData.url && <img src={formData.url} alt="profile pic preview"/>}
                        </div>


                    </section>


                </form>
            </div>
        </>
    )
}
export default Onboarding