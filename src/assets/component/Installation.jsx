import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getCartFromLS } from '../../utilities/LocalStorage';
import InstallApp from './Pages/InstallApp';

const Installation = () => {
    const [list,setList] =useState([])
    const allApps = useLoaderData()
    useEffect(()=>{
        const storedId = getCartFromLS();
        const convertedId = storedId.map(id=>parseInt(id))
        const installAppList = allApps.filter(app=>convertedId.includes(app.id))
        setList(installAppList);
    },[])
    
    return (
        <div>
            {
                list.map(x=><InstallApp key={x.id} x={x}></InstallApp>)
            }
        </div>
    );
};

export default Installation;



