import { useState } from 'react'
import { useLoaderData, useParams, useNavigate } from 'react-router-dom'

export default function OrderEdit({ UpdatedOrderSubmit }) {
    const order = useLoaderData()
    const { id } = useParams()
    const navigate = useNavigate()

    const [name, setName] = useState(order.name)
    const [phone, setPhone] = useState(order.phone)
    const [address, setAddress] = useState(order.address)

    const [orderOneItem, setOrderOneItem] = useState(order.orderOneItem)
    const [orderOneQuantity, setOrderOneQuantity] = useState(order.orderOneQuantity)
    const [orderOnePrice, setOrderOnePrice] = useState(order.orderOnePrice)

    function updatedOrder(e) {
        e.preventDefault()

        const updatedOrder = {
            id,
            name,
            phone,
            address,
            orderOneItem,
            orderOneQuantity,
            orderOnePrice,
            // orderTwoItem,
            // orderTwoQuantity: numberedOrderTwoQuantity,
            // orderTwoPrice,
            // orderThreeItem,
            // orderThreeQuantity: numberedOrderThreeQuantity,
            // orderThreePrice,
            // orderFourItem,
            // orderFourQuantity: numberedOrderFourQuantity,
            // orderFourPrice,
            // orderFiveItem,
            // orderFiveQuantity: numberedOrderFiveQuantity,
            // orderFivePrice,
        }

        UpdatedOrderSubmit(updatedOrder)
    }

    return(
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <div>
                    <form onSubmit={updatedOrder}>
                        <h2 className="text-center text-3xl font-semibold mb-6 ">Update Order</h2>

                        <div>
                            <p> id: {id} </p>
                        </div>

                        Name : <input 
                                    type='text' 
                                    value={name} 
                                    onChange={ (e) => { setName(e.target.value) } }
                                /> <br />
                        Phone : <input 
                                    type='text' 
                                    value={phone} 
                                    onChange={ (e) => { setPhone(e.target.value) } }
                                /> <br />
                        Address : <input 
                                    type='text' 
                                    value={address} 
                                    onChange={ (e) => { setAddress(e.target.value) } }
                                /> <br />

                        <button className="border border-black hover:text-yellow-300">
                            Update Order
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}