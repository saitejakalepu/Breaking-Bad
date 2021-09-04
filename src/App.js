
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header'
import Search from './components/search'
import CharacterGrid from './components/CharacterGrid'
import { useDispatch , useSelector} from 'react-redux';
import { setCharacters, setLoading } from './redux/action';



function App() {

const allCharacters= useSelector(state => state.characters);
const charName = useSelector(state => state.text);
const checkLoading = useSelector(state=> state.isLoading);

const dispatch = useDispatch();

const fetchUsers= async()=>
  {
  const response = await axios
  .get(`https://breakingbadapi.com/api/characters?name=${charName}`);
  dispatch(setLoading(false));
  dispatch(setCharacters(response.data));
  }
  
  
  useEffect(()=>{
    fetchUsers();
  },[charName]);

  return (
    <div className="App">
      <Header/>
      <Search/>
      <CharacterGrid checkLoading={checkLoading} allCharacters={allCharacters}/>
    </div>
  );
}

export default App;
