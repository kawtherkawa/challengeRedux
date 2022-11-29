
import './App.css';
import FilterMovie from './Components/FilterMovie/FilterMovie'
import MovieList from './Components/MovieList/MovieList'
import AddMovie from './Components/AddMovie/AddMovie'
function App() {
  return (
    <div className="App">
    <h1> MOVIES</h1>
    
    <FilterMovie/>
    <MovieList/>
    <AddMovie/>
    </div>
  );
}

export default App;
