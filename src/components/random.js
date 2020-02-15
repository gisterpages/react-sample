import React from 'react';

class RandomUser extends React.Component {
    
    randomTable = () => {
        let table = []
        if(this.props.users.users.randomUser.hasOwnProperty('id')){
            table = [
                <table key={this.props.users.users.randomUser.id} className="table table-responsive table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{this.props.users.users.randomUser.id}</th>
                            <td>{this.props.users.users.randomUser.first_name}</td>
                            <td>{this.props.users.users.randomUser.last_name}</td>
                            <td>{this.props.users.users.randomUser.email}</td>
                        </tr>
                    </tbody>
                </table>
            ]
            return table
        }
        return []
      }

    render(){
        return (
                <div>
                    {
                        this.randomTable()               
                    }
                </div>
        )
    }
  
}

export default RandomUser;
