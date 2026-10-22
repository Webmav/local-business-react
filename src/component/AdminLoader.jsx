export const AdminLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch(`/api/orders`)
    if(!res.ok) {
        console.error("Could not fetch orders.")
    }

    return res.json();
}