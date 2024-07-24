import React from 'react'

const TheirMessage = ({lastMessage,message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username!==message.sender.username; 
  return (
    <div className='message-row'>
      {isFirstMessageByUser && (
        <div  className='message-avatar'
            style={{backgroundImage:`url(${message?.sender?.avatar})`}}
        />  
      )}
      { 
       message?.attachements?.length > 0 ? ( 
            <img src={message.attachements.file}
                    alt="message-attachements"
                    style={{marginLeft:isFirstMessageByUser ? "4px" : "48px"}}/>
            ):(<div className='message' style={{float : 'left' ,background:'#CABCDC'}}>
                {message.text}
                </div>)
       }
        
    
 </div>
            
  )
}

export default TheirMessage 