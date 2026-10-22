import Hero from '../component/Hero'
import HeroCta from '../component/HeroCta'
import OrderTaking from '../component/OrderTaking'
import SlidingMenu from '../component/SlidingMenu'

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

export default function HomePage() {
    return(
        <div 
            id='HomePage'
            className="bg-red-300 py-[25px]"
        >
            <OrderTaking addOrderSubmit={ AddOrder } />

            <Hero />

            <HeroCta />

            <SlidingMenu />
        </div>
    )
}