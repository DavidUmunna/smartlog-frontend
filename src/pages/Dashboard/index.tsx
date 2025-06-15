
import { CardsActivityGoal } from '../../components/cards/activity-goal';
import { CardsStats } from '../../components/cards/stats';

const Dashboad=()=>{
    return(
      
         <div className="">
          {/* Header */}
          <div className="flex max-h-44 max-w-full  shadow-2xs text-black py-1">
            <h1 className="ml-3 font-bold text-xl">Welcome to your Dashboard</h1>
          </div>
        
          {/* Main Content */}
          <div className="mt-5 max-h-44 max-w-full  shadow-2xs text-black p-4">
            <div>

            <CardsActivityGoal />
            </div>
            <div className='mt-5'>

              <CardsStats />
            </div>
            <div className='mt-5'>

              <CardsActivityGoal />
            </div>
            
           
          </div>
        </div>

    )
}

export default Dashboad;