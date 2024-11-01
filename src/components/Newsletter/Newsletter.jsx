import banner from '../../assets/bg-shadow.png'

export default function Newsletter() {
  return (
  <section className='relative h-64'>
      <div className="mt-12 py-24 bg-cover absolute top-0 lg:left-[15%] md:left-[6%] mx-auto bg-no-repeat mb-4 rounded-lg bg-white container" style={{backgroundImage: `url(${banner})`}}>
        <div className='space-y-3 lg:w-[80%] px-2 mx-auto text-center'>
           <h1 className='lg:text-4xl text-2xl font-bold'>Subscribe to our Newsletter</h1> 
           <p className='text-gray-500 lg:text-md text-sm'>Get the latest updates and news right in your inbox!</p>
           <div className='flex items-center gap-4 justify-center'>
            <input type="text" className='border p-3 rounded-md' placeholder='Enter your email' name="" id="" />
            <button className='btn text-white bg-red-400 hover:bg-red-600 rounded-md'>Subscribe</button>
           </div>
        </div> 
    </div>
  </section>
  )
}
