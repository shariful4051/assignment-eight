import React from 'react';
import Banner from './Banner';
import HomeApp from './HomeApp';
import { useLoaderData } from 'react-router';

const Home = () => {
    const apps = useLoaderData();
    //console.log(apps);
    return (
        <div>
            <Banner></Banner>
            <HomeApp apps={apps}></HomeApp>
        </div>
    );
};

export default Home;