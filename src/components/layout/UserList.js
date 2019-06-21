import React from 'react'
import {Link} from 'react-router-dom'

class UserList extends React.Component{
    render(){
        if (!this.props.list) {
            return <div>LOADING FOLLOWERS...</div>
            }
            const {profieData} = this.props.list;
            console.log("pro", profieData   )
        return(
            <div className="flex w-full pt-3 px-3 py-3">
                <div className="w-full col">
                    <div className="w-full flex flex-col items-center justify-center px-3 py-3 border-t border-gray-300 ">
                        <div className="pt-5">
                            <Link to={`user/${this.props.list.username}`}>
                                <img src={this.props.list.avatar} alt="" srcset="" className="inline h-8 w-8"/>
                                <span className="inline pl-4 pr-4">{this.props.list.username}</span>
                                <span className="inline  pl-4 pr-4">{this.props.list.name}</span>
                                <input className="inline justify-center button col w-1/14 h-6 rounded border border-gray-500 font-semibold text-sm pl-4 pr-4" type="submit" value="Follow"/>
                                <div className="p-3"></div>
                                <span className=" w-1/3 text-xs">{this.props.list.bio}</span>
                            </Link>
                        </div>
                    </div>  
                </div>
            </div>

        );
    }

}

export default UserList;