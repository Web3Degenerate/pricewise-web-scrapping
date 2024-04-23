"use client"

const SearchBar = () => {

  const handleSubmit = () => {}

  // See (43:13): https://youtu.be/lh9XVGv6BHs?si=VtfrpQypHQ1r9XTC&t=2593
  return (
    
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 mt-12">

          <input type="text" placeholder="Enter product link" className="searchbar-input" />

          <button type="submit" className="searchbar-btn">

          </button>

    </form>

  )
}

export default SearchBar