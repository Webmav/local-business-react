import OrderEdit from "../component/OrderEdit";

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

export default function OrderEditPage() {
    return <OrderEdit UpdatedOrderSubmit={orderEdit} />
}