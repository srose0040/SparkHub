import TinderCard from "react-tinder-card";
import {useEffect, useState} from "react";
import {useCookies} from 'react-cookie'
import ChatContainer from '../components/ChatContainer'
import axios from "axios";

const Dashboard = () => {
    const [user, setUser] = useState(null)
    const [lastDirection, setLastDirection] = useState()
    const [genderedUsers, setGenderedUsers] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])


    /* getting user id from cookie */
    const userId = cookies.UserId
    const getUser = async () => {
        try {
            const response = await axios.get('http://localhost:8000/user', {
                params: {userId}
            })
            setUser(response.data)
        }
        catch (e) {
            console.log(e)
        }
    }

    const getGenderedUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/gendered-users', {
                params: {gender: user?.gender_interest}
            })
            setGenderedUsers(response.data)
        }
        catch (e) {
            console.log(e)
        }
    }

    /* anytime the user changes we do this */
    useEffect(() => {
        getUser()

    }, [])

    useEffect(() => {
        if (user) {
            getGenderedUsers()
        }
    }, [user])


    const updateMatches = async (matchedUserId) => {
        try {
            await axios.put('http://localhost:8000/addmatch', {
                userId,
                matchedUserId
            })
            getUser()
        } catch (e) {
            console.log(e)
        }
    }




    const swiped = (direction, swipedUserId) => {
        if (direction === 'right') {
            updateMatches(swipedUserId)
        }
        setLastDirection(direction)
    }
/* everything above saves or sets the directions that we went last when swiping */

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    const matchedUserIds = user?.matches.map(({user_id}) => user_id).concat(userId)

    /* if the user is not included in the match list return them */
    const filteredGenderedUsers = genderedUsers?.filter(
        genderedUser => !matchedUserIds.includes(genderedUser.user_id)
    )

    return (
        <>{user &&
        <div className="dashboard">
            <ChatContainer user={user}/>
            <div className="swipe-container">
                <div className="card-container">
                    {filteredGenderedUsers?.map((genderedUser) =>
                    <TinderCard
                        className='swipe'
                        key={genderedUser.user_id}
                        onSwipe={(dir) => swiped(dir, genderedUser.user_id)}
                        onCardLeftScreen={() => outOfFrame(genderedUser.first_name)}>
                        <div style={{ backgroundImage: 'url(' + genderedUser.url + ')' }}
                             className='card'>
                            <h3>{genderedUser.first_name}</h3>
                        </div>
                    </TinderCard>
                    )}
                    <div className="swipe-info">
                        {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
                    </div>
                    {/* if last direction exists tell the user */}
                </div>
            </div>
        </div>}
        </>
    )
}
export default Dashboard