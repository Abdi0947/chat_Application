import React from 'react'

const  MyMessage = ({message}) => {
    if(message?.attachements?.length>0){
        return(
            <img src={message.attachements.file}
                    alt="message-attachements"/>
        )
    }
    
        return (
            <div className='message' style={{float : 'right' ,marginRight:'18px',color:'white',background:'3B2A50'}}>
            {message.text}
            </div>
        )
}

export default MyMessage