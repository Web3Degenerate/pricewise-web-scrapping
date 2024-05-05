"use client"

import { FormEvent, useState } from "react"

const SearchBar = () => {


// Set up useState for searchbar at (58:12): https://youtu.be/lh9XVGv6BHs?si=MCW8VX6Xmw4LKOlQ&t=3492
  const [searchPrompt, setSearchPrompt] = useState('')


// (59:20): Since TypeScript define type of event explicitly: https://youtu.be/lh9XVGv6BHs?si=5ZJouZ1hAM4jL_1N&t=3560 
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  // See (43:13): https://youtu.be/lh9XVGv6BHs?si=VtfrpQypHQ1r9XTC&t=2593
  return (
    
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 mt-12">

          <input 
            type="text" 
            value={searchPrompt}
            onChange={(e) => setSearchPrompt(e.target.value)}
            placeholder="Enter product link" 
            className="searchbar-input" 
          />

          <button type="submit" className="searchbar-btn">

          </button>

    </form>

  )
}

export default SearchBar