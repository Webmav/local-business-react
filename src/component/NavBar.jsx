import { NavLink } from 'react-router-dom';

export default function NavBar() {
//Function to perform upon clicking order button in the navigation
    function Order() {
        const orderMenu = document.getElementById("order-menu")
        orderMenu.classList.toggle("hidden")
    }

    return(
        <div>
            <nav
                id="nav"
                className="flex justify-between px-[25px] md:px-[75px] py-[12.5px] md:py-[25px] bg-red-500 text-yellow-300 border border-red-700"
            >
                <NavLink to='/'>
                    <h1 className="">Fine Food</h1>
                </NavLink>

                <ul id='menu-list' className="flex max-md:hidden">
                    <NavLink 
                        to="/"
                    >
                        <li className='hover:text-yellow-100'>Menu</li>
                    </NavLink>

                    <NavLink 
                        to="/"
                    >
                        <li className='hover:text-yellow-100'>Track</li>
                    </NavLink>

                    <NavLink 
                        to="/"
                    >
                        <li className='hover:text-yellow-100'>Contacts</li>
                    </NavLink>

                    <NavLink 
                        to="/"
                    >
                        <li className='hover:text-yellow-100'>About us</li>
                    </NavLink>

                    <NavLink
                        to='/admin/orders'
                    >
                        <li className='hover:text-yellow-100'>Orders</li>
                    </NavLink>
                </ul>

                <button
                    className="rounded border border-black px-[7.5px] py-[2.5px] hover:bg-red-600 hover:text-yellow-100 max-md:hidden"
                    onClick={Order}
                >
                    Order
                </button>
            </nav>
        </div>
    )
}




//pepsi = small quantity hide