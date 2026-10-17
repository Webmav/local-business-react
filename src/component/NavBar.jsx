export default function NavBar() {
    return(
        <nav className="flex justify-between px-[75px] py-[25px] bg-red-500 text-yellow-300">
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
            <button className="rounded border border-black px-[7.5px] py-[2.5px]">Order</button>
        </nav>
    )
}