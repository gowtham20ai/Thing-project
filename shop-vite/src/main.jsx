
import { createRoot } from 'react-dom/client'
import './index.css'
import 'flowbite'
import { v4 as uuidv4 } from 'uuid';
import Header from './Components/Header'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import ProductLoyout from './Components/ProductLoyout';
import { createBrowserRouter, RouterProvider, Outlet,Navigate } from "react-router-dom";
import Overview from './Components/Overview';
import ErrorPage from './Components/Errorpage';
import Order from './Components/Order';
import FormLogin from './Components/FormLogin';
import Forms_old from './Components/Forms_old';
import Timer from './Components/Timer';
// import { auth } from 'firebase/auth'; 
import { onAuthStateChanged } from 'firebase/auth';












const G = () => {
  return (
    <>
      <div className='bg-[url(https://ik.imagekit.io/8wxvbajv2/cat-img.png?updatedAt=1749636471855)] w-[100px] h-[200px] 
    shadow-2xl  shadow-orange-400 '>

        <h1 className='bg-[url()]'>Navbar noubo;vt7xr7cuy</h1>

      </div>
    </>
  )
}
const Click = () => {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <ProductLoyout />
      {/* <Footer /> */}
    </>
  )
}

const ApplayOut = () => {
  

  return (
    <>
      <Timer />
      <Header />
      <Outlet />
      <Footer />


    </>
  )
}






const router = createBrowserRouter([
  {
    path: "/",
    element: <ApplayOut />,
    children: [
      {
        path: "/",
        element: <Click />
      }, {
        path: "/products/:product_id",
        element: <Overview />
      },{
        path:"/Order/:Product_id",
        element:<Order/>

      },{
        path:"/Forms_old",
        element:<Forms_old/>
      },{
        path:"/FormLogin",
        element:<FormLogin/>
       },
      
    ],
    errorElement:<ErrorPage/>
  },
]);
createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
