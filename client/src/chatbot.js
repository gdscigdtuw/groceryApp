import ChatBot from 'react-simple-chatbot'
function CustomChatbot(props) {
  const config = {
    width: '800px',
    height: '400px',
    floating: true,
  }

  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to our shop',
      trigger: 'Ask Name',
    },
    {
      id: 'Ask Name',
      message: 'Please type your name?',
      trigger: 'Waiting user input for name',
    },
    {
      id: 'Waiting user input for name',
      user: true,
      trigger: 'Asking options to eat',
    },
    {
      id: 'Asking options to eat',
      message: 'Hi, {previousValue}! Glad to know you !!',
      trigger: 'Done',
    },
    {
      id: 'Done',
      message: 'Have a great day !!',
      end: true,
    },
  ]
  return <ChatBot steps={steps} />
}
export default CustomChatbot
