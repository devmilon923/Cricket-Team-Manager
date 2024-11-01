import PropTypes from "prop-types"
export default function Selected({player,handleDelete}) {

  return (
    <div className="border p-5 my-4 rounded-md flex items-center justify-between">
        <div className="flex items-center gap-4">
        <img className="h-16 rounded-lg w-24 object-cover" src={player.image} alt="" />
        <div>
            <h1 className="font-bold text-xl">{player.name}</h1>
            <p className="text-gray-500 text-sm">Role: {player.role}</p>
            <p className="text-gray-500 text-sm">Price: ${player.biddingPrice}</p>
        </div>
        </div>
        <div>
     <button onClick={()=>handleDelete(player)}><i class="fa-solid fa-trash-can text-red-500 cursor-pointer"></i></button>   
        </div>
    </div>
  )
}

Selected.propTypes={

  handleDelete:PropTypes.func,
  player:PropTypes.object
}