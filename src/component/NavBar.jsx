import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavBar({ addOrderSubmit }) {
    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");

    const [orderOneItem, setOrderOneItem] = useState("");
    const [orderOneQuantity, setOrderOneQuantity] = useState("1");
    const [orderOnePrice, setOrderOnePrice] = useState("")

    const [orderTwoItem, setOrderTwoItem] = useState("");
    const [orderTwoQuantity, setOrderTwoQuantity] = useState("1");
    const [orderTwoPrice, setOrderTwoPrice] = useState("")

    const [orderThreeItem, setOrderThreeItem] = useState("");
    const [orderThreeQuantity, setOrderThreeQuantity] = useState("1");
    const [orderThreePrice, setOrderThreePrice] = useState("")

    const [orderFourItem, setOrderFourItem] = useState("");
    const [orderFourQuantity, setOrderFourQuantity] = useState("1");
    const [orderFourPrice, setOrderFourPrice] = useState("")

    const [orderFiveItem, setOrderFiveItem] = useState("");
    const [orderFiveQuantity, setOrderFiveQuantity] = useState("1");
    const [orderFivePrice, setOrderFivePrice] = useState("")

    let orderOnePriceBox = document.getElementById("order-one-price-box");
    let orderTwoPriceBox = document.getElementById("order-two-price-box");
    let orderThreePriceBox = document.getElementById("order-three-price-box");
    let orderFourPriceBox = document.getElementById("order-four-price-box");
    let orderFivePriceBox = document.getElementById("order-five-price-box");

    useEffect(() => {
        orderOnePriceBox = document.getElementById("order-one-price-box");
        orderTwoPriceBox = document.getElementById("order-two-price-box");
        orderThreePriceBox = document.getElementById("order-three-price-box");
        orderFourPriceBox = document.getElementById("order-four-price-box");
        orderFivePriceBox = document.getElementById("order-five-price-box");
    }, [])

    const navigate = useNavigate();

    function Order() {
        const orderMenu = document.getElementById("order-menu")
        orderMenu.classList.toggle("hidden")

        console.log("Clicked")
    }

    function submitForm(e) {
        e.preventDefault()

        const newOrder = {
            name : customerName,
            phone : customerPhone,
            address : customerAddress,
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
            orderFivePrice
        }

        addOrderSubmit(newOrder)
    }

    return(
        <div>
            <nav
                id="nav"
                className="flex justify-between px-[75px] py-[25px] bg-red-500 text-yellow-300 border border-red-700"
            >
                <h1 className="">Fine Food</h1>
                <ul
                    id='menu-list'
                    className="flex"
                >
                <li>Menu</li>
                <li>Track</li>
                <li>Contacts</li>
                <li>About us</li>
                </ul>
                <button
                    className="rounded border border-black px-[7.5px] py-[2.5px] hover:bg-red-600 hover:text-yellow-100"
                    onClick={Order}
                >
                    Order
                </button>
            </nav>
            
            <div
                id="order-menu"
                className = "absolute justify-self-center top-[100px] border border-black drop-shadow-xl rounded-[25px] bg-red-500"
            >
                <form 
                    onSubmit={submitForm}
                    className="mx-[25px] my-[50px]"
                >
                    <h1 className="justify-self-center my-[25px]">Order</h1>

                    <ul>
                        <li className="mx-[20px] my-[20px]">
                            Name : <input
                                className="border border-black  hover:bg-red-600 px-[5px] py-[2.5px] rounded-[5px] mx-[30px]"
                                type="text" 
                                name="name"
                                value={ customerName }
                                onChange={ (e) => { setCustomerName(e.target.value) } }
                            />
                        </li>

                        <li className="mx-[20px] my-[20px]">  
                            Phone : <input
                                className="border border-black  hover:bg-red-600 px-[5px] py-[2.5px] rounded-[5px] mx-[27px]"
                                type="phone" 
                                name="Phone"
                                value={ customerPhone }
                                onChange={ (e) => { setCustomerPhone(e.target.value) } }
                            />
                        </li>

                        <li className="mx-[20px] my-[20px]">
                            Address : <input
                                className="border border-black  hover:bg-red-600 px-[5px] py-[2.5px] rounded-[5px] mx-[14px]"
                                type="text" 
                                name="Address" 
                                value={ customerAddress }
                                onChange={ (e) => { setCustomerAddress(e.target.value) } }
                            />
                        </li>
                    </ul>


                    <div id="Order">
                            <input type="checkbox" className="ml-[50px] mr-[7.5px] "/>Manual

                            <div id="div-order-one" className="flex gap-[10px] mx-[20px] my-[20px]">
                                Order #1 : <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                    id='order-one-item'
                                    name="order-one-item"
                                    value={ orderOneItem }
                                    onChange={ 
                                        (e) => { 
                                            setOrderOneItem(e.target.value)
                                            orderOnePriceBox.textContent = orderOneQuantity * 250 ;
                                        }
                                    }
                                >
                                    <option value="Choose Your Order"> Choose Your Order </option>
                                    <option value="#"> # </option>
                                    <option value="#"> # </option>
                                    <option value="#"> # </option>
                                    <option value="#"> # </option>
                                    <option value="#"> # </option>
                                </select>

                                <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[100px]"
                                    id="quantity-order-one" 
                                    name="quantity-order-one"
                                    value={ orderOneQuantity }
                                    onChange={ 
                                        (e) => { 
                                            setOrderOneQuantity(e.target.value)
                                            orderOnePriceBox.textContent = e.target.value * 250 ;
                                        } 
                                    }
                                >
                                        <option value="1"> 1 </option>
                                        <option value="2"> 2 </option>
                                        <option value="3"> 3 </option>
                                        <option value="4"> 4 </option>
                                        <option value="5"> 5 </option>
                                </select>

                                <div className="border border-black px-[5px] py-[2px] rounded">
                                    <p 
                                        id="order-one-price-box"
                                        className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                    >
                                        
                                    </p>
                                </div>
                            </div>

                            <div id="div-order-two" className="flex gap-[10px] mx-[20px] my-[20px]">
                                Order #2 : <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                    id='order-two-item'
                                    name="order-two-item"
                                    value={ orderTwoItem }
                                    onChange={ 
                                        (e) => { 
                                            setOrderTwoItem(e.target.value)
                                            orderTwoPriceBox.textContent = orderTwoQuantity * 250 ;
                                        }
                                    }
                                >
                                    <option value="Choose Your Order"> Choose Your Order </option>
                                    <option value="#"> # </option>
                                    <option value="#"> # </option>
                                    <option value="#"> # </option>
                                    <option value="#"> # </option>
                                    <option value="#"> # </option>
                                </select>

                                <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[100px]"
                                    id="quantity-order-two" 
                                    name="quantity-order-two"
                                    value={ orderTwoQuantity }
                                    onChange={ 
                                        (e) => { 
                                            setOrderTwoQuantity(e.target.value)
                                            orderTwoPriceBox.textContent = e.target.value * 250 ;
                                        } 
                                    }
                                >
                                        <option value="1"> 1 </option>
                                        <option value="2"> 2 </option>
                                        <option value="3"> 3 </option>
                                        <option value="4"> 4 </option>
                                        <option value="5"> 5 </option>
                                </select>

                                <div className="border border-black px-[5px] py-[2px] rounded">
                                    <p 
                                        id="order-two-price-box"
                                        className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                        value={ orderTwoPrice }
                                        onChange={ (e) => { setOrderTwoPrice(e.target.value) } }
                                    >
                                        
                                    </p>
                                </div>
                            </div>

                            <div id="div-order-three" className="flex gap-[10px] mx-[20px] my-[20px]">
                                Order #3 : <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                    id='order-three-item'
                                    name="order-three-item"
                                    value={ orderThreeItem }
                                    onChange={ 
                                        (e) => { 
                                            setOrderThreeItem(e.target.value)
                                            orderThreePriceBox.textContent = orderThreeQuantity * 250 ;
                                        }
                                    }
                                >
                                    <option value="Choose Your Order"> Choose Your Order </option>
                                    <option value="#"> # </option>
                                    <option value="#"> # </option>
                                    <option value="#"> # </option>
                                    <option value="#"> # </option>
                                    <option value="#"> # </option>
                                </select>

                                <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[100px]"
                                    id="quantity-order-three" 
                                    name="quantity-order-three"
                                    value={ orderThreeQuantity }
                                    onChange={ 
                                        (e) => { 
                                            setOrderThreeQuantity(e.target.value)
                                            orderThreePriceBox.textContent = e.target.value * 250 ;
                                        } 
                                    }
                                >
                                        <option value="1"> 1 </option>
                                        <option value="2"> 2 </option>
                                        <option value="3"> 3 </option>
                                        <option value="4"> 4 </option>
                                        <option value="5"> 5 </option>
                                </select>

                                <div className="border border-black px-[5px] py-[2px] rounded">
                                    <p 
                                        id="order-three-price-box"
                                        className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                        value={ orderThreePrice }
                                        onChange={ (e) => { setOrderThreePrice(e.target.value) } }
                                    >
                                        
                                    </p>
                                </div>
                            </div>

                            <div id="div-order-four" className="flex gap-[10px] mx-[20px] my-[20px]">
                                Order #4 : <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                    id='order-four-item'
                                    name="order-four-item"
                                    value={ orderFourItem }
                                    onChange={ 
                                        (e) => { 
                                            setOrderFourItem(e.target.value)
                                            orderFourPriceBox.textContent = orderFourQuantity * 250 ;
                                        }
                                    }
                                >
                                    <option value="Choose Your Order"> Choose Your Order </option>
                                    <option value="#"> # </option>
                                    <option value="#"> # </option>
                                    <option value="#"> # </option>
                                    <option value="#"> # </option>
                                    <option value="#"> # </option>
                                </select>

                                <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[100px]"
                                    id="quantity-order-four" 
                                    name="quantity-order-four"
                                    value={ orderFourQuantity }
                                    onChange={ 
                                        (e) => { 
                                            setOrderFourQuantity(e.target.value)
                                            orderFourPriceBox.textContent = e.target.value * 250 ;
                                        } 
                                    }
                                >
                                        <option value="1"> 1 </option>
                                        <option value="2"> 2 </option>
                                        <option value="3"> 3 </option>
                                        <option value="4"> 4 </option>
                                        <option value="5"> 5 </option>
                                </select>

                                <div className="border border-black px-[5px] py-[2px] rounded">
                                    <p 
                                        id="order-four-price-box"
                                        className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                        value={ orderFourPrice }
                                        onChange={ (e) => { setOrderFourPrice(e.target.value) } }
                                    >
                                        
                                    </p>
                                </div>
                            </div>

                            <div id="div-order-five" className="flex gap-[10px] mx-[20px] my-[20px]">
                                Order #5 : <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                    id='order-five-item'
                                    name="order-five-item"
                                    value={ orderFiveItem }
                                    onChange={ 
                                        (e) => { 
                                            setOrderFiveItem(e.target.value)
                                            orderFivePriceBox.textContent = orderFiveQuantity * 250 ;
                                        }
                                    }
                                >
                                    <option value="Choose Your Order"> Choose Your Order </option>
                                    <option value="#"> # </option>
                                    <option value="#"> # </option>
                                    <option value="#"> # </option>
                                    <option value="#"> # </option>
                                    <option value="#"> # </option>
                                </select>

                                <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[100px]"
                                    id="quantity-order-five" 
                                    name="quantity-order-five"
                                    value={ orderFiveQuantity }
                                    onChange={ 
                                        (e) => { 
                                            setOrderFiveQuantity(e.target.value)
                                            orderFivePriceBox.textContent = e.target.value * 250 ;
                                        } 
                                    }                                >
                                        <option value="1"> 1 </option>
                                        <option value="2"> 2 </option>
                                        <option value="3"> 3 </option>
                                        <option value="4"> 4 </option>
                                        <option value="5"> 5 </option>
                                </select>

                                <div className="border border-black px-[5px] py-[2px] rounded">
                                    <p 
                                        id="order-five-price-box"
                                        className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                        value={ orderFivePrice }
                                        onChange={ (e) => { setOrderFivePrice(e.target.value) } }
                                    >
                                        
                                    </p>
                                </div>
                            </div>
                    </div>

                    <div 
                        id="payment"
                        className="mx-[20px]"
                    >
                        <select 
                            name="payment" 
                            id="payment-option"
                            className="border border-black px-[5px] py-[2.5px] rounded-[5px] "
                        >
                            <option value="cash">Cash</option>
                            <option value="upi">UPI</option>
                        </select>
                    </div>

                    <div className="flex justify-center">
                        <button 
                            className="rounded border border-black px-[7.5px] py-[2.5px] hover:bg-red-600 hover:text-yellow-100"
                        >
                            Confirm Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}