import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home/Home";
import Toys from "../components/Toys/Toys";
import MyToys from "../components/MyToys/MyToys";
import AddToy from "../components/AddToy/AddToy";
import Blog from "../components/Blog/Blog";
import Login from "../components/User/Login/Login";
import Register from "../components/User/Register/Register";
import ErrorPage from "../components/ErrorPage/ErrorPage ";
import SingalToy from "../components/SingalToy/SingalToy";
import PrivateRoute from "../providers/PrivateRoute";
import Edit from "../components/MyToys/Edit";
// import Singal from "../components/Home/Home/Singal";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'alltoys',
          element: <Toys></Toys>
        },
        {
          path: 'alltoys/:id',
          element: <Edit></Edit>
          // loader: ({params}) => fetch(`http://localhost:5000/alltoys/${params.id}`)
        },
        {
          path: 'mytoys',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        
        {
          path: 'add',
          // element: <AddToy></AddToy>
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'singup',
          element: <Register></Register>
        },
        {
          path: 'allToy/:id',
          element: <SingalToy></SingalToy>,
          loader: ({params}) => fetch(`https://magice-toy-mart-server-manik1010.vercel.app/allToy/${params.id}`)
        },
        {
          path: 'edit/:id',
          element: <Edit></Edit>,
          loader: ({params}) => fetch(`https://magice-toy-mart-server-manik1010.vercel.app/allToy/${params.id}`)
        },
        // {
        //   path: 'allToy/:id',
        //   element: <Singal></Singal>,
        //   loader: ({params}) => fetch(`https://magice-toy-mart-server-manik1010.vercel.app/allToy/${params.id}`)
        // },
        // {
        //   path: '*',
        //   element: <ErrorPage></ErrorPage>
        // }

      ]
    },
  ]);

export default router;