import { DataTable } from '../../components/components/data-table';
import data from "../../components/components/data.json"


const Attendance=()=>{
    
    return (
        <div className='bg-gray-300'>
            <div className=' mt-3 '>
            
               <DataTable data={data}/>
            </div>


        </div>

    )
}

export default Attendance;