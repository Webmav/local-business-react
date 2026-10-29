import OrderCard from '../component/OrderCard'

export default function AdminPage() { 
    return(
        <div className='grid justify-center mx-[50px] my-[50px] min-h-[455px] '>
            <h1 className='justify-self-center text-3xl my-[25px]'>Orders :</h1>
            <OrderCard/>
        </div>
    )
}