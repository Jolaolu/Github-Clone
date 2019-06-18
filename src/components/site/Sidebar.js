import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from '../../static/profile.png';
import link from '../../static/link.png';


function Sidebar() {
    return (
        <div className="">
            <div>
                <img src={profile} alt="profile" srcset="" className="rounded-lg h-64 w-64"/>
                <div>
                    <div className="name mt-4 font-bold text-2xl ">
                        Sebastian Morr
                    </div>
                    <div className=" pt-0 mt-0 font-thin text-xl text-gray-700">
                        blinry
                    </div>
                    <div className="w-1/5  pt-3 pb-5">
                        <input type="submit" value="Follow" className="button w-full h-8 rounded border border-gray-500 font-semibold text-sm focus:border-none"/>
                    </div>
                    <div className="inline">
                        <img src={link} alt="" srcset="" className="inline"/>
                        <a href="http://morr.cc" className="inline hover:underline text-sm text-blue-600">http://morr.cc</a>
                    </div>
                    <div className="mt-3 text-xs font-thin text-gray-600">
                        <a href="" className="hover:text-blue-600">Block or report user</a>
                        
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Sidebar;