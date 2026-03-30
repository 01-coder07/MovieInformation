import React , { useState , useEffect}  from 'react'
import Card from "./Card"

function App() {
   const [movie , setMovie] = useState("")
   const [movieData , setMovieData] = useState(null)
   const [defaultMovies , setDefaultMovies] = useState([])
   const [hasSearched , setHasSearched]  = useState(false)

    useEffect(()=>{
     fetch(`https://www.omdbapi.com/?apikey=aa2c0ebd&s=avengers`)
     .then(res=>res.json())
     .then(data => setDefaultMovies(data.Search || []))
    },[])

  
    function handleMovie(){
      setHasSearched(true)
      fetch(`https://www.omdbapi.com/?apikey=aa2c0ebd&s=${movie}`)
      .then(response => response.json())
      .then(data => setMovieData(data))
   }


  return (
    <div>
      <div>
       <h1 className='text-center font-bold text-3xl sm:text-5xl mt-10'>Movie Search App</h1>
      </div>
       <div className='flex flex-col sm:flex-row justify-center gap-4 my-10 px-4 '>
        <input onChange = {(e)=>setMovie(e.target.value)} type="text" placeholder='Enter Movie' className='w-full max-w-xl px-5 py-4 rounded-2xl  bg-amber-100 font-serif' />
        <button 
        onClick={handleMovie}
        className='w-full sm:w-auto cursor-pointer font-serif py-5 px-5 bg-amber-50 rounded-3xl hover:bg-amber-400 transition-all duration-300 ease-in-out scale-105' >Search</button>
       </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 px-10'>
         {!hasSearched  ? defaultMovies.slice(0,9).map((defaultMovie)=>(
           <Card 
          Poster = {defaultMovie.Poster}
          Title = {defaultMovie.Title}
          Type = {defaultMovie.Type} 
          Year = {defaultMovie.Year} 
          imdbID = {defaultMovie.imdbID}
          />
         ))
         :(
          movieData && movieData.Search && movieData.Search.map((movies)=>(
            <Card 
          Poster = {movies.Poster}
          Title = {movies.Title}
          Type = {movies.Type} 
          Year = {movies.Year} 
          imdbID = {movies.imdbID}
          />
          ))
         )} 
      </div>
    </div>
  )
}

export default App
