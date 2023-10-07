import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Pages/Error/Error"
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";
import Doctors from "../Pages/Doctors/Doctors";



const Routes = createBrowserRouter([
   {
      path: '/',
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/services/:id',
            element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
            loader: ()=> fetch('/data.json')
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         },
         {
            path: '/doctors',
            element: <PrivateRoute><Doctors></Doctors></PrivateRoute>
         },
         {
            path: '/blog',
            element: <PrivateRoute><Blog></Blog></PrivateRoute>
         }
      ]
   }
])

export default Routes;