import React from 'react';
import Header from './Header';
import Octicon, {Search} from '@primer/octicons-react';
import axios from 'axios';
import UserList from './UserList';


class UserSearch extends React.Component{
 
    constructor(){
      super();
      this.state = {
        username: '',
        info: '',
        followers:'',
        following: '',
        repositories:''
      }
     this.handleClick = this.handleClick.bind(this)
    };
    handleClick(e) {
      e.preventDefault();
      axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(response => this.setState({
        githubData:{
          avatar :response.data.avatar_url,
          username: response.data.login,
          name: response.data.name,
          bio: response.data.bio,
          followers:response.data.followers,
          following: response.data.following,
          repositories: response.data.public_repos,
          stars: response.data.starred_url,
          site: response.data.blog,
          formData: {
            username: '',
          }
          
        }
       
      })
    );
  
  } 
  changeHandler = e => {
    this.setState({
      username: e.target.value
    });
  }
  handleFormChange(e) {
    const obj = this.state.formData;
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  };
  render() {
 
    return(
        <div>
            <Header/>
            <div className="flex ">
                <div className="w-full flex flex-col items-center justify-center pt-10">
                        <div className="col">
                            <div className="inline"><Octicon icon={Search} size='medium'/></div>
                            <div className="inline text-3xl">Search more than <span className="font-bold"> 41M </span>users </div> 
                        </div>
                        <div className="inline pb-8">
                          <form onSubmit={this.handleClick} className ="flex w-full">
                            <input
                              type="text"
                              value={this.state.username}
                              onChange={this.changeHandler}
                              placeholder="Search GitHub "
                              required
                              className= "inline w-full outline shadow appearance-none border mr-2 search-email"
                            />
                            <input className="inline button col rounded border border-gray-500 font-semibold text-sm " type="submit" value="Search"/>
                          </form>
                        </div>
                        <UserList list={this.state.githubData}/>
                  </div> 
                </div>   
            </div>

    );
  }
}

export default UserSearch;