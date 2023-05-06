import './App.css';
import { useState, useEffect, useContext } from "react"
import List from './components/List';
import Details from './components/Details';
import { LinkContext } from './contexts/LinkContext';


function App() {
  const [list, setList] = useState([]);
  const [info, setInfo] = useState('');
  const { baseUrl } = useContext(LinkContext);
  
  useEffect(() => {
    fetch(`${baseUrl}/users.json`)
    .then(response => response.json())
    .then(data => setList(data));
  }, [])
  
  return (
    <div className="container">
    <List list={list} setInfo={setInfo} />
    <Details info={info} />
    </div>
    );
  }
  
  export default App;
  