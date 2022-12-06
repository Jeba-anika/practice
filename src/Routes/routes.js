import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import EachAuctionPage from "../Components/EachAuctionPage/EachAuctionPage";
import Home from "../Components/Home/Home";
import Main from "../Layout/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/eachAuction/:id',
                element: <EachAuctionPage></EachAuctionPage>,
            }
        ]
    }
])

export default routes;