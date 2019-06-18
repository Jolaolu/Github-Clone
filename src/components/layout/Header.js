import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import jola from '../../static/jola.jpeg';

function Header() {
  return (
    <div className="Header">
      <header className=" w-full flex h-16 ">
        <div className="w-1/2 flex flex-wrap">
          <FontAwesomeIcon icon={['fab', 'github']} className="text-white m-5 text-3xl" />
          <input type="text" className="search mt-5 mb-2 border-none focus:outline-none focus:bg-white focus:text-black" placeholder="Search or jump to..."/>
          <div>
          <div className="flex justify-start text-white font-semibold text-sm  mt-6">
            <ul className="ml-2 mr-2 list-none inline">
              <li className="inline ml-4">Pull requests</li>
              <li className="inline ml-4">Issues</li>
              <li className="inline ml-4">Marketplace</li>
              <li className="inline ml-4">Explore</li>
            </ul>
          </div>
          </div>
        </div>  
          <div className=" w-1/2 flex justify-end mt-6 text-white pr-5 pl-5">
            <FontAwesomeIcon icon={['fas', 'bell']} className=" ml-2 mr-2 "/>
            <FontAwesomeIcon icon={['fas','plus']} className=" ml-2 mr-1 "/>
            <FontAwesomeIcon icon={['fas','caret-down']} className="mr-3"/>
            <img src={jola} alt="profile " className="mr-1 h-5 w-5" /> 
            <FontAwesomeIcon icon={['fas','caret-down']} className=""/>
          </div>
      </header>
    </div>
  );
}

export default Header;
