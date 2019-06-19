import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Navigation from '../components/layout/Navigation';
import Overview from '../components/site/Overview';


function Layout() {
    return (
        <div className="w-full Layout">
          
            <Header/>
            <div className=" flex w-full">
                <div className="w-1/4  inset-y-0 h-screen ml-8 mt-6 ">
                    <Sidebar/>
                </div>
                <div className="w-3/4  pt-8 flex-grow flex-shrink flex-auto ">
                    <div>
                        <Navigation/>
                    </div>
              
                    <Overview/>
                </div>
            </div>
            
            
        </div>
    );
}

export default Layout;