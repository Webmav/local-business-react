import { Outlet } from 'react-router-dom';

import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import OrderTaking from '../component/OrderTaking';

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
            <NavBar/>
                <OrderTaking addOrderSubmit={ AddOrder }/>
                <Outlet />
            <Footer />
        </>
    )
}