export default function Hero() {
    return(
        <div>
            <div id="main-img" className="mt-[10px]">
                <img src="src/assets/img/fine-food.jpg"
                alt="Image of fine food or something" />
            </div>

            <div id="sliding-menu">
                <img src="src/assets/img/menu-one.jpeg" 
                alt="menu-one" id="menu-one" />
                <img src="src/assets/img/menu-two.jpeg" 
                alt="menu-two" id="menu-two" />
                <img src="src/assets/img/menu-three.jpeg" 
                alt="menu-three" id="menu-three" />
            </div>

            <div id="buttons">
                    <input value="Order" type="button" />
                    <input value="About us" type="button" />
            </div>

            <div id="contact">
                <div id="contacts">
                    <h3>Contacts</h3>
                    <p>Mobile No</p>
                    <p>Email</p>
                </div>
                <div id="two">
                    <p>yoooo</p>
                </div>
                <div id="locations">
                    <p>Parakkadavu</p>
                    <p>Othiyil</p>
                </div>
            </div>
        </div>
    )
}