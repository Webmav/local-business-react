import { useLoaderData, useNavigate, Link, useRevalidator } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function OrderCard() {
    const order = useLoaderData()
    const navigate = useNavigate()
    const { revalidate } = useRevalidator();

    return(
        <div className="flex flex-wrap">
            {order.map((orderItem) => (
                <div className="grid border border-black w-[250px] my-[25px] mx-[25px] px-[15px] py-[10px] " key={orderItem.id}>
                    <h1> Name : {orderItem.name} </h1>
                    <h1> Phone : {orderItem.phone} </h1>
                    <h1> Address : {orderItem.address} </h1>
                    <h1> Order #1 Item : {orderItem.orderOneItem} </h1>
                    <h1> Order #1 Quantity : {orderItem.orderOneQuantity} </h1>
                    <h1> Order #1 Price : {orderItem.orderOnePrice} { (!orderItem.orderTwoItem == "") && <Link to={ `/admin/orders/${orderItem.id}` } className="text-yellow-600 hover:text-yellow-800">...</Link> } </h1>

                    <button 
                        className="border border-black hover:text-yellow-300 my-[2px]"
                        onClick={ () => {
                            navigate(`/admin/orders/edit-order/${orderItem.id}`)
                        }}
                    >
                        Edit
                    </button>

                    <button 
                        className="border border-black hover:text-yellow-300"
                        onClick={ 
                            // //Function for deleting local order
                            //     async () => {
                            //         const res = await fetch (`/api/orders/${orderItem.id}`, {
                            //             method: "DELETE",
                            //         })
                            //     }

                            //Function for deleting remote order
                                async () => {
                                    const { error } = await supabase
                                        .from('orders')
                                        .delete()
                                        .eq('id', orderItem.id)
                                    
                                    if(error) {
                                        console.error("Could not delete order : ", error.message)
                                    } else {
                                        revalidate();
                                    }
                                }
                            
                        }
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}