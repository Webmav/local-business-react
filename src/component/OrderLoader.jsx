import { supabase } from "../lib/supabase";

export default async function OrderLoader({ params }) {
    const { id } = params

// //Fetching order locally
//     const res = await fetch(`/api/orders/${id}`)
//     if(!res.ok) {
//         console.error("Could not fetch data.")
//     }
//
//     return res.json();

//Fetching order remotely
    const { data: order, error } = await supabase
        .from('orders')
        .select('*')
        .eq("id", id)
        .single();

    if(error) {
        console.error("Could not fetch order : ", error.message)
        return null;
    }

    return order;
}