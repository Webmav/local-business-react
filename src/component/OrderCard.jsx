import { useLoaderData, useNavigate } from "react-router-dom"

export default function OrderCard() {
    const order = useLoaderData()
    const navigate = useNavigate()
    
    return(
        <div className="flex flex-wrap">
            {order.map((order) => (
                <div className="grid border border-black w-[250px] my-[25px] mx-[25px] px-[15px] py-[10px] " key={order.id}>
                    <h1> Name : {order.name} </h1>
                    <h1> Phone : {order.phone} </h1>
                    <h1> Address : {order.address} </h1>
                    <h1> Order #1 Item : {order.orderOneItem} </h1>
                    <h1> Order #1 Quantity : {order.orderOneQuantity} </h1>
                    <h1> Order #1 Price : {order.orderOnePrice} </h1>

                    <button 
                        className="border border-black hover:text-yellow-300 my-[2px]"
                        onClick={ () => {
                            navigate(`/admin/orders/${order.id}`)
                        }}
                    >
                        Edit
                    </button>

                    <button 
                        className="border border-black hover:text-yellow-300"
                        onClick={ async () => {
                            const res = await fetch (`/api/orders/${order.id}`, {
                                method: "DELETE",
                            })
                        }}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}