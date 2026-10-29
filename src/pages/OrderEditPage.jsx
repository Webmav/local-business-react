import OrderEdit from "../component/OrderEdit";
import { supabase } from "../lib/supabase";

//Locally order updating function
async function orderEdit(updatedOrder) {
    const res = await fetch(`/api/orders/${updatedOrder.id}`, {
        method: "PUT",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(updatedOrder)
    });
    return;
}

//Remotely order updating function
async function orderEdit(updatedOrder) {
    const { error } = await supabase
        .from("orders")
        .update(updatedOrder)
        .eq('id',updatedOrder.id)
    if(error) {
        console.log("Could not update order : ", error.message)
    }
    return;
}

export default function OrderEditPage() {
    return <OrderEdit UpdatedOrderSubmit={orderEdit} />
}