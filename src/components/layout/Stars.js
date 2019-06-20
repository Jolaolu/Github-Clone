import React from 'react'
import axios from 'axios'
import Octicon, {Repo, Star, RepoForked} from '@primer/octicons-react'

class Stars extends React.Component{
 constructor(){
    super()
    this.state = {
        username: '',
        userData:[]
        
    }
    this.getStarred = this.getStarred.bind(this)
}

componentWillMount() {
    let parts = window.location.href.split("/"), username = parts[parts.length - 2];  
    //axios

axios.get(`https://api.github.com/users/${username}/starred`)
    .then(response => {
        console.log(response.data)
        this.setState({
            userData : response.data
    })})
    .catch(err => { console.log(err); });

}  
getStarred(){
return this.state.userData.map(starred => {
        return(
            <div className="w-full justify-center px-3 py-3 border-t border-gray-300 ">
                                    <div className="pt-5">
                        <span className="inline pl-4 pr-4">{starred.name}</span>
                        <button type="submit" className="inine button col w-1/12 h-8 float-right rounded border border-gray-500 font-semibold text-sm focus:border-none">
                            <Octicon icon={Star} size='small'/> Star
                        </button>
                        <div className="p-3">
                        <span className="text-sm  pl-4 pr-4">{starred.description}</span>
                        </div>
                        <div className="inline ml-3">
                            <span className="lang mr-1"> </span> 
                                <span className="text-xs mr-4 inline">{starred.language}</span>
                                <Octicon icon={Star} size='small' className="mr-2" />
                                <div className="text-xs inline">{starred.stargazers_count}</div>
                                <Octicon icon={RepoForked} size='small' className="mr-2 ml-6 inline"/>
                                <div className="inline ml-1 mr-1 text-xs">{starred.forks_count}</div>
                            </div>
                    </div>
            </div>
        )

    }
)
}  
    render(){
        return(
            <div>
                {this.getStarred()}
            </div>
            

        );
    }

}

export default Stars;