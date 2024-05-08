"use client"

import { scrapeAndStoreProduct } from "@/lib/actions"
import { FormEvent, useState } from "react"

const SearchBar = () => {


// Set up useState for searchbar at (58:12): https://youtu.be/lh9XVGv6BHs?si=MCW8VX6Xmw4LKOlQ&t=3492
  const [searchPrompt, setSearchPrompt] = useState('')
  //Set up is loading state (1:04:16)
  const [isLoading, setIsLoading] = useState(false)

  //Check amazon link validity (1:01:17)
  const isValidAmazonProductUrl = (url: string) => {
    try {
      const parsedURL = new URL(url)
      const hostname = parsedURL.hostname

      //Check if hostname conatins amazon.com or other country code
      if(
          hostname.includes('amazon.com') || 
          hostname.includes ('amazon.') || 
          hostname.endsWith('amaazon')
        ){
          return true
      }
    }catch (error) {
      return false
    }

    //part of hostname if check (1:02:42)
    return false;
  }

// (59:20): Since TypeScript define type of event explicitly: https://youtu.be/lh9XVGv6BHs?si=5ZJouZ1hAM4jL_1N&t=3560 
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault() //stop page reload

    //check if url entered is valid
    const isValidLink = isValidAmazonProductUrl(searchPrompt)

    //(1:03:01) - test that our valid link check is working:
    // alert(isValidLink ? 'Valid Link' : 'Invalid Link')

    //(1:03:48) - exit out if not valid link provided. 
    if(!isValidLink) return alert('Please provide a valid Amazon link')

      try{
        setIsLoading(true)
        // (1:05:28) - finally implement the scrapping logic here. (set up lib files)
        // (~1:18:00) - Call scrapeAndStoreProduct in lib/actions/index.ts
        const product = await scrapeAndStoreProduct(searchPrompt);
        
      }catch(error){
        console.log(error)
      }finally {
        // finally block executes either way. (1:04:34): https://youtu.be/lh9XVGv6BHs?si=Ypf_hTyF0xPwUbDf&t=3874
        setIsLoading(false)
      }

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

          <button 
              type="submit" 
              className="searchbar-btn"
              disabled={searchPrompt === ''}
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>

    </form>

  )
}

export default SearchBar