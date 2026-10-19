import { Outlet } from 'react-router-dom';

import NavBar from '../component/NavBar';
import Footer from '../component/Footer';

//Add Order
async function AddOrder(newOrder) {

    const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newOrder)
    });
    console.log("Order Confirmed");
    return;
}

export default function MainLayout() {
    return (
        <>
            <NavBar addOrderSubmit={ AddOrder }/>
                <Outlet />
            <Footer />
        </>
    )
}