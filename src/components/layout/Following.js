import React from 'react'
import axios from 'axios'

class Following extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
            userData:[]
            
        }
        this.generateFollowing = this.generateFollowing.bind(this)
    }

    componentWillMount() {
        let parts = window.location.href.split("/"), username = parts[parts.length - 2];  
        //axios
  
    axios.get(`https://api.github.com/users/${username}/following`)
        .then(response => {
            console.log(response.data)
            this.setState({
                userData : response.data
        })})
        .catch(err => { console.log(err); });

}  
generateFollowing(){
    return this.state.userData.map(follow => {
            return(
                <div className="w-full justify-center px-3 py-3 border-t border-gray-300 ">
                    <div className="pt-5">
                        <img src={follow.avatar_url} alt="" srcset="" className="inline h-8 w-8"/>
                        <span className="inline pl-4 pr-4">{follow.login}</span>
                        <span className="inline  pl-4 pr-4">{follow.bio}</span>
                        <input className="inline float-right justify-center button col w-1/14 h-6 rounded border border-gray-500 font-semibold text-sm pl-4 pr-4" type="submit" value="Follow"/>
                                <div className="p-3">
                                   <span className="text-sm  pl-4 pr-4">{follow.bio}</span>
                                </div>
                        <span></span>
                    </div>
                </div>
            )

        }
    )
}  
    render(){
        return(
            <div className="flex w-full pt-3 px-3 py-3">
                <div className="w-full col">
                   
                    {this.generateFollowing()}
                    
                </div>
            </div>

        );
    }

}

export default Following;