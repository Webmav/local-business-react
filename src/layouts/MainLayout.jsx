import { Outlet } from 'react-router-dom';
import { supabase } from '../lib/supabase'

import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import OrderTaking from '../component/OrderTaking';

// //Add Order locally
// async function AddOrder(newOrder) {

//     const res = await fetch("/api/orders", {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newOrder)
//     });
//     console.log("Order Confirmed");
//     return;
// }

//Add order remotely
async function AddOrder(newOrder) {
    const { data, error } = await supabase
        .from("orders")
        .insert(newOrder)
        .select()
        .single()

    if(error) {
        console.error("Could not create Order : ", error.message)
        return
    }

    console.log(data)
}

export default function MainLayout() {
    return (
        <>
            <NavBar/>
                <OrderTaking addOrderSubmit={ AddOrder }/>
                <Outlet />
            <Footer />
        </>
    )
}