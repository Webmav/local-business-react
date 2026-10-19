export default function Hero() {
    return(
        <div className="bg-red-300 py-[25px]">
            <div id="main-img" className="">
                <img 
                    src="src/assets/img/fine-food.jpg"
                    alt="Image of fine food or something" 
                    className="w-[70%] h-[70%] justify-self-center"
                />
            </div>

            <div className="py-[25px]">
                <h2 className="justify-self-center font-bold text-2xl my-[12.5px]">The True Taste of Nadapuram, Crafted for Connoisseurs.</h2>
                <h3 className="justify-self-center max-w-[900px] text-center font-semibold my-[12.5px] ">
                        Experience the authentic heritage of Malabari cuisine.
                        We blend time-honored recipes with the finest local ingredients to bring unforgettable flavors
                        straight to your table.
                </h3>
                <div className="justify-self-center my-[25px] ">
                    <button className="mx-[12.5px] rounded border border-black px-[10px] py-[2.5px] hover:bg-red-700 hover:text-yellow-100">
                        Explore Our Menu
                    </button>
                    <button className="mx-[12.5px] rounded border border-black px-[10px] py-[2.5px] hover:bg-red-700 hover:text-yellow-100">
                        Order Now
                    </button>
                </div>
            </div>

            <div 
                id="sliding-menu" 
                className="flex justify-self-center gap-[50px] px-[25px] py-[30px] radius-[25px]"
            >
                <img 
                    src="src/assets/img/menu-one.jpeg" 
                    alt="menu-one" id="menu-one" 
                    className="w-[250px] h-[250px] "
                />
                <img 
                    src="src/assets/img/menu-two.jpeg" 
                    alt="menu-two" id="menu-two" 
                    className="w-[250px] h-[250px] "
                />
                <img 
                    src="src/assets/img/menu-three.jpeg" 
                    alt="menu-three" id="menu-three" 
                    className="w-[250px] h-[250px] "
                />
                <img 
                    src="src/assets/img/menu-four.png" 
                    alt="menu-four" id="menu-four" 
                    className="w-[250px] h-[250px] "
                />
                <img 
                    src="src/assets/img/img.png" 
                    alt="menu-five" id="menu-five" 
                    className="w-[250px] h-[250px] "
                />
            </div>
        </div>
    )
}