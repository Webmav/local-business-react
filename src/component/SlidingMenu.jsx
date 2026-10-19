export default function SlidingMenu() {
    return(
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
    )
}