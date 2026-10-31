import FooterCopyright from "./FooterCopyright"

export default function Footer() {
    return(
        <>
            <footer className="flex max-md:flex-col max-md:gap-[15px] justify-between px-[75px] py-[25px] bg-red-500 text-yellow-300 border border-red-700">
                <h1 className="max-md:self-center">FineFood</h1>

                <ul className="even-columns">
                    <h2>Locations : </h2>
                    <li>Nadapuram</li>
                    <li>Kozhikode</li>
                    <li className="text-transparent">hi</li>
                    <li>Kallachi</li>
                    <li>Thalassery</li>
                </ul>

                <ul>
                    <h2><u className="pt-[5px]">Contacts</u></h2>
                    <li>Mobile : +91 939393****</li>
                    <li>Email : fine****@gmail.com </li>
                </ul>
            </footer>

            <FooterCopyright />
        </>
    )
}