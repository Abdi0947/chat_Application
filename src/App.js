import { ChatEngine } from 'react-chat-engine';
import  ChatFeed from './components/ChatFeed.jsx'

function App() {
  return (
    <div>
     <ChatEngine
       height="100vh"
       projectID ="4b6d93b0-dc4f-4eab-a1c6-a85f1b7cf35e"
       userName = "javascrip"
       userSecret ="1212"
       renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
       />
    </div>
  );
}

export default App;
