import axios from 'axios'
import React, { useState } from 'react'

function JoinBlock({onLogin}) {
    const [roomId, setRoomId] = useState('')
    const [userName, setUserName] = useState('')
    const [isLoading, setLoading] = useState(false)

    const onEnter = async () => {
        if(!roomId || !userName) {
            return alert('Неверные данные')
        }
        const obj = {
            roomId,
            userName
        }
        setLoading(true)
        await axios.post('/rooms', obj)
        onLogin(obj)
    }
    return (
        <div className="join-block">
            <input type="text" placeholder="Room ID" value={roomId} onChange={e => setRoomId(e.target.value)}/>
            <input type="text" placeholder="Ваше имя" value={userName} onChange={e => setUserName(e.target.value)}/>
            <button disabled={isLoading} className="btn btn-success" onClick={onEnter}>{isLoading ? 'ВХОД...': 'ВОЙТИ'}</button>
            
        </div>
    )
}

export default JoinBlock
