import { DailyCheckInTracker} from '../../components/cards/checkins';
import { CheckInHistory } from '../../components/cards/checkinsHistory';


const Dashboad=()=>{
    return(
      
         <div className="">
          {/* Header */}
          <div className="flex max-h-44 max-w-full  shadow-2xs text-black py-1">
            <h1 className="ml-3 font-bold text-xl">Welcome to your Dashboard</h1>
          </div>
        
          {/* Main Content */}
          <div className="mt-5  max-w-full flex gap-4 h-[750px]  shadow-2xs text-black p-4">
            <div className='flex-1'>

            <DailyCheckInTracker />
            </div>

            <div className='w-[300px]'>
              <CheckInHistory/>
            </div>
                   
           
          </div>
        </div>

    )
}

export default Dashboad;