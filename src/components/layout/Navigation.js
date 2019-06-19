import React from 'react'

function Navigation() {
    return (
        <div>
            <div className="pin flex justify-start py-3 mr-6 border-b border-gray-300">
            <ul className=" text-sm  focus:font-semibold">
                        <li className="inline mr-5">Overview</li>
                        <li className="inline ml-5 mr-5">Repositories</li> 
                        <li className="inline ml-5 mr-5">Projects</li>
                        <li className="inline ml-5 mr-5">Stars</li>
                        <li className="inline ml-5 mr-5">Followers</li>
                        <li className="inline ml-5 mr-5">Following</li>
                    </ul>
            </div>
        </div>
        
    );
}

export default Navigation;