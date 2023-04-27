import './App.css';
import ServerHeader from './components/ServerHeader';

const serverName = process.env.REACT_APP_SERVER_NAME;

  // console.log(serverName)
  console.log(process.env)

function App() {
  return (
    <div className="App">
      <ServerHeader 
      name={serverName}/>
    </div>
  );
}

export default App;
