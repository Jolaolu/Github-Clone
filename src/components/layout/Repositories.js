import React from 'react'
import axios from 'axios'

export class Repositories extends React.Component{

    constructor(){
        super()
        this.state = {
            username: '',
            userData:[]
            
        }
        this.generateRepos = this.generateRepos.bind(this)
    }

    componentWillMount() {
        let parts = window.location.href.split("/"), username = parts[parts.length - 2];  
        //axios
  
    axios.get(`https://api.github.com/users/${username}/repos`)
        .then(response => {
            console.log(response.data)
            this.setState({
                userData : response.data
        })})
        .catch(err => { console.log(err); });

}  
generateRepos(){
    return this.state.userData.map(repo => {
            return(
                <div className="w-full justify-center px-3 py-3 border-t border-gray-300 ">
                    <div className="pt-5">
                        <img src="" alt="" srcset="" className="inline"/>
                        <span className="inline pl-4 pr-4">{repo.name}</span>
                        <span className="inline  pl-4 pr-4">{repo.description}</span>
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
                  
                    {this.generateRepos()}
                   
                </div>
            </div>

        );
    }

}

export default Repositories;