import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/layout/Header';
import Sidebar from '../components/site/Sidebar';


function Layout() {
    return (
        <div className="Layout">
        <Header/>
        <div className="ml-8 mx-auto mt-6">
            <div className="inset-y-0 overflow-hidden mr-3">
                <Sidebar/>
            </div>
        </div>
      </div>
    );
}

export default Layout;