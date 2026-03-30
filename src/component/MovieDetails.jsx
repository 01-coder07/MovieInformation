import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


function MovieDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=aa2c0ebd&i=${id}`)
      .then(res => res.json())
      .then(data => setMovie(data))
  }, [id])

  if (!movie) return <h1>Loading...</h1>
  
  function handleBack(){
   if (window.history.length > 1) {
    navigate(-1)
  } else {
    navigate("/") 
  }
  }
  
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8 sm:px-10">

  
  <button 
    onClick={handleBack} 
    className="mb-6 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer transition"
  >
    ← Back
  </button>

  <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center md:items-start">

    
    <img 
      src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"} 
      className="w-72 rounded-2xl shadow-2xl"
    />

    <div className="flex flex-col">

      
      <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-center md:text-left">
        {movie.Title}
      </h1>

     
      <div className="flex flex-wrap gap-4 text-gray-400 mb-4 justify-center md:justify-start">
        <span>{movie.Year}</span>
        <span>• {movie.Runtime}</span>
        <span>• {movie.Genre}</span>
      </div>

      
      <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center md:text-left">
        {movie.Plot}
      </p>

      
      <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start mb-4">
        
        <span className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold">
          ⭐ {movie.imdbRating}
        </span>

        <span className="text-gray-400">
          Director: {movie.Director}
        </span>
      </div>

     
      <p className="text-gray-400 text-center md:text-left">
        Cast: {movie.Actors}
      </p>

    </div>

  </div>

</div>
  )
}

export default MovieDetails