export default function HeroCta() {
//Function to perform upon clicking order now button.
    function Order() {
        const orderMenu = document.getElementById("order-menu")
        orderMenu.classList.toggle("hidden")
    }

    return(
        <div className="py-[25px]">
            <h2 className="justify-self-center font-bold text-xl text-center md:text-2xl my-[15px] max-md:max-w-[300px]">The True Taste of Nadapuram, Crafted for Connoisseurs.</h2>

            <h3 className="justify-self-center max-w-[900px] text-center font-semibold my-[12.5px] ">
                    Experience the authentic heritage of Malabari cuisine.
                    We blend time-honored recipes with the finest local ingredients to bring unforgettable flavors
                    straight to your table.
            </h3>

            <div className="justify-self-center my-[25px] ">
                <button className="mx-[12.5px] rounded border border-black px-[10px] py-[2.5px] hover:bg-red-700 hover:text-yellow-100">
                    Explore Our Menu
                </button>
                
                <button 
                    className="mx-[12.5px] rounded border border-black px-[10px] py-[2.5px] hover:bg-red-700 hover:text-yellow-100"
                    onClick={Order}
                >
                    Order Now
                </button>
            </div>
        </div>
    )
}