import Chat from "./Chat";
import ChatInput from "./ChatInput";
import axios from "axios";
import {useEffect, useState} from "react";

// ChatDisplay component for displaying and managing chat messages
const ChatDisplay = ({user, clickedUser}) => {
    const userId = user?.user_id
    const clickedUserId = clickedUser?.user_id
    const [usersMessages, setUsersMessages] = useState(null)
    const [clickedUsersMessages, setClickedUsersMessages] = useState(null)

    // Fetch messages between the user and clicked user
    const getUsersMessages = async () => {

        try {
            const response = await axios.get('http://localhost:8000/messages', {
                params: {userId: userId, correspondingUserId: clickedUserId}
            })
            setUsersMessages(response.data)
        }
        catch (e) {
            console.log(e)
        }

    }

    const getClickedUsersMessages = async () => {

        try {
            const response = await axios.get('http://localhost:8000/messages', {
                params: {userId: clickedUserId, correspondingUserId: userId}
            })
            setClickedUsersMessages(response.data)
        }
        catch (e) {
            console.log(e)
        }

    }

    // useEffect to fetch messages on component mount and when user or clicked user changes
    useEffect(() => {
        getUsersMessages()
        getClickedUsersMessages()
    }, [userId, clickedUserId])

    const messages = []

    // Format user's messages
    usersMessages?.forEach(message => {
        const formattedMessage = {}
        formattedMessage['name'] = user?.first_name
        formattedMessage['img'] = user?.url
        formattedMessage['message'] = message.message
        formattedMessage['timestamp'] = message.timestamp
        messages.push(formattedMessage)
    })

    clickedUsersMessages?.forEach(message => {
        const formattedMessage = {}
        formattedMessage['name'] = clickedUser?.first_name
        formattedMessage['img'] = clickedUser?.url
        formattedMessage['message'] = message.message
        formattedMessage['timestamp'] = message.timestamp
        messages.push(formattedMessage)
    })

    const descendingOrderMessages = messages?.sort((a,b) => a.timestamp.localeCompare(b.timestamp))


    return (
        <>
        <Chat descendingOrderMessages={descendingOrderMessages}/>
        <ChatInput user={user}
                   clickedUser={clickedUser}
                   getUserMessages={getUsersMessages}
                   getClickedUsersMessages={getClickedUsersMessages}/>
        </>
    )
}

export default ChatDisplay