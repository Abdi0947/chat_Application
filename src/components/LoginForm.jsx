import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID': '545196c8-e4de-497b-b4cb-56b03259d951', 'User-Name': username, 'User-Secret': password }
        try {
            //Username | passwrod => chatengine ->givemessages
            await axios.get('https://api.chatengine.io/chats', {
                headers: authObject
            })
            //worksout->logged in
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload();
            setErrors('');
            setUsername('');
            setPassword('');
        }
        catch (err) {
            //error -> try with new username
            setErrors('Oops , Incorrent Credentials')
            setUsername('');
            setPassword('');
        }

    }
    return (
        <div className='wrapper'>
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
                <h1 className="error">{errors}</h1>
            </div>
        </div>
    )
}

export default LoginForm