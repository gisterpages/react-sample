import React from 'react';

class UserList extends React.Component {

    delete = (index) => {
        this.props.users.deleteUser(index)
    }

    render(){
        return (
            
            <table key={this.props.users.users.randomUser.id} className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.users.users.users.map((value, index) => {
                        return [
                            <tr key={value.id}>
                                <th scope="row">{index + 1}</th>
                                    <td>{value.id}</td>
                                    <td>{value.first_name}</td>
                                    <td>{value.last_name}</td>
                                    <td>{value.email}</td>
                                    <td>
                                        <button className="btn btn-warning" onClick={()=> this.delete(index)}>Delete</button>
                                    </td>
                                </tr>
                            ]
                        })
                    }
                </tbody>
            </table>
        )
    }
  
}

export default UserList;
