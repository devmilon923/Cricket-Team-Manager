import logo from '../../assets/logo.png'
import PropTypes from 'prop-types'
export default function Navbar({bounceAmount}) {
  return (
  <nav className="fixed w-full  bg-white border-b top-0 py-4 z-50">
      <div class="navbar justify-between items-center container mx-auto">
            <div class="">
                <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabindex="0"
                    class="menu menu-sm gap-4 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-3 shadow">
                    <a href="">Home</a>
                    <a href="">Fixture</a>
                    <a href="">Teams</a>
                    <a href="">Schedules</a>
                </ul>
                </div>
                <a class="">
                    <img className='w-16' src={logo} alt="" />
                </a>
            </div>

            <div class="gap-12 flex font-semibold">
                <div className="hidden lg:flex gap-12 ">
                    <a className='' href="">Home</a>
                    <a className='' href="">Fixture</a>
                    <a className='' href="">Teams</a>
                    <a className='' href="">Schedules</a>
                </div>
                <div className="border rounded-md font-bold px-4 py-2 flex items-center justify-between gap-2"><p>{bounceAmount}</p><span>Coins</span> <i class="fa-solid text-orange-500 fa-coins"></i></div>
            </div>
    </div>

  </nav>
  
  )
}
Navbar.propTypes={

  
    bounceAmount:PropTypes.number
  
  }