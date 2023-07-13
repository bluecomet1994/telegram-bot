import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const botToken = '6259998387:AAHmGbLe9STmZOEOhMKpSj66kLISdnLp5Aw';
  const chatId = '6116266317';

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: `Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`
    }).then(({data}) => {
      console.log(data);
      resetForm();
    })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Telegram Bot</h1>
        <input type="text" placeholder='Name' value={name} onChange={({ target: { value } }) => setName(value)} />
        <input type="text" placeholder='Email' value={email} onChange={({ target: { value } }) => setEmail(value)} />
        <input type="text" placeholder='Phone' value={phone} onChange={({ target: { value } }) => setPhone(value)} />
        <input type="text" placeholder='Message' value={message} onChange={({ target: { value } }) => setMessage(value)} />
        <button type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
