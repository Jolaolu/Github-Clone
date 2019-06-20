import React from 'react'
import axios from 'axios'

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
                    <img src="" alt="" srcset="" className="inline"/>
                    <span className="inline pl-4 pr-4">{starred.name}</span>
                    <span className="inline  pl-4 pr-4">{starred.description}</span>
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
            <div>
                {this.getStarred()}
            </div>
            

        );
    }

}

export default Stars;