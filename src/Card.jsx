import React from 'react'

function Card({Poster  , Title , Type , Year,imdbID }) {
  return (
    <div className='ml-10 bg-amber-200 rounded-2xl shadow-lg  transform hover:-translate-y-2 hover:scale-105 
                transition duration-300 shadow-md hover:shadow-2xl'>
      <img src={Poster !== 'N/A' ? Poster : "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg"} alt="" className='rounded-xl w-[100%] h-95'/>
      <h1 className='text-2xl my-4 mx-2'>Title : <span className='font-bold'>{Title}</span></h1>
      <h1 className='text-2xl my-4 mx-2'>Type : <span className='font-bold'>{Type}</span></h1>
      <h1 className='text-2xl my-4 mx-2'>Year : <span className='font-bold'>{Year}</span></h1>
      <p className='text-2xl my-4 mx-2'>imdbID : <span className='font-bold'>{imdbID}</span></p>
    </div>
  )
}

export default Card
