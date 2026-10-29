import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function OrderTaking({ addOrderSubmit }) {

//Hides button until all required field is filled
    const inputs = document.querySelectorAll("input");
    const submits = document.querySelectorAll("select");
    const textarea = document.querySelectorAll("textarea");

    useEffect(() => {
        const confirmOrderButton = document.getElementById("confirm-order");

        ( 
            (!customerName == "") && 
            (!customerPhone == "") &&
            (!customerAddress == "")
        ) ? confirmOrderButton.style.display = "block" : confirmOrderButton.style.display = "none";
    }, [ inputs, submits, textarea])

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

    const [orderSixItem, setOrderSixItem] = useState("");
    const [orderSixQuantity, setOrderSixQuantity] = useState("1");
    const [orderSixSmallQuantity, setOrderSixSmallQuantity] = useState("0");
    const [orderSixPrice, setOrderSixPrice] = useState("")

    const [orderSevenItem, setOrderSevenItem] = useState("");
    const [orderSevenQuantity, setOrderSevenQuantity] = useState("1");
    const [orderSevenSmallQuantity, setOrderSevenSmallQuantity] = useState("0");
    const [orderSevenPrice, setOrderSevenPrice] = useState("")

    const [orderEightItem, setOrderEightItem] = useState("");
    const [orderEightQuantity, setOrderEightQuantity] = useState("1");
    const [orderEightSmallQuantity, setOrderEightSmallQuantity] = useState("0");
    const [orderEightPrice, setOrderEightPrice] = useState("")

    const [orderNineItem, setOrderNineItem] = useState("");
    const [orderNineQuantity, setOrderNineQuantity] = useState("1");
    const [orderNineSmallQuantity, setOrderNineSmallQuantity] = useState("0");
    const [orderNinePrice, setOrderNinePrice] = useState("")

    const [orderTenItem, setOrderTenItem] = useState("");
    const [orderTenQuantity, setOrderTenQuantity] = useState("1");
    const [orderTenSmallQuantity, setOrderTenSmallQuantity] = useState("0");
    const [orderTenPrice, setOrderTenPrice] = useState("")

//function to reset form after button click
    function resetForm() {
        setCustomerName("");
        setCustomerPhone("");
        setCustomerAddress("");

        setOrderOneItem("");
        setOrderOneQuantity("1");
        setOrderOneSmallQuantity("0");
        setOrderOnePrice("")

        setOrderTwoItem("");
        setOrderTwoQuantity("1");
        setOrderTwoSmallQuantity("0");
        setOrderTwoPrice("")

        setOrderThreeItem("");
        setOrderThreeQuantity("1");
        setOrderThreeSmallQuantity("0");
        setOrderThreePrice("")

        setOrderFourItem("");
        setOrderFourQuantity("1");
        setOrderFourSmallQuantity("0");
        setOrderFourPrice("")

        setOrderFiveItem("");
        setOrderFiveQuantity("1");
        setOrderFiveSmallQuantity("0");
        setOrderFivePrice("")

        setOrderSixItem("");
        setOrderSixQuantity("1");
        setOrderSixSmallQuantity("0");
        setOrderSixPrice("")

        setOrderSevenItem("");
        setOrderSevenQuantity("1");
        setOrderSevenSmallQuantity("0");
        setOrderSevenPrice("")

        setOrderEightItem("");
        setOrderEightQuantity("1");
        setOrderEightSmallQuantity("0");
        setOrderEightPrice("")

        setOrderNineItem("");
        setOrderNineQuantity("1");
        setOrderNineSmallQuantity("0");
        setOrderNinePrice("")

        setOrderTenItem("");
        setOrderTenQuantity("1");
        setOrderTenSmallQuantity("0");
        setOrderTenPrice("")
    }

//For setting price upon deciding order 
    useEffect(() => {
        orderOnePriceBox = document.getElementById("order-one-price-box");
        orderTwoPriceBox = document.getElementById("order-two-price-box");
        orderThreePriceBox = document.getElementById("order-three-price-box");
        orderFourPriceBox = document.getElementById("order-four-price-box");
        orderFivePriceBox = document.getElementById("order-five-price-box");
        orderSixPriceBox = document.getElementById("order-six-price-box");
        orderSevenPriceBox = document.getElementById("order-seven-price-box");
        orderEightPriceBox = document.getElementById("order-eight-price-box");
        orderNinePriceBox = document.getElementById("order-nine-price-box");
        orderTenPriceBox = document.getElementById("order-ten-price-box");
    }, [])

//For setting price upon deciding quantity of order 
    let orderOnePriceBox = document.getElementById("order-one-price-box");
    let orderTwoPriceBox = document.getElementById("order-two-price-box");
    let orderThreePriceBox = document.getElementById("order-three-price-box");
    let orderFourPriceBox = document.getElementById("order-four-price-box");
    let orderFivePriceBox = document.getElementById("order-five-price-box");
    let orderSixPriceBox = document.getElementById("order-six-price-box");
    let orderSevenPriceBox = document.getElementById("order-seven-price-box");
    let orderEightPriceBox = document.getElementById("order-eight-price-box");
    let orderNinePriceBox = document.getElementById("order-nine-price-box");
    let orderTenPriceBox = document.getElementById("order-ten-price-box");

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
        const numberedOrderSixQuantity = Number(orderSixQuantity) + Number(orderSixSmallQuantity);
        const numberedOrderSevenQuantity = Number(orderSevenQuantity) + Number(orderSevenSmallQuantity);
        const numberedOrderEightQuantity = Number(orderEightQuantity) + Number(orderEightSmallQuantity);
        const numberedOrderNineQuantity = Number(orderNineQuantity) + Number(orderNineSmallQuantity);
        const numberedOrderTenQuantity = Number(orderTenQuantity) + Number(orderTenSmallQuantity);

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
            orderSixItem,
            orderSixQuantity: numberedOrderSixQuantity,
            orderSixPrice,
            orderSevenItem,
            orderSevenQuantity: numberedOrderSevenQuantity,
            orderSevenPrice,
            orderEightItem,
            orderEightQuantity: numberedOrderEightQuantity,
            orderEightPrice,
            orderNineItem,
            orderNineQuantity: numberedOrderNineQuantity,
            orderNinePrice,
            orderTenItem,
            orderTenQuantity: numberedOrderTenQuantity,
            orderTenPrice,
        }

        addOrderSubmit(newOrder)
        const orderMenu = document.getElementById("order-menu")
        orderMenu.classList.toggle("hidden")
        resetForm()
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
    //Order Six item
    function orderSixItemChanged(e) {
        if ((e.target.value == "burger")) {
            setOrderSixItem(e.target.value)
            orderSixPriceBox.textContent = orderSixQuantity * burgerPrice ;

            let sumTwo = orderSixQuantity * burgerPrice;
            setOrderSixPrice( sumTwo )
        }
        else if ((e.target.value == "loadedFries")) {
            setOrderSixItem(e.target.value)
            orderSixPriceBox.textContent = orderSixQuantity * loadedFriesPrice ;

            let sumTwo = orderSixQuantity * loadedFriesPrice;
            setOrderSixPrice( sumTwo )
        }
        else if ((e.target.value == "shawaya")) {
            setOrderSixItem(e.target.value)
            orderSixPriceBox.textContent = orderSixQuantity * shawayaPrice ;

            let sumTwo = orderSixQuantity * shawayaPrice;
            setOrderSixPrice( sumTwo )
        }
        else if ((e.target.value == "mandhi")) {
            setOrderSixItem(e.target.value)
            orderSixPriceBox.textContent = orderSixQuantity * mandhiPrice ;

            let sumTwo = orderSixQuantity * mandhiPrice;
            setOrderSixPrice( sumTwo )
        }
        else if ((e.target.value == "pepsi1l")) {
            setOrderSixItem(e.target.value)
            orderSixPriceBox.textContent = orderSixQuantity * pepsi1lPrice ;

            let sumTwo = orderSixQuantity * pepsi1lPrice;
            setOrderSixPrice( sumTwo )
        }
    }
    //Order Seven item
    function orderSevenItemChanged(e) {
        if ((e.target.value == "burger")) {
            setOrderSevenItem(e.target.value)
            orderSevenPriceBox.textContent = orderSevenQuantity * burgerPrice ;

            let sumTwo = orderSevenQuantity * burgerPrice;
            setOrderSevenPrice( sumTwo )
        }
        else if ((e.target.value == "loadedFries")) {
            setOrderSevenItem(e.target.value)
            orderSevenPriceBox.textContent = orderSevenQuantity * loadedFriesPrice ;

            let sumTwo = orderSevenQuantity * loadedFriesPrice;
            setOrderSevenPrice( sumTwo )
        }
        else if ((e.target.value == "shawaya")) {
            setOrderSevenItem(e.target.value)
            orderSevenPriceBox.textContent = orderSevenQuantity * shawayaPrice ;

            let sumTwo = orderSevenQuantity * shawayaPrice;
            setOrderSevenPrice( sumTwo )
        }
        else if ((e.target.value == "mandhi")) {
            setOrderSevenItem(e.target.value)
            orderSevenPriceBox.textContent = orderSevenQuantity * mandhiPrice ;

            let sumTwo = orderSevenQuantity * mandhiPrice;
            setOrderSevenPrice( sumTwo )
        }
        else if ((e.target.value == "pepsi1l")) {
            setOrderSevenItem(e.target.value)
            orderSevenPriceBox.textContent = orderSevenQuantity * pepsi1lPrice ;

            let sumTwo = orderSevenQuantity * pepsi1lPrice;
            setOrderSevenPrice( sumTwo )
        }
    }
    //Order Eight item
    function orderEightItemChanged(e) {
        if ((e.target.value == "burger")) {
            setOrderEightItem(e.target.value)
            orderEightPriceBox.textContent = orderEightQuantity * burgerPrice ;

            let sumTwo = orderEightQuantity * burgerPrice;
            setOrderEightPrice( sumTwo )
        }
        else if ((e.target.value == "loadedFries")) {
            setOrderEightItem(e.target.value)
            orderEightPriceBox.textContent = orderEightQuantity * loadedFriesPrice ;

            let sumTwo = orderEightQuantity * loadedFriesPrice;
            setOrderEightPrice( sumTwo )
        }
        else if ((e.target.value == "shawaya")) {
            setOrderEightItem(e.target.value)
            orderEightPriceBox.textContent = orderEightQuantity * shawayaPrice ;

            let sumTwo = orderEightQuantity * shawayaPrice;
            setOrderEightPrice( sumTwo )
        }
        else if ((e.target.value == "mandhi")) {
            setOrderEightItem(e.target.value)
            orderEightPriceBox.textContent = orderEightQuantity * mandhiPrice ;

            let sumTwo = orderEightQuantity * mandhiPrice;
            setOrderEightPrice( sumTwo )
        }
        else if ((e.target.value == "pepsi1l")) {
            setOrderEightItem(e.target.value)
            orderEightPriceBox.textContent = orderEightQuantity * pepsi1lPrice ;

            let sumTwo = orderEightQuantity * pepsi1lPrice;
            setOrderEightPrice( sumTwo )
        }
    }
    //Order Nine item
    function orderNineItemChanged(e) {
        if ((e.target.value == "burger")) {
            setOrderNineItem(e.target.value)
            orderNinePriceBox.textContent = orderNineQuantity * burgerPrice ;

            let sumTwo = orderNineQuantity * burgerPrice;
            setOrderNinePrice( sumTwo )
        }
        else if ((e.target.value == "loadedFries")) {
            setOrderNineItem(e.target.value)
            orderNinePriceBox.textContent = orderNineQuantity * loadedFriesPrice ;

            let sumTwo = orderNineQuantity * loadedFriesPrice;
            setOrderNinePrice( sumTwo )
        }
        else if ((e.target.value == "shawaya")) {
            setOrderNineItem(e.target.value)
            orderNinePriceBox.textContent = orderNineQuantity * shawayaPrice ;

            let sumTwo = orderNineQuantity * shawayaPrice;
            setOrderNinePrice( sumTwo )
        }
        else if ((e.target.value == "mandhi")) {
            setOrderNineItem(e.target.value)
            orderNinePriceBox.textContent = orderNineQuantity * mandhiPrice ;

            let sumTwo = orderNineQuantity * mandhiPrice;
            setOrderNinePrice( sumTwo )
        }
        else if ((e.target.value == "pepsi1l")) {
            setOrderNineItem(e.target.value)
            orderNinePriceBox.textContent = orderNineQuantity * pepsi1lPrice ;

            let sumTwo = orderNineQuantity * pepsi1lPrice;
            setOrderNinePrice( sumTwo )
        }
    }
    //Order Ten item
    function orderTenItemChanged(e) {
        if ((e.target.value == "burger")) {
            setOrderTenItem(e.target.value)
            orderTenPriceBox.textContent = orderTenQuantity * burgerPrice ;

            let sumTwo = orderTenQuantity * burgerPrice;
            setOrderTenPrice( sumTwo )
        }
        else if ((e.target.value == "loadedFries")) {
            setOrderTenItem(e.target.value)
            orderTenPriceBox.textContent = orderTenQuantity * loadedFriesPrice ;

            let sumTwo = orderTenQuantity * loadedFriesPrice;
            setOrderTenPrice( sumTwo )
        }
        else if ((e.target.value == "shawaya")) {
            setOrderTenItem(e.target.value)
            orderTenPriceBox.textContent = orderTenQuantity * shawayaPrice ;

            let sumTwo = orderTenQuantity * shawayaPrice;
            setOrderTenPrice( sumTwo )
        }
        else if ((e.target.value == "mandhi")) {
            setOrderTenItem(e.target.value)
            orderTenPriceBox.textContent = orderTenQuantity * mandhiPrice ;

            let sumTwo = orderTenQuantity * mandhiPrice;
            setOrderTenPrice( sumTwo )
        }
        else if ((e.target.value == "pepsi1l")) {
            setOrderTenItem(e.target.value)
            orderTenPriceBox.textContent = orderTenQuantity * pepsi1lPrice ;

            let sumTwo = orderTenQuantity * pepsi1lPrice;
            setOrderTenPrice( sumTwo )
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
    //Order Six quantity
    function orderSixQuantityChanged(e) {
        if (orderSixItem == "burger") {
            setOrderSixQuantity(e.target.value)
            orderSixPriceBox.textContent = e.target.value * burgerPrice ;
                        
            let sumTwo = e.target.value * burgerPrice;
            setOrderSixPrice( sumTwo )
        }
        else if (orderSixItem == "loadedFries") {
            setOrderSixQuantity(e.target.value)
            orderSixPriceBox.textContent = e.target.value * loadedFriesPrice ;
                        
            let sumTwo = e.target.value * loadedFriesPrice;
            setOrderSixPrice( sumTwo )
        }
        else if (orderSixItem == "shawaya") {
            setOrderSixQuantity(e.target.value)
            orderSixPriceBox.textContent = e.target.value * shawayaPrice ;
                        
            let sumTwo = e.target.value * shawayaPrice;
            setOrderSixPrice( sumTwo )
        }
        else if (orderSixItem == "mandhi") {
            setOrderSixQuantity(e.target.value)
            orderSixPriceBox.textContent = e.target.value * mandhiPrice ;
                        
            let sumTwo = e.target.value * mandhiPrice;
            setOrderSixPrice( sumTwo )
        }
        else if (orderSixItem == "pepsi1l") {
            setOrderSixQuantity(e.target.value)
            orderSixPriceBox.textContent = e.target.value * pepsi1lPrice ;
                        
            let sumTwo = e.target.value * pepsi1lPrice;
            setOrderSixPrice( sumTwo )
        }
    }
    //Order Seven quantity
    function orderSevenQuantityChanged(e) {
        if (orderSevenItem == "burger") {
            setOrderSevenQuantity(e.target.value)
            orderSevenPriceBox.textContent = e.target.value * burgerPrice ;
                        
            let sumTwo = e.target.value * burgerPrice;
            setOrderSevenPrice( sumTwo )
        }
        else if (orderSevenItem == "loadedFries") {
            setOrderSevenQuantity(e.target.value)
            orderSevenPriceBox.textContent = e.target.value * loadedFriesPrice ;
                        
            let sumTwo = e.target.value * loadedFriesPrice;
            setOrderSevenPrice( sumTwo )
        }
        else if (orderSevenItem == "shawaya") {
            setOrderSevenQuantity(e.target.value)
            orderSevenPriceBox.textContent = e.target.value * shawayaPrice ;
                        
            let sumTwo = e.target.value * shawayaPrice;
            setOrderSevenPrice( sumTwo )
        }
        else if (orderSevenItem == "mandhi") {
            setOrderSevenQuantity(e.target.value)
            orderSevenPriceBox.textContent = e.target.value * mandhiPrice ;
                        
            let sumTwo = e.target.value * mandhiPrice;
            setOrderSevenPrice( sumTwo )
        }
        else if (orderSevenItem == "pepsi1l") {
            setOrderSevenQuantity(e.target.value)
            orderSevenPriceBox.textContent = e.target.value * pepsi1lPrice ;
                        
            let sumTwo = e.target.value * pepsi1lPrice;
            setOrderSevenPrice( sumTwo )
        }
    }
    //Order Eight quantity
    function orderEightQuantityChanged(e) {
        if (orderEightItem == "burger") {
            setOrderEightQuantity(e.target.value)
            orderEightPriceBox.textContent = e.target.value * burgerPrice ;
                        
            let sumTwo = e.target.value * burgerPrice;
            setOrderEightPrice( sumTwo )
        }
        else if (orderEightItem == "loadedFries") {
            setOrderEightQuantity(e.target.value)
            orderEightPriceBox.textContent = e.target.value * loadedFriesPrice ;
                        
            let sumTwo = e.target.value * loadedFriesPrice;
            setOrderEightPrice( sumTwo )
        }
        else if (orderEightItem == "shawaya") {
            setOrderEightQuantity(e.target.value)
            orderEightPriceBox.textContent = e.target.value * shawayaPrice ;
                        
            let sumTwo = e.target.value * shawayaPrice;
            setOrderEightPrice( sumTwo )
        }
        else if (orderEightItem == "mandhi") {
            setOrderEightQuantity(e.target.value)
            orderEightPriceBox.textContent = e.target.value * mandhiPrice ;
                        
            let sumTwo = e.target.value * mandhiPrice;
            setOrderEightPrice( sumTwo )
        }
        else if (orderEightItem == "pepsi1l") {
            setOrderEightQuantity(e.target.value)
            orderEightPriceBox.textContent = e.target.value * pepsi1lPrice ;
                        
            let sumTwo = e.target.value * pepsi1lPrice;
            setOrderEightPrice( sumTwo )
        }
    }
    //Order Nine quantity
    function orderNineQuantityChanged(e) {
        if (orderNineItem == "burger") {
            setOrderNineQuantity(e.target.value)
            orderNinePriceBox.textContent = e.target.value * burgerPrice ;
                        
            let sumTwo = e.target.value * burgerPrice;
            setOrderNinePrice( sumTwo )
        }
        else if (orderNineItem == "loadedFries") {
            setOrderNineQuantity(e.target.value)
            orderNinePriceBox.textContent = e.target.value * loadedFriesPrice ;
                        
            let sumTwo = e.target.value * loadedFriesPrice;
            setOrderNinePrice( sumTwo )
        }
        else if (orderNineItem == "shawaya") {
            setOrderNineQuantity(e.target.value)
            orderNinePriceBox.textContent = e.target.value * shawayaPrice ;
                        
            let sumTwo = e.target.value * shawayaPrice;
            setOrderNinePrice( sumTwo )
        }
        else if (orderNineItem == "mandhi") {
            setOrderNineQuantity(e.target.value)
            orderNinePriceBox.textContent = e.target.value * mandhiPrice ;
                        
            let sumTwo = e.target.value * mandhiPrice;
            setOrderNinePrice( sumTwo )
        }
        else if (orderNineItem == "pepsi1l") {
            setOrderNineQuantity(e.target.value)
            orderNinePriceBox.textContent = e.target.value * pepsi1lPrice ;
                        
            let sumTwo = e.target.value * pepsi1lPrice;
            setOrderNinePrice( sumTwo )
        }
    }
    //Order Ten quantity
    function orderTenQuantityChanged(e) {
        if (orderTenItem == "burger") {
            setOrderTenQuantity(e.target.value)
            orderTenPriceBox.textContent = e.target.value * burgerPrice ;
                        
            let sumTwo = e.target.value * burgerPrice;
            setOrderTenPrice( sumTwo )
        }
        else if (orderTenItem == "loadedFries") {
            setOrderTenQuantity(e.target.value)
            orderTenPriceBox.textContent = e.target.value * loadedFriesPrice ;
                        
            let sumTwo = e.target.value * loadedFriesPrice;
            setOrderTenPrice( sumTwo )
        }
        else if (orderTenItem == "shawaya") {
            setOrderTenQuantity(e.target.value)
            orderTenPriceBox.textContent = e.target.value * shawayaPrice ;
                        
            let sumTwo = e.target.value * shawayaPrice;
            setOrderTenPrice( sumTwo )
        }
        else if (orderTenItem == "mandhi") {
            setOrderTenQuantity(e.target.value)
            orderTenPriceBox.textContent = e.target.value * mandhiPrice ;
                        
            let sumTwo = e.target.value * mandhiPrice;
            setOrderTenPrice( sumTwo )
        }
        else if (orderTenItem == "pepsi1l") {
            setOrderTenQuantity(e.target.value)
            orderTenPriceBox.textContent = e.target.value * pepsi1lPrice ;
                        
            let sumTwo = e.target.value * pepsi1lPrice;
            setOrderTenPrice( sumTwo )
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
    //Order Six small quantity
    function orderSixSmallQuantityChanged(e) {
        if (orderSixItem == "burger") {
            setOrderSixSmallQuantity(e.target.value)
            let sum = orderSixQuantity + e.target.value;
            orderSixPriceBox.textContent = sum * burgerPrice ;
                                    
            let sumTwo = sum * burgerPrice;
            setOrderSixPrice( sumTwo )
        }
        else if (orderSixItem == "loadedFries") {
            setOrderSixSmallQuantity(e.target.value)
            let sum = orderSixQuantity + e.target.value;
            orderSixPriceBox.textContent = sum * loadedFriesPrice ;
                                    
            let sumTwo = sum * loadedFriesPrice;
            setOrderSixPrice( sumTwo )
        }
        else if (orderSixItem == "shawaya") {
            setOrderSixSmallQuantity(e.target.value)
            let sum = orderSixQuantity + e.target.value;
            orderSixPriceBox.textContent = sum * shawayaPrice ;
                                    
            let sumTwo = sum * shawayaPrice;
            setOrderSixPrice( sumTwo )
        }
        else if (orderSixItem == "mandhi") {
            setOrderSixSmallQuantity(e.target.value)
            let sum = orderSixQuantity + e.target.value;
            orderSixPriceBox.textContent = sum * mandhiPrice ;
                                    
            let sumTwo = sum * mandhiPrice;
            setOrderSixPrice( sumTwo )
        }
        else if (orderSixItem == "pepsi1l") {
            setOrderSixSmallQuantity(e.target.value)
            let sum = orderSixQuantity + e.target.value;
            orderSixPriceBox.textContent = sum * pepsi1lPrice ;
                                    
            let sumTwo = sum * pepsi1lPrice;
            setOrderSixPrice( sumTwo )
        }
    }
    //Order Seven small quantity
    function orderSevenSmallQuantityChanged(e) {
        if (orderSevenItem == "burger") {
            setOrderSevenSmallQuantity(e.target.value)
            let sum = orderSevenQuantity + e.target.value;
            orderSevenPriceBox.textContent = sum * burgerPrice ;
                                    
            let sumTwo = sum * burgerPrice;
            setOrderSevenPrice( sumTwo )
        }
        else if (orderSevenItem == "loadedFries") {
            setOrderSevenSmallQuantity(e.target.value)
            let sum = orderSevenQuantity + e.target.value;
            orderSevenPriceBox.textContent = sum * loadedFriesPrice ;
                                    
            let sumTwo = sum * loadedFriesPrice;
            setOrderSevenPrice( sumTwo )
        }
        else if (orderSevenItem == "shawaya") {
            setOrderSevenSmallQuantity(e.target.value)
            let sum = orderSevenQuantity + e.target.value;
            orderSevenPriceBox.textContent = sum * shawayaPrice ;
                                    
            let sumTwo = sum * shawayaPrice;
            setOrderSevenPrice( sumTwo )
        }
        else if (orderSevenItem == "mandhi") {
            setOrderSevenSmallQuantity(e.target.value)
            let sum = orderSevenQuantity + e.target.value;
            orderSevenPriceBox.textContent = sum * mandhiPrice ;
                                    
            let sumTwo = sum * mandhiPrice;
            setOrderSevenPrice( sumTwo )
        }
        else if (orderSevenItem == "pepsi1l") {
            setOrderSevenSmallQuantity(e.target.value)
            let sum = orderSevenQuantity + e.target.value;
            orderSevenPriceBox.textContent = sum * pepsi1lPrice ;
                                    
            let sumTwo = sum * pepsi1lPrice;
            setOrderSevenPrice( sumTwo )
        }
    }
    //Order Eight small quantity
    function orderEightSmallQuantityChanged(e) {
        if (orderEightItem == "burger") {
            setOrderEightSmallQuantity(e.target.value)
            let sum = orderEightQuantity + e.target.value;
            orderEightPriceBox.textContent = sum * burgerPrice ;
                                    
            let sumTwo = sum * burgerPrice;
            setOrderEightPrice( sumTwo )
        }
        else if (orderEightItem == "loadedFries") {
            setOrderEightSmallQuantity(e.target.value)
            let sum = orderEightQuantity + e.target.value;
            orderEightPriceBox.textContent = sum * loadedFriesPrice ;
                                    
            let sumTwo = sum * loadedFriesPrice;
            setOrderEightPrice( sumTwo )
        }
        else if (orderEightItem == "shawaya") {
            setOrderEightSmallQuantity(e.target.value)
            let sum = orderEightQuantity + e.target.value;
            orderEightPriceBox.textContent = sum * shawayaPrice ;
                                    
            let sumTwo = sum * shawayaPrice;
            setOrderEightPrice( sumTwo )
        }
        else if (orderEightItem == "mandhi") {
            setOrderEightSmallQuantity(e.target.value)
            let sum = orderEightQuantity + e.target.value;
            orderEightPriceBox.textContent = sum * mandhiPrice ;
                                    
            let sumTwo = sum * mandhiPrice;
            setOrderEightPrice( sumTwo )
        }
        else if (orderEightItem == "pepsi1l") {
            setOrderEightSmallQuantity(e.target.value)
            let sum = orderEightQuantity + e.target.value;
            orderEightPriceBox.textContent = sum * pepsi1lPrice ;
                                    
            let sumTwo = sum * pepsi1lPrice;
            setOrderEightPrice( sumTwo )
        }
    }
    //Order Nine small quantity
    function orderNineSmallQuantityChanged(e) {
        if (orderNineItem == "burger") {
            setOrderNineSmallQuantity(e.target.value)
            let sum = orderNineQuantity + e.target.value;
            orderNinePriceBox.textContent = sum * burgerPrice ;
                                    
            let sumTwo = sum * burgerPrice;
            setOrderNinePrice( sumTwo )
        }
        else if (orderNineItem == "loadedFries") {
            setOrderNineSmallQuantity(e.target.value)
            let sum = orderNineQuantity + e.target.value;
            orderNinePriceBox.textContent = sum * loadedFriesPrice ;
                                    
            let sumTwo = sum * loadedFriesPrice;
            setOrderNinePrice( sumTwo )
        }
        else if (orderNineItem == "shawaya") {
            setOrderNineSmallQuantity(e.target.value)
            let sum = orderNineQuantity + e.target.value;
            orderNinePriceBox.textContent = sum * shawayaPrice ;
                                    
            let sumTwo = sum * shawayaPrice;
            setOrderNinePrice( sumTwo )
        }
        else if (orderNineItem == "mandhi") {
            setOrderNineSmallQuantity(e.target.value)
            let sum = orderNineQuantity + e.target.value;
            orderNinePriceBox.textContent = sum * mandhiPrice ;
                                    
            let sumTwo = sum * mandhiPrice;
            setOrderNinePrice( sumTwo )
        }
        else if (orderNineItem == "pepsi1l") {
            setOrderNineSmallQuantity(e.target.value)
            let sum = orderNineQuantity + e.target.value;
            orderNinePriceBox.textContent = sum * pepsi1lPrice ;
                                    
            let sumTwo = sum * pepsi1lPrice;
            setOrderNinePrice( sumTwo )
        }
    }
    //Order Ten small quantity
    function orderTenSmallQuantityChanged(e) {
        if (orderTenItem == "burger") {
            setOrderTenSmallQuantity(e.target.value)
            let sum = orderTenQuantity + e.target.value;
            orderTenPriceBox.textContent = sum * burgerPrice ;
                                    
            let sumTwo = sum * burgerPrice;
            setOrderTenPrice( sumTwo )
        }
        else if (orderTenItem == "loadedFries") {
            setOrderTenSmallQuantity(e.target.value)
            let sum = orderTenQuantity + e.target.value;
            orderTenPriceBox.textContent = sum * loadedFriesPrice ;
                                    
            let sumTwo = sum * loadedFriesPrice;
            setOrderTenPrice( sumTwo )
        }
        else if (orderTenItem == "shawaya") {
            setOrderTenSmallQuantity(e.target.value)
            let sum = orderTenQuantity + e.target.value;
            orderTenPriceBox.textContent = sum * shawayaPrice ;
                                    
            let sumTwo = sum * shawayaPrice;
            setOrderTenPrice( sumTwo )
        }
        else if (orderTenItem == "mandhi") {
            setOrderTenSmallQuantity(e.target.value)
            let sum = orderTenQuantity + e.target.value;
            orderTenPriceBox.textContent = sum * mandhiPrice ;
                                    
            let sumTwo = sum * mandhiPrice;
            setOrderTenPrice( sumTwo )
        }
        else if (orderTenItem == "pepsi1l") {
            setOrderTenSmallQuantity(e.target.value)
            let sum = orderTenQuantity + e.target.value;
            orderTenPriceBox.textContent = sum * pepsi1lPrice ;
                                    
            let sumTwo = sum * pepsi1lPrice;
            setOrderTenPrice( sumTwo )
        }
    }

    return(
        <div
            id="order-menu"
            className = "absolute justify-self-center top-[100px] drop-shadow-2xl rounded bg-white hidden"
        >
            <form 
                onSubmit={submitForm}
                className="mx-[25px] my-[50px]"
            >
                <h1 className="justify-self-center my-[25px] font-bold text-[24px]">Order</h1>

                <h2 className='justify-self-center text-[10px] text-yellow-400'>You can only order if you have filled Name, Phone and Address field!</h2>

                <ul>
                    <li>
                        <p>
                            Name : 
                        </p> 
                        
                        <input
                            className="border border-black  hover:bg-gray-100 px-3 py-1 rounded-[5px] w-full mb-2"
                            type="text" 
                            name="name"
                            value={ customerName }
                            onChange={ (e) => { setCustomerName(e.target.value) } }   
                        />
                    </li>

                    <li>  
                        <p>
                            Phone : 
                        </p> 
                        
                        <input
                            className="border border-black  hover:bg-gray-100 px-3 py-1 rounded-[5px] w-full mb-2"
                            type="number" 
                            name="Phone"
                            value={ customerPhone }
                            onChange={ (e) => { setCustomerPhone(e.target.value) } }
                        />
                    </li>

                    <li>
                        <p>
                            Address : 
                        </p> 
                        
                        <textarea
                            className="border border-black  hover:bg-gray-100 px-3 py-1 rounded-[5px] w-full mb-2"
                            type="text" 
                            name="Address" 
                            value={ customerAddress }
                            onChange={ (e) => { setCustomerAddress(e.target.value) } }
                        />
                    </li>
                </ul>


                <div id="Order">
                    {/* <input type="checkbox" className="ml-[50px] mr-[7.5px] "/>Manual */}
                        <div>
                            <p> Order #1 : </p>
                        <div id="div-order-one" className="flex gap-[10px] mx-[20px] my-[20px]">

                        <select
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
                            className="border border-black px-[5px] py-[2px] rounded max-w-[150px]"
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
                            className="border border-black px-[5px] py-[2px] rounded max-w-[150px]"
                            id="small-quantity-order-one" 
                            name="small-quantity-order-one"
                            value={ orderOneSmallQuantity }
                            onChange={ orderOneSmallQuantityChanged }
                        >
                                <option value={"0"}> 0 </option>
                                <option value={".25"}> .25 </option>
                                <option value={".5"}> .5 </option>
                                <option value={".75"}> .75  </option>
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
                        <div>
                            <p> Order #2 : </p>
                        <div id="div-order-two" className="flex gap-[10px] mx-[20px] my-[20px]">

                        <select
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
                            className="border border-black px-[5px] py-[2px] rounded max-w-[150px]"
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
                            className="border border-black px-[5px] py-[2px] rounded max-w-[150px]"
                            id="small-quantity-order-two" 
                            name="small-quantity-order-two"
                            value={ orderTwoSmallQuantity }
                            onChange={ orderTwoSmallQuantityChanged }
                        >
                                <option value={"0"}> 0 </option>
                                <option value={".25"}> .25 </option>
                                <option value={".5"}> .5 </option>
                                <option value={".75"}> .75  </option>
                        </select>

                        <div className="border border-black px-[5px] py-[2px] rounded">
                            <p 
                                id="order-two-price-box"
                                className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                            >
                                
                            </p>
                        </div>
                    </div>
                    </div>

                    { (!orderOnePrice == "") && (
                    <div>
                        <p>
                            Order #3 :
                        </p>
                        <div id="div-order-Three" className="flex gap-[10px] mx-[20px] my-[20px]">
                            
                            <select
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
                                className="border border-black px-[5px] py-[2px] rounded max-w-[150px]"
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
                                className="border border-black px-[5px] py-[2px] rounded max-w-[150px]"
                                id="small-quantity-order-three" 
                                name="small-quantity-order-three"
                                value={ orderThreeSmallQuantity }
                                onChange={ orderThreeSmallQuantityChanged }
                                >
                                    <option value={"0"}> 0 </option>
                                    <option value={".25"}> .25 </option>
                                    <option value={".5"}> .5 </option>
                                    <option value={".75"}> .75  </option>
                            </select>

                            <div className="border border-black px-[5px] py-[2px] rounded">
                                <p 
                                    id="order-three-price-box"
                                    className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                    >
                                    
                                </p>
                            </div>
                            </div>
                        </div>
                    )}


                    { (!orderTwoPrice == "") && (
                    <div>
                        <p>
                            Order #4 :
                        </p>
                        <div id="div-order-four" className="flex gap-[10px] mx-[20px] my-[20px]">
                            
                            <select
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
                                className="border border-black px-[5px] py-[2px] rounded max-w-[150px]"
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
                                className="border border-black px-[5px] py-[2px] rounded max-w-[150px]"
                                id="small-quantity-order-four" 
                                name="small-quantity-order-four"
                                value={ orderFourSmallQuantity }
                                onChange={ orderFourSmallQuantityChanged }
                                >
                                    <option value={"0"}> 0 </option>
                                    <option value={".25"}> .25 </option>
                                    <option value={".5"}> .5 </option>
                                    <option value={".75"}> .75  </option>
                            </select>

                            <div className="border border-black px-[5px] py-[2px] rounded">
                                <p 
                                    id="order-four-price-box"
                                    className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                    >
                                    
                                </p>
                            </div>
                            </div>
                        </div>
                    )}

                    { (!orderThreePrice == "") && (
                    <div>
                        <p>
                            Order #5 :
                        </p>
                        <div id="div-order-five" className="flex gap-[10px] mx-[20px] my-[20px]">
                            
                            <select
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
                                className="border border-black px-[5px] py-[2px] rounded max-w-[150px]"
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
                                className="border border-black px-[5px] py-[2px] rounded max-w-[150px]"
                                id="small-quantity-order-five" 
                                name="small-quantity-order-five"
                                value={ orderFiveSmallQuantity }
                                onChange={ orderFiveSmallQuantityChanged }
                                >
                                    <option value={"0"}> 0 </option>
                                    <option value={".25"}> .25 </option>
                                    <option value={".5"}> .5 </option>
                                    <option value={".75"}> .75  </option>
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
                    )}

                    { (!orderFourPrice == "") && (
                    <div>
                        <p>
                            Order #6 :
                        </p>
                        <div id="div-order-six" className="flex gap-[10px] mx-[20px] my-[20px]">
                            
                            <select
                                className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                id='order-six-item'
                                name="order-six-item"
                                value={ orderSixItem }
                                onChange={ orderSixItemChanged }
                                >
                                <option value="Choose Your Order"> Choose Your Order </option>
                                <option value="burger"> burger </option>
                                <option value="loadedFries"> loadedFries </option>
                                <option value="shawaya"> shawaya </option>
                                <option value="mandhi"> mandhi </option>
                                <option value="pepsi1l"> pepsi1l </option>
                            </select>

                            <select
                                className="border border-black px-[5px] py-[2px] rounded max-w-[150px]"
                                id="quantity-order-six" 
                                name="quantity-order-six"
                                value={ orderSixQuantity }
                                onChange={ orderSixQuantityChanged }
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
                                className="border border-black px-[5px] py-[2px] rounded max-w-[150px]"
                                id="small-quantity-order-six" 
                                name="small-quantity-order-six"
                                value={ orderSixSmallQuantity }
                                onChange={ orderSixSmallQuantityChanged }
                                >
                                    <option value={"0"}> 0 </option>
                                    <option value={".25"}> .25 </option>
                                    <option value={".5"}> .5 </option>
                                    <option value={".75"}> .75  </option>
                            </select>

                            <div className="border border-black px-[5px] py-[2px] rounded">
                                <p 
                                    id="order-six-price-box"
                                    className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                    >
                                    
                                </p>
                            </div>
                            </div>
                        </div>
                    )}

                    { (!orderFivePrice == "") && (
                    <div>
                        <p>
                            Order #7 :
                        </p>
                        <div id="div-order-seven" className="flex gap-[10px] mx-[20px] my-[20px]">
                            
                            <select
                                className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                id='order-seven-item'
                                name="order-seven-item"
                                value={ orderSevenItem }
                                onChange={ orderSevenItemChanged }
                                >
                                <option value="Choose Your Order"> Choose Your Order </option>
                                <option value="burger"> burger </option>
                                <option value="loadedFries"> loadedFries </option>
                                <option value="shawaya"> shawaya </option>
                                <option value="mandhi"> mandhi </option>
                                <option value="pepsi1l"> pepsi1l </option>
                            </select>

                            <select
                                className="border border-black px-[5px] py-[2px] rounded max-w-[150px]"
                                id="quantity-order-seven" 
                                name="quantity-order-seven"
                                value={ orderSevenQuantity }
                                onChange={ orderSevenQuantityChanged }
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
                                className="border border-black px-[5px] py-[2px] rounded max-w-[150px]"
                                id="small-quantity-order-seven" 
                                name="small-quantity-order-seven"
                                value={ orderSevenSmallQuantity }
                                onChange={ orderSevenSmallQuantityChanged }
                                >
                                    <option value={"0"}> 0 </option>
                                    <option value={".25"}> .25 </option>
                                    <option value={".5"}> .5 </option>
                                    <option value={".75"}> .75  </option>
                            </select>

                            <div className="border border-black px-[5px] py-[2px] rounded">
                                <p 
                                    id="order-seven-price-box"
                                    className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                    >
                                    
                                </p>
                            </div>
                            </div>
                        </div>
                    )}

                    { (!orderSixPrice == "") && (
                    <div>
                        <p>
                            Order #8 :
                        </p>
                        <div id="div-order-eight" className="flex gap-[10px] mx-[20px] my-[20px]">
                            
                            <select
                                className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                id='order-eight-item'
                                name="order-eight-item"
                                value={ orderEightItem }
                                onChange={ orderEightItemChanged }
                                >
                                <option value="Choose Your Order"> Choose Your Order </option>
                                <option value="burger"> burger </option>
                                <option value="loadedFries"> loadedFries </option>
                                <option value="shawaya"> shawaya </option>
                                <option value="mandhi"> mandhi </option>
                                <option value="pepsi1l"> pepsi1l </option>
                            </select>

                            <select
                                className="border border-black px-[5px] py-[2px] rounded max-w-[150px]"
                                id="quantity-order-eight" 
                                name="quantity-order-eight"
                                value={ orderEightQuantity }
                                onChange={ orderEightQuantityChanged }
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
                                className="border border-black px-[5px] py-[2px] rounded max-w-[150px]"
                                id="small-quantity-order-eight" 
                                name="small-quantity-order-eight"
                                value={ orderEightSmallQuantity }
                                onChange={ orderEightSmallQuantityChanged }
                                >
                                    <option value={"0"}> 0 </option>
                                    <option value={".25"}> .25 </option>
                                    <option value={".5"}> .5 </option>
                                    <option value={".75"}> .75  </option>
                            </select>

                            <div className="border border-black px-[5px] py-[2px] rounded">
                                <p 
                                    id="order-eight-price-box"
                                    className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                    >
                                    
                                </p>
                            </div>
                            </div>
                        </div>
                    )}

                    { (!orderSevenPrice == "") && (
                    <div>
                        <p>
                            Order #9 :
                        </p>
                        <div id="div-order-nine" className="flex gap-[10px] mx-[20px] my-[20px]">
                            
                            <select
                                className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                id='order-nine-item'
                                name="order-nine-item"
                                value={ orderNineItem }
                                onChange={ orderNineItemChanged }
                                >
                                <option value="Choose Your Order"> Choose Your Order </option>
                                <option value="burger"> burger </option>
                                <option value="loadedFries"> loadedFries </option>
                                <option value="shawaya"> shawaya </option>
                                <option value="mandhi"> mandhi </option>
                                <option value="pepsi1l"> pepsi1l </option>
                            </select>

                            <select
                                className="border border-black px-[5px] py-[2px] rounded max-w-[150px]"
                                id="quantity-order-nine" 
                                name="quantity-order-nine"
                                value={ orderNineQuantity }
                                onChange={ orderNineQuantityChanged }
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
                                className="border border-black px-[5px] py-[2px] rounded max-w-[150px]"
                                id="small-quantity-order-nine" 
                                name="small-quantity-order-nine"
                                value={ orderNineSmallQuantity }
                                onChange={ orderNineSmallQuantityChanged }
                                >
                                    <option value={"0"}> 0 </option>
                                    <option value={".25"}> .25 </option>
                                    <option value={".5"}> .5 </option>
                                    <option value={".75"}> .75  </option>
                            </select>

                            <div className="border border-black px-[5px] py-[2px] rounded">
                                <p 
                                    id="order-nine-price-box"
                                    className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                    >
                                    
                                </p>
                            </div>
                            </div>
                        </div>
                    )}

                    { (!orderEightPrice == "") && (
                    <div>
                        <p>
                            Order #10 :
                        </p>
                        <div id="div-order-ten" className="flex gap-[10px] mx-[20px] my-[20px]">
                            
                            <select
                                className="border border-black px-[5px] py-[2px] rounded min-w-[250px]"
                                id='order-ten-item'
                                name="order-ten-item"
                                value={ orderTenItem }
                                onChange={ orderTenItemChanged }
                                >
                                <option value="Choose Your Order"> Choose Your Order </option>
                                <option value="burger"> burger </option>
                                <option value="loadedFries"> loadedFries </option>
                                <option value="shawaya"> shawaya </option>
                                <option value="mandhi"> mandhi </option>
                                <option value="pepsi1l"> pepsi1l </option>
                            </select>

                            <select
                                className="border border-black px-[5px] py-[2px] rounded max-w-[150px]"
                                id="quantity-order-ten" 
                                name="quantity-order-ten"
                                value={ orderTenQuantity }
                                onChange={ orderTenQuantityChanged }
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
                                className="border border-black px-[5px] py-[2px] rounded max-w-[150px]"
                                id="small-quantity-order-ten" 
                                name="small-quantity-order-ten"
                                value={ orderTenSmallQuantity }
                                onChange={ orderTenSmallQuantityChanged }
                                >
                                    <option value={"0"}> 0 </option>
                                    <option value={".25"}> .25 </option>
                                    <option value={".5"}> .5 </option>
                                    <option value={".75"}> .75  </option>
                            </select>

                            <div className="border border-black px-[5px] py-[2px] rounded">
                                <p 
                                    id="order-ten-price-box"
                                    className="totalPrice min-w-[50px] px-[5px] p-[2px] "
                                    >
                                    
                                </p>
                            </div>
                            </div>
                        </div>
                    )}
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