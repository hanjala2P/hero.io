import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import Installation from "../Pages/Installation";
import Apps from "../Components/Apps";
import AppDetails from "../Pages/AppDetails";
import NotFound from "../Not found/NotFound";
import Loader from "../Animation/Loader";
import ErrorPage from "../Not found/ErrorPage";


export const router = createBrowserRouter([
    {
        path:'/',
        Component:Layout,
        errorElement:<h2>loading...</h2>,
        hydrateFallbackElement:Loader,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/nav',
                Component:Nav
            },
            {
                path:'/footer',
                Component:Footer

            },
             {
                path:'/apps',
                Component:Apps
            },
            {
                path:'/installation',
                Component:Installation
            },
            {
                path:'/appDetails/:id',
                Component:AppDetails
            },
            {
                path:'/test',
                Component:ErrorPage
            },
            {
                path:'*',
                Component:NotFound
            }

           
        ]
    }
])