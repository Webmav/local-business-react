import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function OrderTaking({ addOrderSubmit }) {

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

    const [orderTwoItem, setOrderTwoItem] = useState("");
    const [orderTwoQuantity, setOrderTwoQuantity] = useState("1");
    const [orderTwoSmallQuantity, setOrderTwoSmallQuantity] = useState("0");
    const [orderTwoPrice, setOrderTwoPrice] = useState("")

    const [orderThreeItem, setOrderThreeItem] = useState("");
    const [orderThreeQuantity, setOrderThreeQuantity] = useState("1");
    const [orderThreeSmallQuantity, setOrderThreeSmallQuantity] = useState("0");
    const [orderThreePrice, setOrderThreePrice] = useState("")

    const [orderFourItem, setOrderFourItem] = useState("");
    const [orderFourQuantity, setOrderFourQuantity] = useState("1");
    const [orderFourSmallQuantity, setOrderFourSmallQuantity] = useState("0");
    const [orderFourPrice, setOrderFourPrice] = useState("")

    const [orderFiveItem, setOrderFiveItem] = useState("");
    const [orderFiveQuantity, setOrderFiveQuantity] = useState("1");
    const [orderFiveSmallQuantity, setOrderFiveSmallQuantity] = useState("0");
    const [orderFivePrice, setOrderFivePrice] = useState("")

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
//Initialized for id 
    const { id } = useParams();

//Function to perform upon form submition
    function submitForm(e) {
        e.preventDefault()

        const numberedOrderOneQuantity = Number(orderOneQuantity) + Number(orderOneSmallQuantity);
        const numberedOrderTwoQuantity = Number(orderTwoQuantity) + Number(orderTwoSmallQuantity);
        const numberedOrderThreeQuantity = Number(orderThreeQuantity) + Number(orderThreeSmallQuantity);
        const numberedOrderFourQuantity = Number(orderFourQuantity) + Number(orderFourSmallQuantity);
        const numberedOrderFiveQuantity = Number(orderFiveQuantity) + Number(orderFiveSmallQuantity);

        const newOrder = {
            id,
            name : customerName,
            phone : customerPhone,
            address : customerAddress,
            orderOneItem,
            orderOneQuantity: numberedOrderOneQuantity,
            orderOnePrice,
            orderTwoItem,
            orderTwoQuantity: numberedOrderTwoQuantity,
            orderTwoPrice,
            orderThreeItem,
            orderThreeQuantity: numberedOrderThreeQuantity,
            orderThreePrice,
            orderFourItem,
            orderFourQuantity: numberedOrderFourQuantity,
            orderFourPrice,
            orderFiveItem,
            orderFiveQuantity: numberedOrderFiveQuantity,
            orderFivePrice,
        }

        addOrderSubmit(newOrder)
        const orderMenu = document.getElementById("order-menu")
        orderMenu.classList.toggle("hidden")
    }

//Function on order item changes
    //Order One item
    function orderOneItemChanged(e) {
        if ((e.target.value == "burger")) {
            setOrderOneItem(e.target.value)
            orderOnePriceBox.textContent = orderOneQuantity * burgerPrice ;

            let sumTwo = orderOneQuantity * burgerPrice;
            setOrderOnePrice( sumTwo )
        }
        else if ((e.target.value == "loadedFries")) {
            setOrderOneItem(e.target.value)
            orderOnePriceBox.textContent = orderOneQuantity * loadedFriesPrice ;

            let sumTwo = orderOneQuantity * loadedFriesPrice;
            setOrderOnePrice( sumTwo )
        }
        else if ((e.target.value == "shawaya")) {
            setOrderOneItem(e.target.value)
            orderOnePriceBox.textContent = orderOneQuantity * shawayaPrice ;

            let sumTwo = orderOneQuantity * shawayaPrice;
            setOrderOnePrice( sumTwo )
        }
        else if ((e.target.value == "mandhi")) {
            setOrderOneItem(e.target.value)
            orderOnePriceBox.textContent = orderOneQuantity * mandhiPrice ;

            let sumTwo = orderOneQuantity * mandhiPrice;
            setOrderOnePrice( sumTwo )
        }
        else if ((e.target.value == "pepsi1l")) {
            setOrderOneItem(e.target.value)
            orderOnePriceBox.textContent = orderOneQuantity * pepsi1lPrice ;

            let sumTwo = orderOneQuantity * pepsi1lPrice;
            setOrderOnePrice( sumTwo )
        }
    }
    //Order Two item
    function orderTwoItemChanged(e) {
        if ((e.target.value == "burger")) {
            setOrderTwoItem(e.target.value)
            orderTwoPriceBox.textContent = orderTwoQuantity * burgerPrice ;

            let sumTwo = orderTwoQuantity * burgerPrice;
            setOrderTwoPrice( sumTwo )
        }
        else if ((e.target.value == "loadedFries")) {
            setOrderTwoItem(e.target.value)
            orderTwoPriceBox.textContent = orderTwoQuantity * loadedFriesPrice ;

            let sumTwo = orderTwoQuantity * loadedFriesPrice;
            setOrderTwoPrice( sumTwo )
        }
        else if ((e.target.value == "shawaya")) {
            setOrderTwoItem(e.target.value)
            orderTwoPriceBox.textContent = orderTwoQuantity * shawayaPrice ;

            let sumTwo = orderTwoQuantity * shawayaPrice;
            setOrderTwoPrice( sumTwo )
        }
        else if ((e.target.value == "mandhi")) {
            setOrderTwoItem(e.target.value)
            orderTwoPriceBox.textContent = orderTwoQuantity * mandhiPrice ;

            let sumTwo = orderTwoQuantity * mandhiPrice;
            setOrderTwoPrice( sumTwo )
        }
        else if ((e.target.value == "pepsi1l")) {
            setOrderTwoItem(e.target.value)
            orderTwoPriceBox.textContent = orderTwoQuantity * pepsi1lPrice ;

            let sumTwo = orderTwoQuantity * pepsi1lPrice;
            setOrderTwoPrice( sumTwo )
        }
    }
    //Order Three item
    function orderThreeItemChanged(e) {
        if ((e.target.value == "burger")) {
            setOrderThreeItem(e.target.value)
            orderThreePriceBox.textContent = orderThreeQuantity * burgerPrice ;

            let sumTwo = orderThreeQuantity * burgerPrice;
            setOrderThreePrice( sumTwo )
        }
        else if ((e.target.value == "loadedFries")) {
            setOrderThreeItem(e.target.value)
            orderThreePriceBox.textContent = orderThreeQuantity * loadedFriesPrice ;

            let sumTwo = orderThreeQuantity * loadedFriesPrice;
            setOrderThreePrice( sumTwo )
        }
        else if ((e.target.value == "shawaya")) {
            setOrderThreeItem(e.target.value)
            orderThreePriceBox.textContent = orderThreeQuantity * shawayaPrice ;

            let sumTwo = orderThreeQuantity * shawayaPrice;
            setOrderThreePrice( sumTwo )
        }
        else if ((e.target.value == "mandhi")) {
            setOrderThreeItem(e.target.value)
            orderThreePriceBox.textContent = orderThreeQuantity * mandhiPrice ;

            let sumTwo = orderThreeQuantity * mandhiPrice;
            setOrderThreePrice( sumTwo )
        }
        else if ((e.target.value == "pepsi1l")) {
            setOrderThreeItem(e.target.value)
            orderThreePriceBox.textContent = orderThreeQuantity * pepsi1lPrice ;

            let sumTwo = orderThreeQuantity * pepsi1lPrice;
            setOrderThreePrice( sumTwo )
        }
    }
    //Order Four item
    function orderFourItemChanged(e) {
        if ((e.target.value == "burger")) {
            setOrderFourItem(e.target.value)
            orderFourPriceBox.textContent = orderFourQuantity * burgerPrice ;

            let sumTwo = orderFourQuantity * burgerPrice;
            setOrderFourPrice( sumTwo )
        }
        else if ((e.target.value == "loadedFries")) {
            setOrderFourItem(e.target.value)
            orderFourPriceBox.textContent = orderFourQuantity * loadedFriesPrice ;

            let sumTwo = orderFourQuantity * loadedFriesPrice;
            setOrderFourPrice( sumTwo )
        }
        else if ((e.target.value == "shawaya")) {
            setOrderFourItem(e.target.value)
            orderFourPriceBox.textContent = orderFourQuantity * shawayaPrice ;

            let sumTwo = orderFourQuantity * shawayaPrice;
            setOrderFourPrice( sumTwo )
        }
        else if ((e.target.value == "mandhi")) {
            setOrderFourItem(e.target.value)
            orderFourPriceBox.textContent = orderFourQuantity * mandhiPrice ;

            let sumTwo = orderFourQuantity * mandhiPrice;
            setOrderFourPrice( sumTwo )
        }
        else if ((e.target.value == "pepsi1l")) {
            setOrderFourItem(e.target.value)
            orderFourPriceBox.textContent = orderFourQuantity * pepsi1lPrice ;

            let sumTwo = orderFourQuantity * pepsi1lPrice;
            setOrderFourPrice( sumTwo )
        }
    }
    //Order Five item
    function orderFiveItemChanged(e) {
        if ((e.target.value == "burger")) {
            setOrderFiveItem(e.target.value)
            orderFivePriceBox.textContent = orderFiveQuantity * burgerPrice ;

            let sumTwo = orderFiveQuantity * burgerPrice;
            setOrderFivePrice( sumTwo )
        }
        else if ((e.target.value == "loadedFries")) {
            setOrderFiveItem(e.target.value)
            orderFivePriceBox.textContent = orderFiveQuantity * loadedFriesPrice ;

            let sumTwo = orderFiveQuantity * loadedFriesPrice;
            setOrderFivePrice( sumTwo )
        }
        else if ((e.target.value == "shawaya")) {
            setOrderFiveItem(e.target.value)
            orderFivePriceBox.textContent = orderFiveQuantity * shawayaPrice ;

            let sumTwo = orderFiveQuantity * shawayaPrice;
            setOrderFivePrice( sumTwo )
        }
        else if ((e.target.value == "mandhi")) {
            setOrderFiveItem(e.target.value)
            orderFivePriceBox.textContent = orderFiveQuantity * mandhiPrice ;

            let sumTwo = orderFiveQuantity * mandhiPrice;
            setOrderFivePrice( sumTwo )
        }
        else if ((e.target.value == "pepsi1l")) {
            setOrderFiveItem(e.target.value)
            orderFivePriceBox.textContent = orderFiveQuantity * pepsi1lPrice ;

            let sumTwo = orderFiveQuantity * pepsi1lPrice;
            setOrderFivePrice( sumTwo )
        }
    }

//Function to perform on Order quantity changes
    //Order One quantity
    function orderOneQuantityChanged(e) {
        if (orderOneItem == "burger") {
            setOrderOneQuantity(e.target.value)
            orderOnePriceBox.textContent = e.target.value * burgerPrice ;
                        
            let sumTwo = e.target.value * burgerPrice;
            setOrderOnePrice( sumTwo )
        }
        else if (orderOneItem == "loadedFries") {
            setOrderOneQuantity(e.target.value)
            orderOnePriceBox.textContent = e.target.value * loadedFriesPrice ;
                        
            let sumTwo = e.target.value * loadedFriesPrice;
            setOrderOnePrice( sumTwo )
        }
        else if (orderOneItem == "shawaya") {
            setOrderOneQuantity(e.target.value)
            orderOnePriceBox.textContent = e.target.value * shawayaPrice ;
                        
            let sumTwo = e.target.value * shawayaPrice;
            setOrderOnePrice( sumTwo )
        }
        else if (orderOneItem == "mandhi") {
            setOrderOneQuantity(e.target.value)
            orderOnePriceBox.textContent = e.target.value * mandhiPrice ;
                        
            let sumTwo = e.target.value * mandhiPrice;
            setOrderOnePrice( sumTwo )
        }
        else if (orderOneItem == "pepsi1l") {
            setOrderOneQuantity(e.target.value)
            orderOnePriceBox.textContent = e.target.value * pepsi1lPrice ;
                        
            let sumTwo = e.target.value * pepsi1lPrice;
            setOrderOnePrice( sumTwo )
        }
    }
    //Order Two quantity
    function orderTwoQuantityChanged(e) {
        if (orderTwoItem == "burger") {
            setOrderTwoQuantity(e.target.value)
            orderTwoPriceBox.textContent = e.target.value * burgerPrice ;
                        
            let sumTwo = e.target.value * burgerPrice;
            setOrderTwoPrice( sumTwo )
        }
        else if (orderTwoItem == "loadedFries") {
            setOrderTwoQuantity(e.target.value)
            orderTwoPriceBox.textContent = e.target.value * loadedFriesPrice ;
                        
            let sumTwo = e.target.value * loadedFriesPrice;
            setOrderTwoPrice( sumTwo )
        }
        else if (orderTwoItem == "shawaya") {
            setOrderTwoQuantity(e.target.value)
            orderTwoPriceBox.textContent = e.target.value * shawayaPrice ;
                        
            let sumTwo = e.target.value * shawayaPrice;
            setOrderTwoPrice( sumTwo )
        }
        else if (orderTwoItem == "mandhi") {
            setOrderTwoQuantity(e.target.value)
            orderTwoPriceBox.textContent = e.target.value * mandhiPrice ;
                        
            let sumTwo = e.target.value * mandhiPrice;
            setOrderTwoPrice( sumTwo )
        }
        else if (orderTwoItem == "pepsi1l") {
            setOrderTwoQuantity(e.target.value)
            orderTwoPriceBox.textContent = e.target.value * pepsi1lPrice ;
                        
            let sumTwo = e.target.value * pepsi1lPrice;
            setOrderTwoPrice( sumTwo )
        }
    }
    //Order Three quantity
    function orderThreeQuantityChanged(e) {
        if (orderThreeItem == "burger") {
            setOrderThreeQuantity(e.target.value)
            orderThreePriceBox.textContent = e.target.value * burgerPrice ;
                        
            let sumTwo = e.target.value * burgerPrice;
            setOrderThreePrice( sumTwo )
        }
        else if (orderThreeItem == "loadedFries") {
            setOrderThreeQuantity(e.target.value)
            orderThreePriceBox.textContent = e.target.value * loadedFriesPrice ;
                        
            let sumTwo = e.target.value * loadedFriesPrice;
            setOrderThreePrice( sumTwo )
        }
        else if (orderThreeItem == "shawaya") {
            setOrderThreeQuantity(e.target.value)
            orderThreePriceBox.textContent = e.target.value * shawayaPrice ;
                        
            let sumTwo = e.target.value * shawayaPrice;
            setOrderThreePrice( sumTwo )
        }
        else if (orderThreeItem == "mandhi") {
            setOrderThreeQuantity(e.target.value)
            orderThreePriceBox.textContent = e.target.value * mandhiPrice ;
                        
            let sumTwo = e.target.value * mandhiPrice;
            setOrderThreePrice( sumTwo )
        }
        else if (orderThreeItem == "pepsi1l") {
            setOrderThreeQuantity(e.target.value)
            orderThreePriceBox.textContent = e.target.value * pepsi1lPrice ;
                        
            let sumTwo = e.target.value * pepsi1lPrice;
            setOrderThreePrice( sumTwo )
        }
    }
    //Order Four quantity
    function orderFourQuantityChanged(e) {
        if (orderFourItem == "burger") {
            setOrderFourQuantity(e.target.value)
            orderFourPriceBox.textContent = e.target.value * burgerPrice ;
                        
            let sumTwo = e.target.value * burgerPrice;
            setOrderFourPrice( sumTwo )
        }
        else if (orderFourItem == "loadedFries") {
            setOrderFourQuantity(e.target.value)
            orderFourPriceBox.textContent = e.target.value * loadedFriesPrice ;
                        
            let sumTwo = e.target.value * loadedFriesPrice;
            setOrderFourPrice( sumTwo )
        }
        else if (orderFourItem == "shawaya") {
            setOrderFourQuantity(e.target.value)
            orderFourPriceBox.textContent = e.target.value * shawayaPrice ;
                        
            let sumTwo = e.target.value * shawayaPrice;
            setOrderFourPrice( sumTwo )
        }
        else if (orderFourItem == "mandhi") {
            setOrderFourQuantity(e.target.value)
            orderFourPriceBox.textContent = e.target.value * mandhiPrice ;
                        
            let sumTwo = e.target.value * mandhiPrice;
            setOrderFourPrice( sumTwo )
        }
        else if (orderFourItem == "pepsi1l") {
            setOrderFourQuantity(e.target.value)
            orderFourPriceBox.textContent = e.target.value * pepsi1lPrice ;
                        
            let sumTwo = e.target.value * pepsi1lPrice;
            setOrderFourPrice( sumTwo )
        }
    }
    //Order Five quantity
    function orderFiveQuantityChanged(e) {
        if (orderFiveItem == "burger") {
            setOrderFiveQuantity(e.target.value)
            orderFivePriceBox.textContent = e.target.value * burgerPrice ;
                        
            let sumTwo = e.target.value * burgerPrice;
            setOrderFivePrice( sumTwo )
        }
        else if (orderFiveItem == "loadedFries") {
            setOrderFiveQuantity(e.target.value)
            orderFivePriceBox.textContent = e.target.value * loadedFriesPrice ;
                        
            let sumTwo = e.target.value * loadedFriesPrice;
            setOrderFivePrice( sumTwo )
        }
        else if (orderFiveItem == "shawaya") {
            setOrderFiveQuantity(e.target.value)
            orderFivePriceBox.textContent = e.target.value * shawayaPrice ;
                        
            let sumTwo = e.target.value * shawayaPrice;
            setOrderFivePrice( sumTwo )
        }
        else if (orderFiveItem == "mandhi") {
            setOrderFiveQuantity(e.target.value)
            orderFivePriceBox.textContent = e.target.value * mandhiPrice ;
                        
            let sumTwo = e.target.value * mandhiPrice;
            setOrderFivePrice( sumTwo )
        }
        else if (orderFiveItem == "pepsi1l") {
            setOrderFiveQuantity(e.target.value)
            orderFivePriceBox.textContent = e.target.value * pepsi1lPrice ;
                        
            let sumTwo = e.target.value * pepsi1lPrice;
            setOrderFivePrice( sumTwo )
        }
    }

//Function to perform on Order small quantity changes
    //Order One small quantity
    function orderOneSmallQuantityChanged(e) {
        if (orderOneItem == "burger") {
            setOrderOneSmallQuantity(e.target.value)
            let sum = orderOneQuantity + e.target.value;
            orderOnePriceBox.textContent = sum * burgerPrice ;
                                    
            let sumTwo = sum * burgerPrice;
            setOrderOnePrice( sumTwo )
        }
        else if (orderOneItem == "loadedFries") {
            setOrderOneSmallQuantity(e.target.value)
            let sum = orderOneQuantity + e.target.value;
            orderOnePriceBox.textContent = sum * loadedFriesPrice ;
                                    
            let sumTwo = sum * loadedFriesPrice;
            setOrderOnePrice( sumTwo )
        }
        else if (orderOneItem == "shawaya") {
            setOrderOneSmallQuantity(e.target.value)
            let sum = orderOneQuantity + e.target.value;
            orderOnePriceBox.textContent = sum * shawayaPrice ;
                                    
            let sumTwo = sum * shawayaPrice;
            setOrderOnePrice( sumTwo )
        }
        else if (orderOneItem == "mandhi") {
            setOrderOneSmallQuantity(e.target.value)
            let sum = orderOneQuantity + e.target.value;
            orderOnePriceBox.textContent = sum * mandhiPrice ;
                                    
            let sumTwo = sum * mandhiPrice;
            setOrderOnePrice( sumTwo )
        }
        else if (orderOneItem == "pepsi1l") {
            setOrderOneSmallQuantity(e.target.value)
            let sum = orderOneQuantity + e.target.value;
            orderOnePriceBox.textContent = sum * pepsi1lPrice ;
                                    
            let sumTwo = sum * pepsi1lPrice;
            setOrderOnePrice( sumTwo )
        }
    }
    //Order Two small quantity
    function orderTwoSmallQuantityChanged(e) {
        if (orderTwoItem == "burger") {
            setOrderTwoSmallQuantity(e.target.value)
            let sum = orderTwoQuantity + e.target.value;
            orderTwoPriceBox.textContent = sum * burgerPrice ;
                                    
            let sumTwo = sum * burgerPrice;
            setOrderTwoPrice( sumTwo )
        }
        else if (orderTwoItem == "loadedFries") {
            setOrderTwoSmallQuantity(e.target.value)
            let sum = orderTwoQuantity + e.target.value;
            orderTwoPriceBox.textContent = sum * loadedFriesPrice ;
                                    
            let sumTwo = sum * loadedFriesPrice;
            setOrderTwoPrice( sumTwo )
        }
        else if (orderTwoItem == "shawaya") {
            setOrderTwoSmallQuantity(e.target.value)
            let sum = orderTwoQuantity + e.target.value;
            orderTwoPriceBox.textContent = sum * shawayaPrice ;
                                    
            let sumTwo = sum * shawayaPrice;
            setOrderTwoPrice( sumTwo )
        }
        else if (orderTwoItem == "mandhi") {
            setOrderTwoSmallQuantity(e.target.value)
            let sum = orderTwoQuantity + e.target.value;
            orderTwoPriceBox.textContent = sum * mandhiPrice ;
                                    
            let sumTwo = sum * mandhiPrice;
            setOrderTwoPrice( sumTwo )
        }
        else if (orderTwoItem == "pepsi1l") {
            setOrderTwoSmallQuantity(e.target.value)
            let sum = orderTwoQuantity + e.target.value;
            orderTwoPriceBox.textContent = sum * pepsi1lPrice ;
                                    
            let sumTwo = sum * pepsi1lPrice;
            setOrderTwoPrice( sumTwo )
        }
    }
    //Order Three small quantity
    function orderThreeSmallQuantityChanged(e) {
        if (orderThreeItem == "burger") {
            setOrderThreeSmallQuantity(e.target.value)
            let sum = orderThreeQuantity + e.target.value;
            orderThreePriceBox.textContent = sum * burgerPrice ;
                                    
            let sumTwo = sum * burgerPrice;
            setOrderThreePrice( sumTwo )
        }
        else if (orderThreeItem == "loadedFries") {
            setOrderThreeSmallQuantity(e.target.value)
            let sum = orderThreeQuantity + e.target.value;
            orderThreePriceBox.textContent = sum * loadedFriesPrice ;
                                    
            let sumTwo = sum * loadedFriesPrice;
            setOrderThreePrice( sumTwo )
        }
        else if (orderThreeItem == "shawaya") {
            setOrderThreeSmallQuantity(e.target.value)
            let sum = orderThreeQuantity + e.target.value;
            orderThreePriceBox.textContent = sum * shawayaPrice ;
                                    
            let sumTwo = sum * shawayaPrice;
            setOrderThreePrice( sumTwo )
        }
        else if (orderThreeItem == "mandhi") {
            setOrderThreeSmallQuantity(e.target.value)
            let sum = orderThreeQuantity + e.target.value;
            orderThreePriceBox.textContent = sum * mandhiPrice ;
                                    
            let sumTwo = sum * mandhiPrice;
            setOrderThreePrice( sumTwo )
        }
        else if (orderThreeItem == "pepsi1l") {
            setOrderThreeSmallQuantity(e.target.value)
            let sum = orderThreeQuantity + e.target.value;
            orderThreePriceBox.textContent = sum * pepsi1lPrice ;
                                    
            let sumTwo = sum * pepsi1lPrice;
            setOrderThreePrice( sumTwo )
        }
    }
    //Order Four small quantity
    function orderFourSmallQuantityChanged(e) {
        if (orderFourItem == "burger") {
            setOrderFourSmallQuantity(e.target.value)
            let sum = orderFourQuantity + e.target.value;
            orderFourPriceBox.textContent = sum * burgerPrice ;
                                    
            let sumTwo = sum * burgerPrice;
            setOrderFourPrice( sumTwo )
        }
        else if (orderFourItem == "loadedFries") {
            setOrderFourSmallQuantity(e.target.value)
            let sum = orderFourQuantity + e.target.value;
            orderFourPriceBox.textContent = sum * loadedFriesPrice ;
                                    
            let sumTwo = sum * loadedFriesPrice;
            setOrderFourPrice( sumTwo )
        }
        else if (orderFourItem == "shawaya") {
            setOrderFourSmallQuantity(e.target.value)
            let sum = orderFourQuantity + e.target.value;
            orderFourPriceBox.textContent = sum * shawayaPrice ;
                                    
            let sumTwo = sum * shawayaPrice;
            setOrderFourPrice( sumTwo )
        }
        else if (orderFourItem == "mandhi") {
            setOrderFourSmallQuantity(e.target.value)
            let sum = orderFourQuantity + e.target.value;
            orderFourPriceBox.textContent = sum * mandhiPrice ;
                                    
            let sumTwo = sum * mandhiPrice;
            setOrderFourPrice( sumTwo )
        }
        else if (orderFourItem == "pepsi1l") {
            setOrderFourSmallQuantity(e.target.value)
            let sum = orderFourQuantity + e.target.value;
            orderFourPriceBox.textContent = sum * pepsi1lPrice ;
                                    
            let sumTwo = sum * pepsi1lPrice;
            setOrderFourPrice( sumTwo )
        }
    }
    //Order Five small quantity
    function orderFiveSmallQuantityChanged(e) {
        if (orderFiveItem == "burger") {
            setOrderFiveSmallQuantity(e.target.value)
            let sum = orderFiveQuantity + e.target.value;
            orderFivePriceBox.textContent = sum * burgerPrice ;
                                    
            let sumTwo = sum * burgerPrice;
            setOrderFivePrice( sumTwo )
        }
        else if (orderFiveItem == "loadedFries") {
            setOrderFiveSmallQuantity(e.target.value)
            let sum = orderFiveQuantity + e.target.value;
            orderFivePriceBox.textContent = sum * loadedFriesPrice ;
                                    
            let sumTwo = sum * loadedFriesPrice;
            setOrderFivePrice( sumTwo )
        }
        else if (orderFiveItem == "shawaya") {
            setOrderFiveSmallQuantity(e.target.value)
            let sum = orderFiveQuantity + e.target.value;
            orderFivePriceBox.textContent = sum * shawayaPrice ;
                                    
            let sumTwo = sum * shawayaPrice;
            setOrderFivePrice( sumTwo )
        }
        else if (orderFiveItem == "mandhi") {
            setOrderFiveSmallQuantity(e.target.value)
            let sum = orderFiveQuantity + e.target.value;
            orderFivePriceBox.textContent = sum * mandhiPrice ;
                                    
            let sumTwo = sum * mandhiPrice;
            setOrderFivePrice( sumTwo )
        }
        else if (orderFiveItem == "pepsi1l") {
            setOrderFiveSmallQuantity(e.target.value)
            let sum = orderFiveQuantity + e.target.value;
            orderFivePriceBox.textContent = sum * pepsi1lPrice ;
                                    
            let sumTwo = sum * pepsi1lPrice;
            setOrderFivePrice( sumTwo )
        }
    }

    return(
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
                        {/* <input type="checkbox" className="ml-[50px] mr-[7.5px] "/>Manual */}

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
                                    <option value={"0"}> 0 </option>
                                    <option value={"1"}> 1 </option>
                                    <option value={"2"}> 2 </option>
                                    <option value={"3"}> 3 </option>
                                    <option value={"4"}> 4 </option>
                                    <option value={"5"}> 5 </option>
                                    <option value={"6"}> 6 </option>
                                    <option value={"7"}> 7 </option>
                                    <option value={"8"}> 8 </option>
                                    <option value={"9"}> 9 </option>
                                    <option value={"10"}> 10 </option>
                            </select>

                            <select
                                className="border border-black px-[5px] py-[2px] rounded min-w-[100px]"
                                id="small-quantity-order-one" 
                                name="small-quantity-order-one"
                                value={ orderOneSmallQuantity }
                                onChange={ orderOneSmallQuantityChanged }
                            >
                                    <option value={"0"}> Null </option>
                                    <option value={".25"}> Quarter (1/4) </option>
                                    <option value={".5"}> Half (1/2) </option>
                                    <option value={".75"}> Three quarter (3/4)  </option>
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
                                onChange={ orderTwoItemChanged }
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
                                id="quantity-order-two" 
                                name="quantity-order-two"
                                value={ orderTwoQuantity }
                                onChange={ orderTwoQuantityChanged }
                            >
                                    <option value={"0"}> 0 </option>
                                    <option value={"1"}> 1 </option>
                                    <option value={"2"}> 2 </option>
                                    <option value={"3"}> 3 </option>
                                    <option value={"4"}> 4 </option>
                                    <option value={"5"}> 5 </option>
                                    <option value={"6"}> 6 </option>
                                    <option value={"7"}> 7 </option>
                                    <option value={"8"}> 8 </option>
                                    <option value={"9"}> 9 </option>
                                    <option value={"10"}> 10 </option>
                            </select>

                            <select
                                className="border border-black px-[5px] py-[2px] rounded min-w-[100px]"
                                id="small-quantity-order-two" 
                                name="small-quantity-order-two"
                                value={ orderTwoSmallQuantity }
                                onChange={ orderTwoSmallQuantityChanged }
                            >
                                    <option value={"0"}> Null </option>
                                    <option value={".25"}> Quarter (1/4) </option>
                                    <option value={".5"}> Half (1/2) </option>
                                    <option value={".75"}> Three quarter (3/4)  </option>
                            </select>

                            <div className="border border-black px-[5px] py-[2px] rounded">
                                <p 
                                    id="order-two-price-box"
                                    className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                >
                                    
                                </p>
                            </div>
                        </div>

                        <div id="div-order-Three" className="flex gap-[10px] mx-[20px] my-[20px]">
                            Order #3 : <select
                                className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                id='order-three-item'
                                name="order-three-item"
                                value={ orderThreeItem }
                                onChange={ orderThreeItemChanged }
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
                                id="quantity-order-three" 
                                name="quantity-order-three"
                                value={ orderThreeQuantity }
                                onChange={ orderThreeQuantityChanged }
                            >
                                    <option value={"0"}> 0 </option>
                                    <option value={"1"}> 1 </option>
                                    <option value={"2"}> 2 </option>
                                    <option value={"3"}> 3 </option>
                                    <option value={"4"}> 4 </option>
                                    <option value={"5"}> 5 </option>
                                    <option value={"6"}> 6 </option>
                                    <option value={"7"}> 7 </option>
                                    <option value={"8"}> 8 </option>
                                    <option value={"9"}> 9 </option>
                                    <option value={"10"}> 10 </option>
                            </select>

                            <select
                                className="border border-black px-[5px] py-[2px] rounded min-w-[100px]"
                                id="small-quantity-order-three" 
                                name="small-quantity-order-three"
                                value={ orderThreeSmallQuantity }
                                onChange={ orderThreeSmallQuantityChanged }
                            >
                                    <option value={"0"}> Null </option>
                                    <option value={".25"}> Quarter (1/4) </option>
                                    <option value={".5"}> Half (1/2) </option>
                                    <option value={".75"}> Three quarter (3/4)  </option>
                            </select>

                            <div className="border border-black px-[5px] py-[2px] rounded">
                                <p 
                                    id="order-three-price-box"
                                    className="totalPrice min-w-[50px] px-[5px] p-[2px] "
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
                                onChange={ orderFourItemChanged }
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
                                id="quantity-order-four" 
                                name="quantity-order-four"
                                value={ orderFourQuantity }
                                onChange={ orderFourQuantityChanged }
                            >
                                    <option value={"0"}> 0 </option>
                                    <option value={"1"}> 1 </option>
                                    <option value={"2"}> 2 </option>
                                    <option value={"3"}> 3 </option>
                                    <option value={"4"}> 4 </option>
                                    <option value={"5"}> 5 </option>
                                    <option value={"6"}> 6 </option>
                                    <option value={"7"}> 7 </option>
                                    <option value={"8"}> 8 </option>
                                    <option value={"9"}> 9 </option>
                                    <option value={"10"}> 10 </option>
                            </select>

                            <select
                                className="border border-black px-[5px] py-[2px] rounded min-w-[100px]"
                                id="small-quantity-order-four" 
                                name="small-quantity-order-four"
                                value={ orderFourSmallQuantity }
                                onChange={ orderFourSmallQuantityChanged }
                            >
                                    <option value={"0"}> Null </option>
                                    <option value={".25"}> Quarter (1/4) </option>
                                    <option value={".5"}> Half (1/2) </option>
                                    <option value={".75"}> Three quarter (3/4)  </option>
                            </select>

                            <div className="border border-black px-[5px] py-[2px] rounded">
                                <p 
                                    id="order-four-price-box"
                                    className="totalPrice min-w-[50px] px-[5px] p-[2px] "
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
                                onChange={ orderFiveItemChanged }
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
                                id="quantity-order-five" 
                                name="quantity-order-five"
                                value={ orderFiveQuantity }
                                onChange={ orderFiveQuantityChanged }
                            >
                                    <option value={"0"}> 0 </option>
                                    <option value={"1"}> 1 </option>
                                    <option value={"2"}> 2 </option>
                                    <option value={"3"}> 3 </option>
                                    <option value={"4"}> 4 </option>
                                    <option value={"5"}> 5 </option>
                                    <option value={"6"}> 6 </option>
                                    <option value={"7"}> 7 </option>
                                    <option value={"8"}> 8 </option>
                                    <option value={"9"}> 9 </option>
                                    <option value={"10"}> 10 </option>
                            </select>

                            <select
                                className="border border-black px-[5px] py-[2px] rounded min-w-[100px]"
                                id="small-quantity-order-five" 
                                name="small-quantity-order-five"
                                value={ orderFiveSmallQuantity }
                                onChange={ orderFiveSmallQuantityChanged }
                            >
                                    <option value={"0"}> Null </option>
                                    <option value={".25"}> Quarter (1/4) </option>
                                    <option value={".5"}> Half (1/2) </option>
                                    <option value={".75"}> Three quarter (3/4)  </option>
                            </select>

                            <div className="border border-black px-[5px] py-[2px] rounded">
                                <p 
                                    id="order-five-price-box"
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
    )
}