import { useEffect, useState } from "react";
import players from '../../assets/playes.json';
import Player from "./Player";
import Selected from "./Selected";
import PropTypes from "prop-types";
export default function Players({handleSeletedUser,selected,active,handleDelete,addMorePlayer}) {
  const [playersData,setPlayers]=useState([])
  useEffect(()=>{
    setPlayers(players)
  },[])

  return (
    <section className="container mx-auto my-12 px-6 md:px-0">
   
    {active.status? <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 items-center justify-between gap-6 my-12">
        {playersData.map((player,idx)=><Player key={idx} handleSeletedUser={handleSeletedUser} player={player}></Player>)}
        
    </div>:selected.map((player,idx)=><Selected key={idx} handleDelete={handleDelete} player={player}></Selected>
  )} 
  {active.status||<button onClick={addMorePlayer} className="btn text-white bg-red-400 hover:bg-red-600">Add More Player</button>}
    
    </section>
  )
}

Players.propTypes={
  handleSeletedUser:PropTypes.func,
  selected:PropTypes.array,
  active:PropTypes.object,
  handleDelete:PropTypes.func,
  addMorePlayer:PropTypes.func
}