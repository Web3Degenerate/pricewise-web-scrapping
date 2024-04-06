import Image from 'next/image'
import React from 'react'

{/* Built out at (34:00): https://youtu.be/lh9XVGv6BHs?si=lMXiOxPHde1ZbNCu&t=2040 */}

const Home = () => {
  
  return (
    <>
       <section className="px-6 md:px-20 py-24 border-2 border-red-500">
       {/* <section className="px-6 md:px-20 py-24"> */}

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
                          <span className="text-primary"> PriceWise</span>
                        </h1>

                        <p className="mt-6">
                            Powerful, self-serve product and growth
                            analytics to help you convert, engage, and
                            retain more.
                        </p>

                        Searchbar
                </div>
                  HeroCarousel
          </div>

       </section>

       {/* at (38:40): https://youtu.be/lh9XVGv6BHs?si=2bYfEcaKHJl42uPj&t=2320  */}
       <section className="trending-section">
          <h2 className="section-text">Trending</h2>
       </section>

    </>

    
  )
}

export default Home