import React from 'react'
import axios from 'axios'

class Followers extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
            userData:[]
            
        }
        this.generateFollowers = this.generateFollowers.bind(this)
    }

    componentWillMount() {
        let parts = window.location.href.split("/"), username = parts[parts.length - 2];  
        //axios
  
    axios.get(`https://api.github.com/users/${username}/followers`)
        .then(response => {
            console.log(response.data)
            this.setState({
                userData : response.data
        })})
        .catch(err => { console.log(err); });

}  
generateFollowers(){
    return this.state.userData.map(follower => {
            return(
                <div className="w-full justify-center px-3 py-3 border-t border-gray-300 ">
                    <div className="pt-5">
                        <img src={follower.avatar_url} alt="" srcset="" className="inline h-8 w-8"/>
                        <span className="inline pl-4 pr-4">{follower.login}</span>
                        <span className="inline  pl-4 pr-4">{follower.bio}</span>
                        <div className="p-3"></div>
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
                   
                    {this.generateFollowers()}
                    
                </div>
            </div>

        );
    }

}

export default Followers;