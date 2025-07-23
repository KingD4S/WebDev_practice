import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card.jsx'
import Navbar from './Components/Navbar.jsx'

function App() {
  const data = [
    {image:"https://images.unsplash.com/photo-1752610877637-8fb2a9a9a520?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8", name:"Faded", artist:"Ed sheeran", added:false},
    {image:"https://images.unsplash.com/photo-1752542362589-a5668de3b1c1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"Kuch bhi", artist:"Ankit", added:false},
    {image:"https://images.unsplash.com/photo-1682687220866-c856f566f1bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"Safari", artist:"Amit", added:false},
    {image:"https://images.unsplash.com/photo-1749476244079-ec5d127a6de1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"Buri Buri", artist:"Sonu", added:false},
    {image:"https://images.unsplash.com/photo-1749429338475-f48118176e0f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"Tere Liye", artist:"Piyush", added:false},
    {image:"https://images.unsplash.com/photo-1752542362589-a5668de3b1c1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"Jiya Re", artist:"Padda", added:false},
  ]
  const [songData, setSongData] = useState(data);
  const handleClick = (idx)=>{
    setSongData((prev) => {
      return prev.map((item, index) => {
        if(index === idx) {
          return {...item, added: !item.added}
        }
        return item ;
      });
    })
 
  }
  return (
    <div className='w-full h-screen bg-zinc-300'>
       <Navbar data={songData}/>
       <div className='px-20 flex gap-10 mt-10 flex-wrap justify-center'>
       {songData.map((item, index) => {
          return <Card handleClick={handleClick} key={index} index={index} image={item.image} name={item.name} artist={item.artist} added={item.added} />
       })};

       </div>

    </div>
  )
}

export default App
