import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavBar({ addOrderSubmit }) {

//Hides button until all required field is filled
const inputs = document.querySelectorAll("input");
const submits = document.querySelectorAll("select");

useEffect(() => {
    const confirmOrderButton = document.getElementById("confirm-order");

    ( 
        (!customerName == "") && 
        (!customerPhone == "") &&
        (!customerAddress == "")
    ) ? confirmOrderButton.style.display = "block" : confirmOrderButton.style.display = "none";
}, [ inputs, submits])

//Menu
    const burgerPrice = 140;
    const loadedFriesPrice = 180;
    const shawayaPrice = 120;
    const mandhiPrice = 220;
    const pepsi1lPrice = 40;

//Form Details
    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");

    const [orderOneItem, setOrderOneItem] = useState("");
    const [orderOneQuantity, setOrderOneQuantity] = useState("1");
    const [orderOneSmallQuantity, setOrderOneSmallQuantity] = useState("0");
    const [orderOnePrice, setOrderOnePrice] = useState("")

//For setting price upon deciding order 
    useEffect(() => {
        orderOnePriceBox = document.getElementById("order-one-price-box");
        orderTwoPriceBox = document.getElementById("order-two-price-box");
        orderThreePriceBox = document.getElementById("order-three-price-box");
        orderFourPriceBox = document.getElementById("order-four-price-box");
        orderFivePriceBox = document.getElementById("order-five-price-box");
    }, [])

//For setting price upon deciding quantity of order 
    let orderOnePriceBox = document.getElementById("order-one-price-box");
    let orderTwoPriceBox = document.getElementById("order-two-price-box");
    let orderThreePriceBox = document.getElementById("order-three-price-box");
    let orderFourPriceBox = document.getElementById("order-four-price-box");
    let orderFivePriceBox = document.getElementById("order-five-price-box");

//Initialized for navigating after submitting form
    const navigate = useNavigate();

//Function to perform upon clicking order button in the navigation
    function Order() {
        const orderMenu = document.getElementById("order-menu")
        orderMenu.classList.toggle("hidden")

        console.log("Clicked")
    }

//Function to perform upon form submition
    function submitForm(e) {
        e.preventDefault()

        const numberedOrderOneQuantity = Number(orderOneQuantity) + Number(orderOneSmallQuantity);
        const numberedOrderTwoQuantity = Number(orderTwoQuantity) + Number(orderTwoSmallQuantity);
        const numberedOrderThreeQuantity = Number(orderThreeQuantity) + Number(orderThreeSmallQuantity);
        const numberedOrderFourQuantity = Number(orderFourQuantity) + Number(orderFourSmallQuantity);
        const numberedOrderFiveQuantity = Number(orderFiveQuantity) + Number(orderFiveSmallQuantity);
        const numberedOrderSixQuantity = Number(orderSixQuantity) + Number(orderSixSmallQuantity);
        const numberedOrderSevenQuantity = Number(orderSevenQuantity) + Number(orderSevenSmallQuantity);
        const numberedOrderEightQuantity = Number(orderEightQuantity) + Number(orderEightSmallQuantity);
        const numberedOrderNineQuantity = Number(orderNineQuantity) + Number(orderNineSmallQuantity);
        const numberedOrderTenQuantity = Number(orderTenQuantity) + Number(orderTenSmallQuantity);

        const newOrder = {
            name : customerName,
            phone : customerPhone,
            address : customerAddress,
            orderOneItem,
            orderOneQuantity: numberedOrderOneQuantity,
            orderOnePrice,
        }

        addOrderSubmit(newOrder)
        navigate("/")
    }

//Function on order item changes
    //Order One item
    function orderOneItemChanged(e) {
        if ((e.target.value == "burger")) {
            setOrderOneItem(e.target.value)
            orderOnePriceBox.textContent = orderOneQuantity * burgerPrice ;
        }
        else if ((e.target.value == "loadedFries")) {
            setOrderOneItem(e.target.value)
            orderOnePriceBox.textContent = orderOneQuantity * loadedFriesPrice ;
        }
        else if ((e.target.value == "shawaya")) {
            setOrderOneItem(e.target.value)
            orderOnePriceBox.textContent = orderOneQuantity * shawayaPrice ;
        }
        else if ((e.target.value == "mandhi")) {
            setOrderOneItem(e.target.value)
            orderOnePriceBox.textContent = orderOneQuantity * mandhiPrice ;
        }
        else if ((e.target.value == "pepsi1l")) {
            setOrderOneItem(e.target.value)
            orderOnePriceBox.textContent = orderOneQuantity * pepsi1lPrice ;

            const smallQuantityOrderOneBox = document.getElementById("small-quantity-order-one");
            smallQuantityOrderOneBox.style.display = "none";
        }
    }

//Function to perform on Order quantity changes
    //Order One quantity
    function orderOneQuantityChanged(e) {
        if (orderOneItem == "burger") {
            setOrderOneQuantity(e.target.value)
            orderOnePriceBox.textContent = e.target.value * burgerPrice ;
        }
        else if (orderOneItem == "loadedFries") {
            setOrderOneQuantity(e.target.value)
            orderOnePriceBox.textContent = e.target.value * loadedFriesPrice ;
        }
        else if (orderOneItem == "shawaya") {
            setOrderOneQuantity(e.target.value)
            orderOnePriceBox.textContent = e.target.value * shawayaPrice ;
        }
        else if (orderOneItem == "mandhi") {
            setOrderOneQuantity(e.target.value)
            orderOnePriceBox.textContent = e.target.value * mandhiPrice ;
        }
        else if (orderOneItem == "pepsi1l") {
            setOrderOneQuantity(e.target.value)
            orderOnePriceBox.textContent = e.target.value * pepsi1lPrice ;
        }
    }

//Function to perform on Order small quantity changes
    //Order One small quantity
    function orderOneSmallQuantityChanged(e) {
        console.log(orderOneQuantity)
        console.log(e.target.value)
        
        if (orderOneItem == "burger") {
            setOrderOneSmallQuantity(e.target.value)
            let sum = orderOneQuantity + e.target.value;
            orderOnePriceBox.textContent = sum * burgerPrice ;
        }
        else if (orderOneItem == "loadedFries") {
            setOrderOneSmallQuantity(e.target.value)
            let sum = orderOneQuantity + e.target.value;
            orderOnePriceBox.textContent = sum * loadedFriesPrice ;
        }
        else if (orderOneItem == "shawaya") {
            setOrderOneSmallQuantity(e.target.value)
            let sum = orderOneQuantity + e.target.value;
            orderOnePriceBox.textContent = sum * shawayaPrice ;
        }
        else if (orderOneItem == "mandhi") {
            setOrderOneSmallQuantity(e.target.value)
            let sum = orderOneQuantity + e.target.value;
            orderOnePriceBox.textContent = sum * mandhiPrice ;
        }
        else if (orderOneItem == "pepsi1l") {
            setOrderOneSmallQuantity(e.target.value)
            let sum = orderOneQuantity + e.target.value;
            orderOnePriceBox.textContent = sum * pepsi1lPrice ;
        }
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
                className = "absolute justify-self-center top-[100px] border border-black drop-shadow-xl rounded-[25px] bg-red-500 hidden"
            >
                <form 
                    onSubmit={submitForm}
                    className="mx-[25px] my-[50px]"
                >
                    <h1 className="justify-self-center my-[25px]">Order</h1>

                    <h2 className='justify-self-center text-[7.5px] text-yellow-100'>You can only order if you have filled Name, Phone and Address field !</h2>

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
                                    onChange={ orderOneItemChanged }
                                >
                                    <option value="Choose Your Order"> Choose Your Order </option>
                                    <option value="burger"> burger </option>
                                    <option value="loadedFries"> loadedFries </option>
                                    <option value="shawaya"> shawaya </option>
                                    <option value="mandhi"> mandhi </option>
                                    <option value="pepsi1l"> pepsi1l </option>
                                </select>

                                <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[100px]"
                                    id="quantity-order-one" 
                                    name="quantity-order-one"
                                    value={ orderOneQuantity }
                                    onChange={ orderOneQuantityChanged }
                                >
                                        <option value="0"> 0 </option>
                                        <option value="1"> 1 </option>
                                        <option value="2"> 2 </option>
                                        <option value="3"> 3 </option>
                                        <option value="4"> 4 </option>
                                        <option value="5"> 5 </option>
                                        <option value="6"> 6 </option>
                                        <option value="7"> 7 </option>
                                        <option value="8"> 8 </option>
                                        <option value="9"> 9 </option>
                                        <option value="10"> 10 </option>
                                </select>

                                <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[100px]"
                                    id="small-quantity-order-one" 
                                    name="small-quantity-order-one"
                                    value={ orderOneSmallQuantity }
                                    onChange={ orderOneSmallQuantityChanged }
                                >
                                        <option value="0"> Null </option>
                                        <option value=".25"> Quarter (1/4) </option>
                                        <option value=".5"> Half (1/2) </option>
                                        <option value=".75"> Three quarter (3/4)  </option>
                                </select>

                                <div className="border border-black px-[5px] py-[2px] rounded">
                                    <p 
                                        id="order-one-price-box"
                                        className="totalPrice min-w-[50px] px-[5px] p-[2px] "
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
                            id='confirm-order'
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