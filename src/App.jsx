import { 
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
 } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from './pages/HomePage';
import AdminPage from "./pages/AdminPage";
import { AdminLoader } from "./component/AdminLoader";
import NotFoundPage from "./pages/NotFoundPage";
import OrderEditPage from "./pages/OrderEditPage";
import OrderLoader from "./component/OrderLoader";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/admin/orders' element={<AdminPage />} loader={AdminLoader} />
            <Route path='/admin/orders/edit-order/:id' element={<OrderEditPage />} loader={OrderLoader} />
            {/* <Route path='/admin/orders/:id' element={<OrderEditPage />} loader={OrderLoader} /> */}
            <Route path='/*' element={<NotFoundPage />} />
        </Route>
    )
)

export default function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}