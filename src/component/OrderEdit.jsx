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

    const [orderTwoItem, setOrderTwoItem] = useState(order.orderTwoItem)
    const [orderTwoQuantity, setOrderTwoQuantity] = useState(order.orderTwoQuantity)
    const [orderTwoPrice, setOrderTwoPrice] = useState(order.orderTwoPrice)

    const [orderThreeItem, setOrderThreeItem] = useState(order.orderThreeItem)
    const [orderThreeQuantity, setOrderThreeQuantity] = useState(order.orderThreeQuantity)
    const [orderThreePrice, setOrderThreePrice] = useState(order.orderThreePrice)

    const [orderFourItem, setOrderFourItem] = useState(order.orderFourItem)
    const [orderFourQuantity, setOrderFourQuantity] = useState(order.orderFourQuantity)
    const [orderFourPrice, setOrderFourPrice] = useState(order.orderFourPrice)

    const [orderFiveItem, setOrderFiveItem] = useState(order.orderFiveItem)
    const [orderFiveQuantity, setOrderFiveQuantity] = useState(order.orderFiveQuantity)
    const [orderFivePrice, setOrderFivePrice] = useState(order.orderFivePrice)

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
            orderTwoItem,
            orderTwoQuantity,
            orderTwoPrice,
            orderThreeItem,
            orderThreeQuantity,
            orderThreePrice,
            orderFourItem,
            orderFourQuantity,
            orderFourPrice,
            orderFiveItem,
            orderFiveQuantity,
            orderFivePrice,
        }

        UpdatedOrderSubmit(updatedOrder)

        navigate('/admin/orders')
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

                        Order #1 : 
                            <input 
                                type='text' 
                                value={orderOneItem} 
                                onChange={ (e) => { setOrderOneItem(e.target.value) } }
                            />
                            <input 
                                type='text' 
                                value={orderOneQuantity} 
                                onChange={ (e) => { setOrderOneQuantity(e.target.value) } }
                            />
                            <input 
                                type='text' 
                                value={orderOnePrice} 
                                onChange={ (e) => { setOrderOnePrice(e.target.value) } }
                            />

                        { ( !orderTwoPrice == "" ) && (
                                <div>
                                    Order #2 :
                                        <input
                                            type='text'
                                            value={orderTwoItem}
                                            onChange={ (e) => { setOrderTwoItem(e.target.value) } }
                                        />
                                        <input
                                            type='text'
                                            value={orderTwoQuantity}
                                            onChange={ (e) => { setOrderTwoQuantity(e.target.value) } }
                                        />
                                        <input
                                            type='text'
                                            value={orderTwoPrice}
                                            onChange={ (e) => { setOrderTwoPrice(e.target.value) } }
                                        />
                                </div>
                        ) }

                        { ( !orderThreePrice == "" ) && (
                                <div>
                                    Order #3 :
                                        <input
                                            type='text'
                                            value={orderThreeItem}
                                            onChange={ (e) => { setOrderThreeItem(e.target.value) } }
                                        />
                                        <input
                                            type='text'
                                            value={orderThreeQuantity}
                                            onChange={ (e) => { setOrderThreeQuantity(e.target.value) } }
                                        />
                                        <input
                                            type='text'
                                            value={orderThreePrice}
                                            onChange={ (e) => { setOrderThreePrice(e.target.value) } }
                                        />
                                </div>
                        ) }

                        { ( !orderFourPrice == "" ) && (
                                <div>
                                    Order #4 :
                                        <input
                                            type='text'
                                            value={orderFourItem}
                                            onChange={ (e) => { setOrderFourItem(e.target.value) } }
                                        />
                                        <input
                                            type='text'
                                            value={orderFourQuantity}
                                            onChange={ (e) => { setOrderFourQuantity(e.target.value) } }
                                        />
                                        <input
                                            type='text'
                                            value={orderFourPrice}
                                            onChange={ (e) => { setOrderFourPrice(e.target.value) } }
                                        />
                                </div>
                        ) }

                        { ( !orderFivePrice == "" ) && (
                                <div>
                                    Order #5 :
                                        <input
                                            type='text'
                                            value={orderFiveItem}
                                            onChange={ (e) => { setOrderFiveItem(e.target.value) } }
                                        />
                                        <input
                                            type='text'
                                            value={orderFiveQuantity}
                                            onChange={ (e) => { setOrderFiveQuantity(e.target.value) } }
                                        />
                                        <input
                                            type='text'
                                            value={orderFivePrice}
                                            onChange={ (e) => { setOrderFivePrice(e.target.value) } }
                                        />
                                </div>
                        ) }
                        

                        <button className="border border-black hover:text-yellow-300">
                            Update Order
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}