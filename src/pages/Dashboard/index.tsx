
import { Analytics } from '../../components/analytics';
import { MainNav } from '../../components/main-nav';


const Dashboad=()=>{
    return(
        <>
          <div className='bg-gray-200'>
            
            <div className='flex max-h-44 max-w-full border shadow-2xs text-black'>
                <h1>Welcome to your Dashboad</h1>
            </div>
            <div  className=' mt-64max-h-44 max-w-full  border shadow-2xs text-black'>
              <Analytics/>

            </div>

          </div>
        </>
    )
}

export default Dashboad;