import axios from "axios";
import {useEffect, useState} from "react";
import { useCookies } from "react-cookie";

const MatchesDisplay = ({matches, setClickedUser}) => {
    const [matchedProfiles, setMatchedProfiles] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(null);

    /* returns array of all matched user ids */
    const matchedUserIds = matches.map(({user_id}) => user_id)
    const userId = cookies.UserId;

    // Fetch matched profiles from the server
    const getMatches = async () => {
        try {
           const response = await axios.get('http://localhost:8000/users', {
                params: {userIds: JSON.stringify(matchedUserIds)}
            })
            setMatchedProfiles(response.data)
        }
        catch (e) {
            console.log(e)
        }
    }

    // useEffect to fetch matches when the matches prop changes
    useEffect(() => {
        getMatches()
    }, [matches])

    // Filter matched profiles based on user ID
    const filteredMatchedProfiles = matchedProfiles?.filter(
        (matchedProfile) =>
            matchedProfile.matches.filter((profile) => profile.user_id === userId)
                .length > 0
    );




    return (
        <div className="matches-display">
            {filteredMatchedProfiles?.map((match, _index) =>(
                <div key={{_index}} className="match-card" onClick={() => setClickedUser(match)}>
                    <div className="img-container">
                        <img src={match?.url} alt={match?.first_name + ' profile'}/>
                    </div>
                    <h3>{match?.first_name}</h3>
                </div>
            ))}
        </div>
    )
}

export default MatchesDisplay