import logo from '../../assets/logo-footer.png'
export default function Footer() {
  return (
   <footer className="bg-slate-800 ">
    <img className='pt-40 mx-auto pb-9' src={logo} alt="" />
     <div className="grid lg:grid-cols-3 border-gray-600 border-b gap-12 px-6 md:px-0 container mx-auto text-base-content pb-10 ">
    <nav className="text-white ">
      <h6 className="footer-title">About Us</h6>
     <p>Cricket Team Manager is a React application that allows users to create a cricket team of their own choice from the players.</p>
    </nav>
    <nav className="text-white lg:mx-auto">
      <h6 className="footer-title">Quick Links</h6>
     <div className="flex flex-col">
     <a className="link link-hover">Home</a>
      <a className="link link-hover">Fixture</a>
      <a className="link link-hover">Teams</a>
      <a className="link link-hover">Schedules</a>
     </div>
    </nav>

    <form className="text-white">
      <h6 className="footer-title">Subscribe</h6>
      <fieldset className="form-control w-80">
        <label className="label">
          <span className="label-text text-white">Enter your email address</span>
        </label>
        <div className="join">
          <input
            type="text"
            placeholder="username@site.com"
            className="input input-bordered text-gray-600 join-item" />
          <button className="btn text-white bg-red-400 hover:bg-red-600 join-item">Subscribe</button>
        </div>
        
      </fieldset>
   
    </form>

  </div>
 <div className='text-center text-gray-400 py-7'>@2024 Cricket Team Manager All Rights Reserved.</div>
   </footer>
  )
}
