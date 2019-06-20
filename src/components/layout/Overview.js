import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Octicon, {Repo, Star, Project} from '@primer/octicons-react'
import axios from 'axios'

export class Overview extends React.Component{
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
    let pinned =[], repos = this.state.userData
    for (let index = 0; index < 6; index+=2) {
        let repo1 = repos[index], repo2 = repos[index+1]
        pinned.push(
            <div className="w-full flex inline">
            <div className="w-1/2 m-2 px-4  py-4 border border-gray-300 inline">
                <div>
                    <Octicon icon={Repo} size='small' ariaLabel='GitHub'/>
                    <span> <a href="http://" className="p-2 text-blue-500 text-sm font-semibold hover:underline">{repo1.name}</a> </span>
                    <div><a href="http://" className="p-3 text-xs">{repo1.description}</a></div>
                    <div className="pt-3 ml-4 ">
                        <div className="inline">
                            <span className="lang mr-1"> </span> 
                            <span className="text-xs mr-4 inline">CSS</span>
                        </div>
                        <div className="inline">
                            <Octicon icon={Star} size='small' className="mr-2" />
                            <div className="text-xs inline">28</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 m-2 px-4  py-4 border border-gray-300 inline">
                <div>
                    <Octicon icon={Repo} size='small' ariaLabel='GitHub'/>
                    <span> <a href="http://" className="p-2 text-blue-500 text-sm font-semibold hover:underline">{repo2.name}</a> </span>
                    <div><a href="http://" className="p-3 text-xs">{repo2.description}</a></div>
                    <div className="pt-3 ml-4 ">
                        <div className="inline">
                            <span className="lang mr-1"> </span> 
                            <span className="text-xs mr-4 inline">CSS</span>
                        </div>
                        <div className="inline">
                            <Octicon icon={Star} size='small' className="mr-2" />
                            <div className="text-xs inline">28</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        )
        
    }
    return pinned

}
render() {


    return (

        <div>
             <div className="w-full mt-6 pr-5"> 
                <div>
                    <span className="pin mt-4 mb-4">Pinned</span>
                </div>
                {this.generateRepos()}
                
            </div>

        </div>  
            

        );
    }

}

export default Overview;