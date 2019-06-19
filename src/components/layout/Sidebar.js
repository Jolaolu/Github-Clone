import React from 'react';
import profile from '../../static/profile.png';
import Octicon, {Link} from '@primer/octicons-react'


function Sidebar() {
    return (
        <div className="h-full overflow-hidden ">
            <div>
                <img src={profile} alt="profile" srcset="" className="rounded-lg h-64 w-64"/>
                <div>
                    <div className="col mt-4 font-bold text-2xl ">
                        Sebastian Morr
                    </div>
                    <div className=" pt-0 mt-0 font-thin text-xl text-gray-700">
                        blinry
                    </div>
                    <div className="w-4/5  pt-3 pb-5">
                        <input type="submit" value="Follow" className="button col w-full h-8 rounded border border-gray-500 font-semibold text-sm focus:border-none"/>
                    </div>
                    <div className="inline">
                        <Octicon icon={Link} size='small'  srcset="" className=" w-8 inline pr-2"/>
                        <a href="http://morr.cc" className="inline hover:underline text-sm text-blue-600">http://morr.cc</a>
                    </div>
                    <div className="mt-3 text-xs font-thin text-gray-600">
                        <button href="#" className="hover:text-blue-600">Block or report user</button>
                    </div>
                    <div className="w-4/5 mt-4">
                        <div className="col pt-4 border-t border-gray-300 font-semibold">Organizations</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Sidebar;