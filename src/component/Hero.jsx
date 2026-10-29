import fineFoodImg from '../assets/img/fine-food.jpg';

export default function Hero() {
    return(
        <div id="main-img">
            <img 
                src={fineFoodImg}
                alt="Image of fine food or something" 
                className="w-[70%] h-[70%] justify-self-center"
            />
        </div>
    )
}