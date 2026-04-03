import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import Installation from "../Pages/Installation";
import AllApps from "../Pages/AllApps";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:Layout,
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
                Component:AllApps
            },
            {
                path:'/installation',
                Component:Installation
            }
        ]
    }
])