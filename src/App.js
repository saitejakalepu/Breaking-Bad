
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header'
import Search from './components/search'
import CharacterGrid from './components/CharacterGrid'
import { useDispatch , useSelector} from 'react-redux';
import { setCharacters, setError, setLoading } from './redux/action';



function App() {

const allCharacters= useSelector(state => state.data);
const charName = useSelector(state => state.input);
const checkLoading = useSelector(state=> state.loading);
const error = useSelector(state=>state.error);

const dispatch = useDispatch();

const fetchCharacters= ()=>
  {
  axios.get(`https://breakingbadapi.com/api/characters?name=${charName}`)
  .then((response)=>{dispatch(setCharacters(response.data))})
  .catch((error)=>{dispatch(setError(error.message))})
  dispatch(setLoading(false));
  }
  
  
  useEffect(()=>{
    fetchCharacters();
  },[charName]);


  return (
    <div className="App">
     
      <Header/>
      <Search/>
      {error && <h1>{error}</h1>}
      <CharacterGrid checkLoading={checkLoading} allCharacters={allCharacters}/>
    </div>
  );
}

export default App;
