import React, { useState, useEffect } from 'react'

function App() {
  // Retrieve the color from localStorage or default to "black"
  const [color, setColor] = useState(() => {
    return localStorage.getItem('backgroundColor') || 'black';
  });

  // Update localStorage whenever the color changes
  useEffect(() => {
    localStorage.setItem('backgroundColor', color);
  }, [color]);
  return (
    <>
    <div className="w-full h-screen duration-500"
    style={{backgroundColor: color, fontFamily: 'Poppins'}}>
      <div className="fixed flex flex-wrap justify-center bottom-6 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-md">
          <button onClick={() => setColor("red")} className='px-4 py-2 rounded-md bg-red-500 text-white'>RED</button>
          <button onClick={() => setColor("green")} className='px-4 py-2 rounded-md bg-green-500 text-white'>GREEN</button>
          <button onClick={() => setColor("orange")} className='px-4 py-2 rounded-md bg-orange-500 text-white'>ORANGE</button>
          <button onClick={() => setColor("purple")} className='px-4 py-2 rounded-md bg-purple-500 text-white'>PURPLE</button>
          <button onClick={() => setColor("yellow")} className='px-4 py-2 rounded-md bg-yellow-500 text-white'>YELLOW</button>
          <button onClick={() => setColor("lime")} className='px-4 py-2 rounded-md bg-lime-500 text-white'>LIME</button>
          <button onClick={() => setColor("indigo")} className='px-4 py-2 rounded-md bg-indigo-500 text-white'>INDIGO</button>
          <button onClick={() => setColor("violet")} className='px-4 py-2 rounded-md bg-violet-500 text-white'>VIOLET</button>
          <button onClick={() => setColor("purple")} className='px-4 py-2 rounded-md bg-purple-500 text-white'>PURPLE</button>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
