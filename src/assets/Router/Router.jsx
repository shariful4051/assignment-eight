import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../component/Root/Root';
import Home from '../component/Pages/Home';
import Apps from '../component/Apps';
import Installation from '../component/Installation';
import CardDetails from '../component/Pages/CardDetails';
import Error from '../component/Pages/Error';

const Router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        errorElement:<Error></Error>,
        children:[
           {
            index:true,
            loader:()=>fetch('../HomeApp.json'),
            Component:Home
           },
           {
            path:'/apps',
            Component:Apps,
            loader:()=>fetch('../Apps.json')
           },
           {
            path:'/install',
            Component:Installation,
             loader:()=>fetch('../Apps.json')
           },
           {
            path:'/cardDetails/:id',
            Component:CardDetails,
             loader:()=>fetch('../Apps.json')
           }
        ]
        
    }
])
export default Router;