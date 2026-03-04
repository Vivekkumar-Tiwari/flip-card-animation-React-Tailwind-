import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [flipped, setFlipped] = useState(false)
  return (
    <div className='flex bg-black min-h-screen justify-center items-center'>
      {/* Crad */}
      <div
        className={`w-80 h-100 ${flipped ? "bg-green-300" : "bg-red-300"
          } rounded-lg flex flex-col justify-center items-center transition-transform ${flipped ? "[transform:rotatey(180deg)]" : " "}`}
        onClick={() => setFlipped(!flipped)}
      >
        {!flipped &&
          <>
            <div className='text-lg text-gray'>Question 1</div>
            <div className='text-2xl'>What's the Capital of India</div>
          </>
        }
        {flipped &&
          <>
            <div className='text-lg text-gray [transform:rotatey(180deg)]'>Answer</div>
            <div className='text-2xl [transform:rotatey(180deg)]'>Delhi</div>
          </>
        }

      </div>
    </div>
  )
}

export default App;
