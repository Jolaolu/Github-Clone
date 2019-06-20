import React from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Navigation from '../components/layout/Navigation';
import Overview from '../components/layout/Overview';
import Repositories from '../components/layout/Repositories';
import Stars from '../components/layout/Stars';
import Followers from '../components/layout/Followers';
import Following from '../components/layout/Following';

import axios from 'axios';



export class Layout extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
            currentView : "repo",
        }
        this.changeView = this.changeView.bind(this)
    }

    componentWillMount() {
        let parts = window.location.href.split("/"), username = parts[parts.length - 1];  
        this.setState({ username: username })
        //axios
        axios.get(`https://api.github.com/users/${username}`)
        .then(response=>this.setState({
            nother: response.data
        })
        )   
    }
    getView(){
        switch(this.state.currentView){
            case "overview" :
                window.history.replaceState("Overview", "Overview", `/user/${this.state.username}`)
                return <Overview {...this.state.nother}/>  
            case "repo" :
                window.history.replaceState("Repositories", "Repositories", `/user/${this.state.username}/Repositories`)
                return <Repositories {...this.state.nother}/>
            case "starred" :
                window.history.replaceState("Starred", "Starred", `/user/${this.state.username}/Stars`)
                return <Stars {...this.state.nother}/>  
            case "followers" :
                    window.history.replaceState("  Followers", "Followers", `/user/${this.state.username}/Followers`)
                     return <Followers {...this.state.nother}/>  
            case "following" :
                    window.history.replaceState("  Following", "Following", `/user/${this.state.username}/Following`)
                return <Following {...this.state.nother}/>
            default :
                return <Overview {...this.state.nother}/>
        }
    }
    changeView(newView){
        this.setState({currentView: newView})
    }
    render(){
        return (
        
            <div className="w-full Layout">
            
                <Header/>
                <div className=" flex w-full">
                    <div className="w-1/4  inset-y-0 h-screen ml-8 mt-6 ">
                        <Sidebar {...this.state.nother}/>
                    </div>
                    <div className="w-3/4  pt-8 flex-grow flex-shrink flex-auto ">
                        <div>
                            <Navigation {...this.state.nother} changer={this.changeView} />
                        </div>
                        {this.getView()}
                    </div>
                </div>
                
                
            </div>
        
            );
        }            
}

export default Layout;