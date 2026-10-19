export default function NavBar() {
    return(
        <nav className="flex justify-between px-[75px] py-[25px] bg-red-500 text-yellow-300 border border-red-700">
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

            <button className="rounded border border-black px-[7.5px] py-[2.5px] hover:bg-red-600 hover:text-yellow-100">Order</button>
        </nav>
    )
}