import React from 'react'
import Overview from './Overview';
import {Link} from 'react-router-dom'

const Navigation = props => {
    return (
        <div>
            <div className="col flex justify-start py-3 mr-6 border-b border-gray-300">
            <ul className=" text-sm  focus:font-semibold">
                        <li onClick={()=> props.changer("overview")} className=" text-sm inline mr-5">Overview<span  className="inline ml-3 text-xs bg-gray-200 rounded-lg"></span></li>
                        <li onClick={()=> props.changer("repo") }className="inline ml-5 mr-5"> Repositories <span className="inline ml-3 text-xs bg-gray-200 rounded-lg">{props.public_repos}</span> </li> 
                        <li  className="inline ml-5 mr-5">Projects<span></span> </li>
                        <li onClick={()=> props.changer("starred")} className="inline ml-5 mr-5">Stars<span className="inline ml-3 mr-3 text-xs bg-gray-200 rounded-lg">{}</span> </li>
                        <li onClick={()=> props.changer("followers")} className="inline ml-5 mr-5">Followers<span className="inline ml-3 text-xs bg-gray-200 rounded-lg">{props.followers}</span></li>
                        <li onClick={()=> props.changer("following")} className="inline ml-5 mr-5">Following<span className="inline ml-3 text-xs bg-gray-200 rounded-lg">{props.following}</span> </li>
                    </ul>
            </div>
        </div>
        
    );
}

export default Navigation;