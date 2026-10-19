export default function NavBar() {
    function Order() {
        const orderMenu = document.getElementById("order-menu")
        orderMenu.classList.toggle("hidden")

        console.log("Clicked")
    }

    function ConfirmOrder(e) {
        e.preventDefault()
        console.log("Order Confirmed")
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
                    action=""
                    className="mx-[25px] my-[50px]"
                >
                    <h1 className="justify-self-center my-[25px]">Order</h1>

                    <ul>
                        <li className="mx-[20px] my-[20px]">
                            Name : <input
                                className="border border-black  hover:bg-red-600 px-[5px] py-[2.5px] rounded-[5px] mx-[30px]"
                                type="text" 
                                name="name"
                            />
                        </li>

                        <li className="mx-[20px] my-[20px]">  
                            Phone : <input
                                className="border border-black  hover:bg-red-600 px-[5px] py-[2.5px] rounded-[5px] mx-[27px]"
                                type="text" 
                                name="Phone"
                            />
                        </li>

                        <li className="mx-[20px] my-[20px]">
                            Address : <input
                                className="border border-black  hover:bg-red-600 px-[5px] py-[2.5px] rounded-[5px] mx-[14px]"
                                type="text" 
                                name="Address" 
                            />
                        </li>

                        {/* <li className="mx-[20px] my-[20px]">
                            Name : <input
                                className="border border-black  hover:bg-red-600 px-[5px] py-[2.5px] rounded-[5px] mx-[31px]"
                                type="text" 
                                name="name"
                            />
                        </li> */}
                    </ul>

                    <div id="Order">
                            <input type="checkbox" className="ml-[50px] mr-[7.5px] "/>Manual

                            <div className="flex gap-[10px] mx-[20px] my-[20px]">
                                Order #1 : <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                    id="order-one" name="order-one">
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                </select>

                                <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[100px]"
                                    id="quantity-order-one" name="quantity-order-one">
                                    <option
                                        id="first-option-quantity-one"
                                        value="1"
                                    >
                                        1
                                    </option>

                                    <option
                                        id="second-option-quantity-one"
                                        value="2"
                                    >
                                        2
                                    </option>

                                    <option
                                        id="third-option-quantity-one"
                                        value="3"
                                    >
                                        3
                                    </option>

                                    <option
                                        id="fourth-option-quantity-one"
                                        value="4"
                                    >
                                        4
                                    </option>

                                    <option
                                        id="fifth-option-quantity-one"
                                        value="5"
                                    >
                                        5
                                    </option>
                                </select>

                                <div className="border border-black px-[5px] py-[2px] rounded">
                                    <p 
                                        id="price-order-one"
                                        className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                    >
                                        
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-[10px] mx-[20px] my-[20px]">
                                Order #1 : <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                    id="order-one" name="order-one">
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                </select>

                                <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[100px]"
                                    id="quantity-order-one" name="quantity-order-one">
                                    <option
                                        id="first-option-quantity-one"
                                        value="1"
                                    >
                                        1
                                    </option>

                                    <option
                                        id="second-option-quantity-one"
                                        value="2"
                                    >
                                        2
                                    </option>

                                    <option
                                        id="third-option-quantity-one"
                                        value="3"
                                    >
                                        3
                                    </option>

                                    <option
                                        id="fourth-option-quantity-one"
                                        value="4"
                                    >
                                        4
                                    </option>

                                    <option
                                        id="fifth-option-quantity-one"
                                        value="5"
                                    >
                                        5
                                    </option>
                                </select>

                                <div className="border border-black px-[5px] py-[2px] rounded">
                                    <p 
                                        id="price-order-one"
                                        className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                    >
                                        
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-[10px] mx-[20px] my-[20px]">
                                Order #1 : <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                    id="order-one" name="order-one">
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                </select>

                                <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[100px]"
                                    id="quantity-order-one" name="quantity-order-one">
                                    <option
                                        id="first-option-quantity-one"
                                        value="1"
                                    >
                                        1
                                    </option>

                                    <option
                                        id="second-option-quantity-one"
                                        value="2"
                                    >
                                        2
                                    </option>

                                    <option
                                        id="third-option-quantity-one"
                                        value="3"
                                    >
                                        3
                                    </option>

                                    <option
                                        id="fourth-option-quantity-one"
                                        value="4"
                                    >
                                        4
                                    </option>

                                    <option
                                        id="fifth-option-quantity-one"
                                        value="5"
                                    >
                                        5
                                    </option>
                                </select>

                                <div className="border border-black px-[5px] py-[2px] rounded">
                                    <p 
                                        id="price-order-one"
                                        className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                    >
                                        
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-[10px] mx-[20px] my-[20px]">
                                Order #1 : <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                    id="order-one" name="order-one">
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                </select>

                                <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[100px]"
                                    id="quantity-order-one" name="quantity-order-one">
                                    <option
                                        id="first-option-quantity-one"
                                        value="1"
                                    >
                                        1
                                    </option>

                                    <option
                                        id="second-option-quantity-one"
                                        value="2"
                                    >
                                        2
                                    </option>

                                    <option
                                        id="third-option-quantity-one"
                                        value="3"
                                    >
                                        3
                                    </option>

                                    <option
                                        id="fourth-option-quantity-one"
                                        value="4"
                                    >
                                        4
                                    </option>

                                    <option
                                        id="fifth-option-quantity-one"
                                        value="5"
                                    >
                                        5
                                    </option>
                                </select>

                                <div className="border border-black px-[5px] py-[2px] rounded">
                                    <p 
                                        id="price-order-one"
                                        className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                    >
                                        
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-[10px] mx-[20px] my-[20px]">
                                Order #1 : <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                    id="order-one" name="order-one">
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                    <option 
                                        value="#"
                                    >
                                        #
                                    </option>
                                </select>

                                <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[100px]"
                                    id="quantity-order-one" name="quantity-order-one">
                                    <option
                                        id="first-option-quantity-one"
                                        value="1"
                                    >
                                        1
                                    </option>

                                    <option
                                        id="second-option-quantity-one"
                                        value="2"
                                    >
                                        2
                                    </option>

                                    <option
                                        id="third-option-quantity-one"
                                        value="3"
                                    >
                                        3
                                    </option>

                                    <option
                                        id="fourth-option-quantity-one"
                                        value="4"
                                    >
                                        4
                                    </option>

                                    <option
                                        id="fifth-option-quantity-one"
                                        value="5"
                                    >
                                        5
                                    </option>
                                </select>

                                <div className="border border-black px-[5px] py-[2px] rounded">
                                    <p 
                                        id="price-order-one"
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
                            onClick={ConfirmOrder}
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