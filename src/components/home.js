import React from 'react';
import UserList from './userList'
import UserForm from './form'
import RandomUser from './random'

class Home extends React.Component {
    
    render(){
        return (
            <div>
                <div className="bg-primary">
                <header className="container">
                    <h1 className="text-white"><b>GISTER PAGES</b></h1>
                </header>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="table-responsive">
                                <UserList users={this.props.users}/>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-primary" onClick={()=>this.props.users.getRandom(this.props.users.users.randomUser)}>Pick Random</button>
                            </div>
                            <RandomUser users = {this.props.users}/>
                        </div>
                        <div className="col-sm-4">
                            <UserForm users={this.props.users}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  
}

export default Home;
