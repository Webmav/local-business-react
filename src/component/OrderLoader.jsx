export default async function OrderLoader({ params }) {
    const { id } = params
    const res = await fetch(`/api/orders/${id}`)
    if(!res.ok) {
        console.error("Could not fetch data.")
    }

    return res.json();
}