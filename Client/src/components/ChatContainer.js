import ChatHeader from "./ChatHeader";
import MatchesDisplay from "./MatchesDisplay";
import ChatDisplay from "./ChatDisplay";
import {useState} from "react";

const ChatContainer = ({user}) => {
    const [clickedUser, setClickedUser] = useState(null)

    console.log('clickuser', clickedUser)

    return (
        <div className="chat-container">
            <ChatHeader user={user}/>
            <div>
                <button className="option" onClick={() => setClickedUser(null)}>Matches</button>
                <button className="option" disabled={!clickedUser}>Chats</button>
            </div>

            {!clickedUser && <MatchesDisplay matches={user.matches} setClickedUser ={() => setClickedUser()}/>}

            {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser}/>}
        </div>
    )
}

export default ChatContainer