import { Outlet, ScrollRestoration } from "react-router"
import CommonLayout from "./components/layout/CommoneLayout"
import { ToastContainer} from 'react-toastify';
import {  HelmetProvider } from 'react-helmet-async';


function App() {

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}
  // console.log(genarateRoutes(adminSidebarItem))
  return (
    <HelmetProvider>
    <CommonLayout>
      <ScrollRestoration />
      <ToastContainer />
      <Outlet />
    </CommonLayout>
    </HelmetProvider>
  )
}

export default App
