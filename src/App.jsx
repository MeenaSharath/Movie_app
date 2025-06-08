// import './App.css'
import { BrowserRouter, Route, Routes} from "react-router-dom" 
import Navigation from './Navigation'
import {popularMovies} from './Url';
import {latestMovies} from './Url';
import {comedyMovies} from './Url';
import Movies from "./Movies"
import Details from "./Details";

function App() {
  return (
    <BrowserRouter>
   <Navigation />
   <Routes>
      <Route path='/Latest Movies' element={<Movies movielink={latestMovies} mtype={'latest'} />} />
      <Route path='/Popular Movies' element={<Movies movielink={popularMovies} mtype={'popular'} />} />
      <Route path='/Comedy Movies' element={<Movies movielink={comedyMovies} mtype={'comedy'}/>} /> 
      <Route path='/details' element={<Details/>} /> 
      </Routes>
   </BrowserRouter>
  )
}

export default App
