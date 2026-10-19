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

                            <div id="div-order-one" className="flex gap-[10px] mx-[20px] my-[20px]">
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

                            <div id="div-order-two" className="flex gap-[10px] mx-[20px] my-[20px]">
                                Order #2 : <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                    id="order-two" name="order-two">
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
                                    id="quantity-order-two" name="quantity-order-two">
                                    <option
                                        id="first-option-quantity-two"
                                        value="1"
                                    >
                                        1
                                    </option>

                                    <option
                                        id="second-option-quantity-two"
                                        value="2"
                                    >
                                        2
                                    </option>

                                    <option
                                        id="third-option-quantity-two"
                                        value="3"
                                    >
                                        3
                                    </option>

                                    <option
                                        id="fourth-option-quantity-two"
                                        value="4"
                                    >
                                        4
                                    </option>

                                    <option
                                        id="fifth-option-quantity-two"
                                        value="5"
                                    >
                                        5
                                    </option>
                                </select>

                                <div className="border border-black px-[5px] py-[2px] rounded">
                                    <p 
                                        id="price-order-two"
                                        className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                    >
                                        
                                    </p>
                                </div>
                            </div>

                            <div id="div-order-three" className="flex gap-[10px] mx-[20px] my-[20px]">
                                Order #3 : <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                    id="order-three" name="order-three">
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
                                    id="quantity-order-three" name="quantity-order-three">
                                    <option
                                        id="first-option-quantity-three"
                                        value="1"
                                    >
                                        1
                                    </option>

                                    <option
                                        id="second-option-quantity-three"
                                        value="2"
                                    >
                                        2
                                    </option>

                                    <option
                                        id="third-option-quantity-three"
                                        value="3"
                                    >
                                        3
                                    </option>

                                    <option
                                        id="fourth-option-quantity-three"
                                        value="4"
                                    >
                                        4
                                    </option>

                                    <option
                                        id="fifth-option-quantity-three"
                                        value="5"
                                    >
                                        5
                                    </option>
                                </select>

                                <div className="border border-black px-[5px] py-[2px] rounded">
                                    <p 
                                        id="price-order-three"
                                        className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                    >
                                        
                                    </p>
                                </div>
                            </div>

                            <div id="div-order-four" className="flex gap-[10px] mx-[20px] my-[20px]">
                                Order #4 : <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                    id="order-four" name="order-four">
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
                                    id="quantity-order-four" name="quantity-order-four">
                                    <option
                                        id="first-option-quantity-four"
                                        value="1"
                                    >
                                        1
                                    </option>

                                    <option
                                        id="second-option-quantity-four"
                                        value="2"
                                    >
                                        2
                                    </option>

                                    <option
                                        id="third-option-quantity-four"
                                        value="3"
                                    >
                                        3
                                    </option>

                                    <option
                                        id="fourth-option-quantity-four"
                                        value="4"
                                    >
                                        4
                                    </option>

                                    <option
                                        id="fifth-option-quantity-four"
                                        value="5"
                                    >
                                        5
                                    </option>
                                </select>

                                <div className="border border-black px-[5px] py-[2px] rounded">
                                    <p 
                                        id="price-order-four"
                                        className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                    >
                                        
                                    </p>
                                </div>
                            </div>

                            <div id="div-order-five" className="flex gap-[10px] mx-[20px] my-[20px]">
                                Order #5 : <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                    id="order-five" name="order-five">
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
                                    id="quantity-order-five" name="quantity-order-five">
                                    <option
                                        id="first-option-quantity-five"
                                        value="1"
                                    >
                                        1
                                    </option>

                                    <option
                                        id="second-option-quantity-five"
                                        value="2"
                                    >
                                        2
                                    </option>

                                    <option
                                        id="third-option-quantity-five"
                                        value="3"
                                    >
                                        3
                                    </option>

                                    <option
                                        id="fourth-option-quantity-five"
                                        value="4"
                                    >
                                        4
                                    </option>

                                    <option
                                        id="fifth-option-quantity-five"
                                        value="5"
                                    >
                                        5
                                    </option>
                                </select>

                                <div className="border border-black px-[5px] py-[2px] rounded">
                                    <p 
                                        id="price-order-five"
                                        className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                    >
                                        
                                    </p>
                                </div>
                            </div>

                            <div id="div-order-six" className="flex gap-[10px] mx-[20px] my-[20px]">
                                Order #6 : <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                    id="order-six" name="order-six">
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
                                    id="quantity-order-six" name="quantity-order-six">
                                    <option
                                        id="first-option-quantity-six"
                                        value="1"
                                    >
                                        1
                                    </option>

                                    <option
                                        id="second-option-quantity-six"
                                        value="2"
                                    >
                                        2
                                    </option>

                                    <option
                                        id="third-option-quantity-six"
                                        value="3"
                                    >
                                        3
                                    </option>

                                    <option
                                        id="fourth-option-quantity-six"
                                        value="4"
                                    >
                                        4
                                    </option>

                                    <option
                                        id="fifth-option-quantity-six"
                                        value="5"
                                    >
                                        5
                                    </option>
                                </select>

                                <div className="border border-black px-[5px] py-[2px] rounded">
                                    <p 
                                        id="price-order-six"
                                        className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                    >
                                        
                                    </p>
                                </div>
                            </div>

                            <div id="div-order-seven" className="flex gap-[10px] mx-[20px] my-[20px] hidden">
                                Order #7 : <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                    id="order-seven" name="order-seven">
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
                                    id="quantity-order-seven" name="quantity-order-seven">
                                    <option
                                        id="first-option-quantity-seven"
                                        value="1"
                                    >
                                        1
                                    </option>

                                    <option
                                        id="second-option-quantity-seven"
                                        value="2"
                                    >
                                        2
                                    </option>

                                    <option
                                        id="third-option-quantity-seven"
                                        value="3"
                                    >
                                        3
                                    </option>

                                    <option
                                        id="fourth-option-quantity-seven"
                                        value="4"
                                    >
                                        4
                                    </option>

                                    <option
                                        id="fifth-option-quantity-seven"
                                        value="5"
                                    >
                                        5
                                    </option>
                                </select>

                                <div className="border border-black px-[5px] py-[2px] rounded">
                                    <p 
                                        id="price-order-seven"
                                        className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                    >
                                        
                                    </p>
                                </div>
                            </div>

                            <div id="div-order-eight" className="flex gap-[10px] mx-[20px] my-[20px] hidden">
                                Order #8 : <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                    id="order-eight" name="order-eight">
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
                                    id="quantity-order-eight" name="quantity-order-eight">
                                    <option
                                        id="first-option-quantity-eight"
                                        value="1"
                                    >
                                        1
                                    </option>

                                    <option
                                        id="second-option-quantity-eight"
                                        value="2"
                                    >
                                        2
                                    </option>

                                    <option
                                        id="third-option-quantity-eight"
                                        value="3"
                                    >
                                        3
                                    </option>

                                    <option
                                        id="fourth-option-quantity-eight"
                                        value="4"
                                    >
                                        4
                                    </option>

                                    <option
                                        id="fifth-option-quantity-eight"
                                        value="5"
                                    >
                                        5
                                    </option>
                                </select>

                                <div className="border border-black px-[5px] py-[2px] rounded">
                                    <p 
                                        id="price-order-eight"
                                        className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                    >
                                        
                                    </p>
                                </div>
                            </div>

                            <div id="div-order-nine" className="flex gap-[10px] mx-[20px] my-[20px] hidden">
                                Order #9 : <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                    id="order-nine" name="order-nine">
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
                                    id="quantity-order-nine" name="quantity-order-nine">
                                    <option
                                        id="first-option-quantity-nine"
                                        value="1"
                                    >
                                        1
                                    </option>

                                    <option
                                        id="second-option-quantity-nine"
                                        value="2"
                                    >
                                        2
                                    </option>

                                    <option
                                        id="third-option-quantity-nine"
                                        value="3"
                                    >
                                        3
                                    </option>

                                    <option
                                        id="fourth-option-quantity-nine"
                                        value="4"
                                    >
                                        4
                                    </option>

                                    <option
                                        id="fifth-option-quantity-nine"
                                        value="5"
                                    >
                                        5
                                    </option>
                                </select>

                                <div className="border border-black px-[5px] py-[2px] rounded">
                                    <p 
                                        id="price-order-nine"
                                        className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                    >
                                        
                                    </p>
                                </div>
                            </div>

                            <div id="div-order-ten" className="flex gap-[10px] mx-[20px] my-[20px] hidden">
                                Order #10 : <select
                                    className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                    id="order-ten" name="order-ten">
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
                                    id="quantity-order-ten" name="quantity-order-ten">
                                    <option
                                        id="first-option-quantity-ten"
                                        value="1"
                                    >
                                        1
                                    </option>

                                    <option
                                        id="second-option-quantity-ten"
                                        value="2"
                                    >
                                        2
                                    </option>

                                    <option
                                        id="third-option-quantity-ten"
                                        value="3"
                                    >
                                        3
                                    </option>

                                    <option
                                        id="fourth-option-quantity-ten"
                                        value="4"
                                    >
                                        4
                                    </option>

                                    <option
                                        id="fifth-option-quantity-ten"
                                        value="5"
                                    >
                                        5
                                    </option>
                                </select>

                                <div className="border border-black px-[5px] py-[2px] rounded">
                                    <p 
                                        id="price-order-ten"
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