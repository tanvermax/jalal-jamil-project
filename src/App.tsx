import { Outlet, ScrollRestoration } from "react-router"
import CommonLayout from "./components/layout/CommoneLayout"
import { ToastContainer} from 'react-toastify';



function App() {

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}
  // console.log(genarateRoutes(adminSidebarItem))
  return (
    <CommonLayout>
      <ScrollRestoration />
      <ToastContainer />

      <Outlet />

    </CommonLayout>
  )
}

export default App
