import Image from 'next/image'
import React from 'react'
import SearchBar from './components/SearchBar'
import HeroCarousel from './components/HeroCarousel'

{/* Built out at (34:00): https://youtu.be/lh9XVGv6BHs?si=lMXiOxPHde1ZbNCu&t=2040 */}

const Home = () => {
  
  return (
    <>
       {/* <section className="px-6 md:px-20 py-24 border-2 border-red-500"> */}
       <section className="px-6 md:px-20 py-24">

          <div className="flex max-xl:flex-col gap-16">
                <div className="flex flex-col justify-center">
                        <p className="small-text">Smart Shopping Starts Here
                            <Image
                              src="/assets/icons/arrow-right.svg"
                              alt="arrow-right"
                              width={16}
                              height={16}
                            />
                        </p>

                        <h1 className="head-text">
                          Unleash the Power of
                          <span className="text-primary"> PriceWise 2.0</span>
                        </h1>

                        <p className="mt-6">
                            Powerful, self-serve product and growth
                            analytics to help you convert, engage, and
                            retain more.
                        </p>

                        <SearchBar />
                </div>
                {/* See (45:10): https://youtu.be/lh9XVGv6BHs?si=xcD9QKEVUU5MuhE6&t=2710 */}
                  <HeroCarousel />
          </div>

       </section>

       <section className="trending-section">
          <h2 className="section-text">Trending</h2>
            <div className="flex flex-wrap gap-x-8 gap-y-16">
                {/* (39:45) - mock array */}
                {['Apple iPhone 15', 'Book', 'Sneakers'].map((product) => (
                  <div>{product}</div>
                ))}
            </div>
       </section>

    </>

    
  )
}

export default Home