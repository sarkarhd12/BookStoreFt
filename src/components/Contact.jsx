import React from 'react'

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
    <div className="w-full max-w-lg p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-white mb-6">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-300">Name</label>
          <input type="text" className="input input-bordered w-full bg-gray-700 text-white" placeholder="Your Name" required />
        </div>
        <div>
          <label className="block text-gray-300">Email</label>
          <input type="email" className="input input-bordered w-full bg-gray-700 text-white" placeholder="Your Email" required />
        </div>
        <div>
          <label className="block text-gray-300">Message</label>
          <textarea className="textarea textarea-bordered w-full bg-gray-700 text-white" placeholder="Your Message" required></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="btn btn-primary">Send Message</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Contact