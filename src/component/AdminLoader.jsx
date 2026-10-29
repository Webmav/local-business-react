import { supabase } from "../lib/supabase"

export const AdminLoader = async ({ params }) => {
    const { id } = params

// //fetching orders locally
//     const res = await fetch(`/api/orders`)
//     if(!res.ok) {
//         console.error("Could not fetch orders.")
//     }
//
//     return res.json();

//fetching orders remotely
    const { data: orders, error } = await supabase
        .from("orders")
        .select('*')

    if(error) {
        console.error("Could not fetch orders : ", error)
        return [];
    }

    return orders;
}