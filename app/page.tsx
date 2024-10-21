'use client'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <header className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-6 bg-transparent">
        
        {/* Hamburger Menu Icon */}
        <button className="block md:hidden text-white focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Logo */}
        <div className="text-2xl font-bold text-white ml-4">FITNESS</div>

        {/* Navbar Links */}
        <nav className="space-x-8 hidden md:flex">
  <Link href="#home" className="hover:text-gray-300">Home</Link>
  <Link href="#games" className="hover:text-gray-300">Games</Link>
  <Link href="#trainers" className="hover:text-gray-300">Trainers</Link>
  <Link href="#contact" className="hover:text-gray-300">Contact</Link>

          {/* Search Icon */}
          <button className="text-white hover:text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
  className="relative w-full h-screen bg-cover" 
  style={{ backgroundImage: 'url("/cr74.jpg")' }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative z-20 flex flex-col justify-center items-start md:items-end h-full px-8 lg:px-24">
    <div className="max-w-md text-left md:text-right">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Train Hard, <span className="block">Play Hard</span>
      </h1>
      <p className="text-lg mb-8">Details of Different Plans (Monthly, Yearly, Family, etc.)</p>
      <div className="flex flex-col md:flex-row md:justify-end space-y-4 md:space-y-0 md:space-x-4">
      <Link href="#join" passHref>
  <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-700 transition duration-300 ease-in-out shadow-lg">
    Join Now
  </button>
</Link>

        <button className="flex items-center space-x-2 text-white border border-white px-6 py-3 rounded-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.752 11.168l-6.518-3.253A.75.75 0 007 8.584v6.832a.75.75 0 001.234.626l6.518-3.253a.75.75 0 000-1.314z" />
          </svg>
          <span>Play Demo</span>
        </button>
      </div>
    </div>
  </div>
</section>

{/*Contact form */}

<section id="contact" className="py-12 bg-black text-white">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-brown-500 mb-8">Contact Me</h2>
    <form className="bg-brown-800 p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-brown-300 mb-2" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          required
          className="w-full p-3 rounded bg-black text-white focus:outline-none focus:ring-2 focus:ring-brown-500"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-brown-300 mb-2" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required
          className="w-full p-3 rounded bg-black text-white focus:outline-none focus:ring-2 focus:ring-brown-500"
          placeholder="you@example.com"
        />
      </div>
      <div className="mb-4">
        <label className="block text-brown-300 mb-2" htmlFor="message">Message</label>
        <textarea
          id="message"
          required
          className="w-full p-3 rounded bg-black text-white h-32 focus:outline-none focus:ring-2 focus:ring-brown-500"
          placeholder="Your Message"
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-brown-600 text-white font-semibold rounded-lg hover:bg-brown-500 focus:outline-none focus:ring-2 focus:ring-brown-600"
      >
        Send Message
      </button>
    </form>
  </div>
</section>



      {/* Games Section */}
      <section id="games" className="py-12 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold">Basketball</h3>
            <p className="text-gray-400">Details on training sessions, tournaments, and court booking.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold">Tennis</h3>
            <p className="text-gray-400">Information on lessons, court availability, and tournaments.</p>
          </div>
        </div>
      </section>
    </div>
      );
    }