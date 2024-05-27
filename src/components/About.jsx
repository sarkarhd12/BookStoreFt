import React from 'react'

const About = () => {
  return (
    <div className="mt-16 flex flex-col lg:flex-row justify-center items-center p-8 bg-gray-900 text-gray-200">
    <div className="w-full lg:w-1/2 p-6">
      <h2 className="text-3xl font-semibold mb-4">About Our Bookstore</h2>
      <p className="mb-4">
        Welcome to our bookstore! Established in 1990, we have been serving book enthusiasts for over three decades.
        Our mission is to provide a wide variety of books to inspire and educate readers of all ages.
      </p>
      <p className="mb-4">
        We pride ourselves on our carefully curated selection of books, from timeless classics to the latest bestsellers.
        Our knowledgeable staff is always here to help you find the perfect book for any occasion.
      </p>
      <p>
        Visit us to explore our collection, attend author events, and participate in book clubs. We look forward to seeing you!
      </p>
    </div>
    <div className="w-full lg:w-1/2 p-6 flex justify-center items-center">
      <img src="https://img.freepik.com/free-photo/flat-lay-assortment-optimism-concept-with-flowers_23-2148861718.jpg?t=st=1716836014~exp=1716839614~hmac=b67852c174468d17eb16a6e887a97899b13512a8f7735c71991a6039184a9a69&w=996" 
      alt="Bookstore" className="rounded-lg shadow-lg" 
      style={{ width: '60%', height: 'auto' }}/>
    </div>
  </div>
  )
}

export default About