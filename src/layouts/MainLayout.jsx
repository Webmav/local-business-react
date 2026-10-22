import { Outlet } from 'react-router-dom';

import NavBar from '../component/NavBar';
import Footer from '../component/Footer';

export default function MainLayout() {
    return (
        <>
            <NavBar/>
                <Outlet />
            <Footer />
        </>
    )
}