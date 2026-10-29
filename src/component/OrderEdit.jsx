import { useState } from 'react'
import { useLoaderData, useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

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

    const [orderSixItem, setOrderSixItem] = useState(order.orderSixItem)
    const [orderSixQuantity, setOrderSixQuantity] = useState(order.orderSixQuantity)
    const [orderSixPrice, setOrderSixPrice] = useState(order.orderSixPrice)

    const [orderSevenItem, setOrderSevenItem] = useState(order.orderSevenItem)
    const [orderSevenQuantity, setOrderSevenQuantity] = useState(order.orderSevenQuantity)
    const [orderSevenPrice, setOrderSevenPrice] = useState(order.orderSevenPrice)

    const [orderEightItem, setOrderEightItem] = useState(order.orderEightItem)
    const [orderEightQuantity, setOrderEightQuantity] = useState(order.orderEightQuantity)
    const [orderEightPrice, setOrderEightPrice] = useState(order.orderEightPrice)

    const [orderNineItem, setOrderNineItem] = useState(order.orderNineItem)
    const [orderNineQuantity, setOrderNineQuantity] = useState(order.orderNineQuantity)
    const [orderNinePrice, setOrderNinePrice] = useState(order.orderNinePrice)

    const [orderTenItem, setOrderTenItem] = useState(order.orderTenItem)
    const [orderTenQuantity, setOrderTenQuantity] = useState(order.orderTenQuantity)
    const [orderTenPrice, setOrderTenPrice] = useState(order.orderTenPrice)

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
            orderSixItem,
            orderSixQuantity,
            orderSixPrice,
            orderSevenItem,
            orderSevenQuantity,
            orderSevenPrice,
            orderEightItem,
            orderEightQuantity,
            orderEightPrice,
            orderNineItem,
            orderNineQuantity,
            orderNinePrice,
            orderTenItem,
            orderTenQuantity,
            orderTenPrice,
        }

        UpdatedOrderSubmit(updatedOrder)

        navigate('/admin/orders')
    }

    return(
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <div>
                    <form onSubmit={updatedOrder} className='bg-white border border-white shadow-xl rounded px-[25px] py-[50px]'>
                        <FaArrowLeft 
                            className='mb-[10px] hover:text-gray-600'
                            onClick={ () => {
                                navigate('/admin/orders')
                            } }
                        />
                        
                        <h2 className="text-center text-3xl font-semibold mb-6 mx-auto self-center "> Update Order</h2>

                        <p className='bg-gray-500 rounded px-[10px] py-[2.5px] my-[12.5px] justify-self-start'> Id : {id} </p>

                        <div className="my-[12.5px]">
                            <p className="font-bold">Name</p>
                            <input
                                className='border border-gray-200 w-full px-3 py-2 my-2 rounded'
                                type='text'
                                name={name}
                                value={name}
                                onChange={ (e) => { setName(e.target.value) } }
                            />
                        </div>
                        
                        <div className="my-[12.5px]">
                            <p className="font-bold">phone</p>
                            <input
                                className='border border-gray-200 w-full px-3 py-2 my-2 rounded'
                                type='text'
                                name={phone}
                                value={phone}
                                onChange={ (e) => { setPhone(e.target.value) } }
                            />
                        </div>

                        <div className="my-[12.5px]">
                            <p className="font-bold">Address</p>
                            <textarea
                                className='border border-gray-200 w-full h-[100px] px-3 py-2 my-2 rounded'
                                type='text'
                                name={address}
                                value={address}
                                onChange={ (e) => { setAddress(e.target.value) } }
                            />
                        </div>

                        <div className="flex flex-col my-[12.5px]">
                            <p className="font-bold">Order #1</p>

                            <div className="flex flex-nowrap grow-1 items-center">
                                <input
                                    className='my-2 border border-gray-200 mx-1 text-center rounded'
                                    type='text'
                                    name={orderOneItem}
                                    value={orderOneItem}
                                    onChange={ (e) => { setOrderOneItem(e.target.value) } }
                                />

                                <input
                                    className='my-2 border border-gray-200 mx-1 text-center rounded'
                                    type='text'
                                    name={orderOneQuantity}
                                    value={orderOneQuantity}
                                    onChange={ (e) => { setOrderOneQuantity(e.target.value) } }
                                />
                                
                                <input
                                    className='my-2 border border-gray-200 mx-1 text-center rounded'
                                    type='text'
                                    name={orderOnePrice}
                                    value={orderOnePrice}
                                    onChange={ (e) => { setOrderOnePrice(e.target.value) } }
                                />

                                <button 
                                    className='px-3 border border-gray-200 hover:bg-gray-100 hover:border-gray-500 rounded'
                                    onClick={ (e) => {
                                        e.preventDefault()

                                        setOrderOnePrice("Heey")
                                    } }
                                >
                                    =₹
                                </button>
                            </div>
                        </div>

                        { ( !orderTwoPrice == "" ) && (
                            <div className="flex flex-col my-[12.5px]">
                                <p className="font-bold">Order #2</p>

                                <div className="flex flex-nowrap grow-1 items-center">
                                    <input
                                        className='my-2 border border-gray-200 mx-1 text-center rounded'
                                        type='text'
                                        name={orderTwoItem}
                                        value={orderTwoItem}
                                        onChange={ (e) => { setOrderTwoItem(e.target.value) } }
                                    />

                                    <input
                                        className='my-2 border border-gray-200 mx-1 text-center rounded'
                                        type='text'
                                        name={orderTwoQuantity}
                                        value={orderTwoQuantity}
                                        onChange={ (e) => { setOrderTwoQuantity(e.target.value) } }
                                    />
                                    
                                    <input
                                        className='my-2 border border-gray-200 mx-1 text-center rounded'
                                        type='text'
                                        name={orderTwoPrice}
                                        value={orderTwoPrice}
                                        onChange={ (e) => { setOrderTwoPrice(e.target.value) } }
                                    />

                                    <button 
                                        className='px-3 border border-gray-200 hover:bg-gray-100 hover:border-gray-500 rounded'
                                        onClick={ (e) => {
                                            e.preventDefault()

                                            setOrderTwoPrice("Heey")
                                        } }
                                    >
                                        =₹
                                    </button>
                                </div>
                            </div>
                        ) }

                        { ( !orderThreePrice == "" ) && (
                            <div className="flex flex-col my-[12.5px]">
                                <p className="font-bold">Order #3</p>

                                <div className="flex flex-nowrap grow-1 items-center">
                                    <input
                                        className='my-2 border border-gray-200 mx-1 text-center rounded'
                                        type='text'
                                        name={orderThreeItem}
                                        value={orderThreeItem}
                                        onChange={ (e) => { setOrderThreeItem(e.target.value) } }
                                    />

                                    <input
                                        className='my-2 border border-gray-200 mx-1 text-center rounded'
                                        type='text'
                                        name={orderThreeQuantity}
                                        value={orderThreeQuantity}
                                        onChange={ (e) => { setOrderThreeQuantity(e.target.value) } }
                                    />
                                    
                                    <input
                                        className='my-2 border border-gray-200 mx-1 text-center rounded'
                                        type='text'
                                        name={orderThreePrice}
                                        value={orderThreePrice}
                                        onChange={ (e) => { setOrderThreePrice(e.target.value) } }
                                    />

                                    <button 
                                        className='px-3 border border-gray-200 hover:bg-gray-100 hover:border-gray-500 rounded'
                                        onClick={ (e) => {
                                            e.preventDefault()

                                            setOrderThreePrice("Heey")
                                        } }
                                    >
                                        =₹
                                    </button>
                                </div>
                            </div>
                        ) }

                        { ( !orderFourPrice == "" ) && (
                            <div className="flex flex-col my-[12.5px]">
                                <p className="font-bold">Order #4</p>

                                <div className="flex flex-nowrap grow-1 items-center">
                                    <input
                                        className='my-2 border border-gray-200 mx-1 text-center rounded'
                                        type='text'
                                        name={orderFourItem}
                                        value={orderFourItem}
                                        onChange={ (e) => { setOrderFourItem(e.target.value) } }
                                    />

                                    <input
                                        className='my-2 border border-gray-200 mx-1 text-center rounded'
                                        type='text'
                                        name={orderFourQuantity}
                                        value={orderFourQuantity}
                                        onChange={ (e) => { setOrderFourQuantity(e.target.value) } }
                                    />
                                    
                                    <input
                                        className='my-2 border border-gray-200 mx-1 text-center rounded'
                                        type='text'
                                        name={orderFourPrice}
                                        value={orderFourPrice}
                                        onChange={ (e) => { setOrderFourPrice(e.target.value) } }
                                    />

                                    <button 
                                        className='px-3 border border-gray-200 hover:bg-gray-100 hover:border-gray-500 rounded'
                                        onClick={ (e) => {
                                            e.preventDefault()

                                            setOrderFourPrice("Heey")
                                        } }
                                    >
                                        =₹
                                    </button>
                                </div>
                            </div>
                        ) }

                        { ( !orderFivePrice == "" ) && (
                            <div className="flex flex-col my-[12.5px]">
                                <p className="font-bold">Order #5</p>

                                <div className="flex flex-nowrap grow-1 items-center">
                                    <input
                                        className='my-2 border border-gray-200 mx-1 text-center rounded'
                                        type='text'
                                        name={orderFiveItem}
                                        value={orderFiveItem}
                                        onChange={ (e) => { setOrderFiveItem(e.target.value) } }
                                    />

                                    <input
                                        className='my-2 border border-gray-200 mx-1 text-center rounded'
                                        type='text'
                                        name={orderFiveQuantity}
                                        value={orderFiveQuantity}
                                        onChange={ (e) => { setOrderFiveQuantity(e.target.value) } }
                                    />
                                    
                                    <input
                                        className='my-2 border border-gray-200 mx-1 text-center rounded'
                                        type='text'
                                        name={orderFivePrice}
                                        value={orderFivePrice}
                                        onChange={ (e) => { setOrderFivePrice(e.target.value) } }
                                    />

                                    <button 
                                        className='px-3 border border-gray-200 hover:bg-gray-100 hover:border-gray-500 rounded'
                                        onClick={ (e) => {
                                            e.preventDefault()

                                            setOrderFivePrice("Heey")
                                        } }
                                    >
                                        =₹
                                    </button>
                                </div>
                            </div>
                        ) }

                        <div className="flex justify-center">
                            <button className="border border-black hover:text-yellow-300 px-[10px] py-[2.5px] my-[10px] rounded">
                                Update Order
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}