
import './App.css';
import Main from "./components/Main"

const Users = [
    { "email": "matanga@gmail.com",
      "password": "fulufhelo06091913121!",
      "status": false},
    { "email": "desta@gmail.com",
      "password": "destamatanga!",
      "status": false},
    { "email": "john@gmail.com" ,
      "password": "johnmcdown",
      "status": false}];

      

    

function App() {
  
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
