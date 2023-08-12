import React from 'react'

function SearchCard() {
  return (
    <div>
      <div className="search flex justify-center pt-5">
        <input type="text" placeholder='Search Your recipe' className='px-2 py-2 border-gray-500 border-2 bg-white rounded-l-xl lg:w-1/3 md:w-2/4 w-2/5' />
        <button className='bg-yellow-400 px-6 text-lg rounded-r-xl border-y-2 border-r-2 border-gray-500'>Search</button>
      </div>
    </div>
  )
}

export default SearchCard
