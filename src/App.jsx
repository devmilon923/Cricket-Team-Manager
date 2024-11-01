
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Bar from './components/Cards/Bar'
import Players from './components/Cards/Players'
import Footer from './components/Footer/Footer'
import Banner from './components/Header/Banner'
import Navbar from './components/Header/Navbar'
import Newsletter from './components/Newsletter/Newsletter'

function App() {
    // Declear all status here:
  const [selected,setSelected]=useState([])
  const [bounceAmount,setBounceAmount]=useState(0)
  const [active,setActive]=useState({
    btn:'available',
    status:true
  })

  // Player deleted button functionality
  const handleDelete=(deletedPlayer)=>{
    const filter= selected.filter(info=>info.playerId!==deletedPlayer.playerId)
    toast.success(`${deletedPlayer.name} has been removed`)
    setSelected(filter)
  }

  // Free credit button functionality
  const getReword =  () => {
    toast.success(`You recevied 60000 points`)
    let newAmount=bounceAmount+600000
    setBounceAmount(newAmount)
  };
 
  
// Active button functionality
  const handleActiveBtn=(buttonName)=>{
if(buttonName==='available'){
  setActive({
    btn:'available',
  status:true
  })
  
}else{
  setActive({
    btn:'available',
  status:false
  })
}
  }
  
  // Handle user selection
  const handleSeletedUser=(player)=>{

   const playerPrice =player.biddingPrice
   const find = selected.find(info=> info.playerId===player.playerId)

   if(find) return toast.error(`${player.name} player already selected`)
   
   if(bounceAmount<playerPrice) return  toast.error('Your account balance low!')
        
   if(selected.length>=6) return toast.error('You already selected 6 player!')

    toast.success(`Successfully ${player.name} selected`)
    const newArray= [...selected,player]
    setSelected(newArray)
     let newAmount=bounceAmount-playerPrice
    setBounceAmount(newAmount)
   
  }

  // Add more player button
  const addMorePlayer= ()=>{
    setActive({
    status:true
    })
  }
  return (
    <>
    <ToastContainer/>
     <Navbar bounceAmount={bounceAmount}></Navbar>
     <Banner getReword={getReword}></Banner>
     <Bar handleActiveBtn={handleActiveBtn} player={selected.length} active={active}></Bar>
     <Players addMorePlayer={addMorePlayer} handleDelete={handleDelete} handleSeletedUser={handleSeletedUser} selected={selected} active={active}></Players>
     <Newsletter></Newsletter>
     <Footer></Footer>
    </>
  )
}

export default App
