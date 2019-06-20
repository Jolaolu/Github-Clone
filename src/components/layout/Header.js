import React from 'react';
import Octicon, {MarkGithub, Bell,Plus, TriangleDown,} from '@primer/octicons-react'
import jola from '../../static/jola.jpeg';
import Slash from '../../static/slash.svg'

function Header() {
  return (
    <div className="Header">
      <header className="w-full flex h-16 ">
        <div className="w-1/4 flex flex-wrap">
          <Octicon icon={MarkGithub} size='medium' className="text-white mt-4 ml-5 mr-5" />
          <input type="text" className="search w-3/5 h-5 col mt-6 mb-2 border-none focus:outline-none focus:bg-white focus:text-black" placeholder="Search or jump to..."/>
           <img src={Slash} />
        </div> 
        <div className="w-3/4 flex">
        <div className="flex justify-start pt-5 text-white font-semibold text-sm">
            <ul className="list-none inline">
              <li className="inline ml-4">Pull requests</li>
              <li className="inline ml-4">Issues</li>
              <li className="inline ml-4">Marketplace</li>
              <li className="inline ml-4">Explore</li>
            </ul>
          </div>
        </div>
          <div className="flex justify-end mt-6 text-white pr-5 pl-5">
            <Octicon icon={Bell} size='small'  className="ml-2 mr-2 "/>
            <Octicon icon={Plus} size='small'  className="ml-2 mr-1 "/>
            <Octicon icon={TriangleDown} size='small'  className="mr-3"/>
            <img src={jola} alt="profile " className="mr-1 h-5 w-5" /> 
            <Octicon icon={TriangleDown} size='small'  className=""/>
          </div>
          
      </header>
    </div>
  );
}

export default Header;
