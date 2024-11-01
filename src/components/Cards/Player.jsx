import PropTypes from "prop-types";

export default function Player({player,handleSeletedUser}) {
  return (
    <div className="card border p-4 rounded-md card-compact bg-base-100 shadow-md">
      <figure className="">
        <img className="h-52 rounded-lg object-cover w-full px-4 "
          src={player.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-gray-700">
          <i class="fa-solid fa-user-large"></i> {player.name}
        </h2>
        <div className="flex items-center justify-between">
          <div className="text-gray-600">
            <i class="fa-solid fa-flag"></i> <span className="m-2">{player.country}</span>
          </div>
          <div className="bg-gray-100 px-4 py-2 rounded-sm">{player.role}</div>
        </div>
        <div class="divider my-1"></div>
        <p className="font-bold">Rating</p>
        <div className="flex items-center justify-between font-semibold">
          <p className="">{player.battingType}</p>
          <p className="text-end text-gray-500">{player.bowlingType}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Price: ${player.biddingPrice}</p>
          <div>
            <button onClick={()=>handleSeletedUser(player)} className="btn bg-transparent btn-sm font-medium rounded-sm">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
}
Player.propTypes={

  player:PropTypes.object,
  handleSeletedUser:PropTypes.func

}