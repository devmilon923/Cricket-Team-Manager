import PropTypes from "prop-types"
export default function Bar({handleActiveBtn,active,player}) {
  return (
    <div className="container mx-auto px-6 md:px-0">
        <div className="border p-5 mt-6 grid md:grid-cols-2 gap-5 items-center justify-between">
            <h1 className="lg:text-3xl text-2xl font-bold">{active.status?`Available Player`:`Selected Player ( ${player}/6 )`} </h1>
            <div className=" flex gap-5 items-center md:justify-end">
                <button onClick={()=>handleActiveBtn('available')} className={active.status?`bg-red-400 btn  text-white hover:bg-red-600`:`btn`}>Available</button>
                <button onClick={()=>handleActiveBtn('selected')} className={active.status?`btn`:`bg-red-400 btn text-white hover:bg-red-600`}>Selected ( {player} )</button>
            </div>
        </div>
    </div>
  )
}

Bar.propTypes={

  handleActiveBtn:PropTypes.func,
  active:PropTypes.object,
  player:PropTypes.number

}