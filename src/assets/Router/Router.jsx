import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../component/Root/Root';
import Home from '../component/Pages/Home';
import Apps from '../component/Apps';
import Installation from '../component/Installation';

const Router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        errorElement:<p>page not found</p>,
        children:[
           {
            index:true,
            loader:()=>fetch('../HomeApp.json'),
            Component:Home
           },
           {
            path:'/apps',
            Component:Apps
           },
           {
            path:'/install',
            Component:Installation
           }
        ]
        
    }
])
export default Router;