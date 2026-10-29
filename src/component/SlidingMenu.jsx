import menuOne from '../assets/img/menu-one.jpeg';
import menuTwo from '../assets/img/menu-two.jpeg';
import menuThree from '../assets/img/menu-three.jpeg';
import menuFour from '../assets/img/menu-four.png';
import menuFive from '../assets/img/img.png';

export default function SlidingMenu() {
    return(
        <div 
            id="sliding-menu" 
            className="flex justify-self-center gap-[50px] px-[25px] py-[30px] radius-[25px]"
        >
            <img 
                src={menuOne}
                alt="menu-one" id="menu-one" 
                className="w-[250px] h-[250px] "
            />
            <img 
                src={menuTwo}
                alt="menu-two" id="menu-two" 
                className="w-[250px] h-[250px] "
            />
            <img 
                src={menuThree}
                alt="menu-three" id="menu-three" 
                className="w-[250px] h-[250px] "
            />
            <img 
                src={menuFour}
                alt="menu-four" id="menu-four" 
                className="w-[250px] h-[250px] "
            />
            <img 
                src={menuFive}
                alt="menu-five" id="menu-five" 
                className="w-[250px] h-[250px] "
            />
        </div>
    )
}