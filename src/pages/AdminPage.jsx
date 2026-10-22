import { useLoaderData } from 'react-router-dom';
import OrderCard from '../component/OrderCard'

export default function AdminPage() { 

    return(
        <div className='w-[1000px] h-[800px]'>
            <h1 className='justify-self-center text-3xl my-[25px]'>Orders :</h1>
            <OrderCard/>
        </div>
    )
}