import bannerMain from '../../assets/banner-main.png'
import banner from '../../assets/bg-shadow.png'
export default function Banner({getReword}) {
  return (
   <section>
    
     <div className="mt-32 py-12  bg-cover px-6 md:px-0 bg-no-repeat lg:rounded-lg bg-black container mx-auto" style={{backgroundImage: `url(${banner})`}}>

        <div className='flex flex-col gap-4 items-center'>
        <img className='object-contain h-60' src={bannerMain} alt="" />
    <h1 className='lg:text-4xl text-3xl text-center font-semibold text-slate-100'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
    <p className='text-gray-300 text-md lg:text-lg'>Beyond Boundaries Beyond Limits</p>
    <div>
    <button className='btn outline outline-yellow-500 outline-offset-2 bg-yellow-500' onClick={getReword}>Claim Free Credit</button>
    </div>
        </div>



</div>
   </section>
  )
}
