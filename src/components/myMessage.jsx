import React from 'react'

const MyMessage = ({ message }) => {

    if (message?.attachments?.length > 0) {//to check if sent message is an image or not, if length > 0 then image
        return <img src={message.attachments[0].file} alt='message-Attachment' className="message-image" style={{ float: 'right' }} />
    }
    return (<div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3b2a50' }}>
        {message.text}
    </div>
    )
}

export default MyMessage