import React from 'react';

class UserList extends React.Component {

    render(){
        return (
            
            <table key={this.props.users.users.randomUser.id} className="table table-responsive table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.users.users.users.map((value, index) => {
                        return [
                            <tr key={value.id}>
                                <th scope="row">{index + 1}</th>
                                    <td>{value.first_name}</td>
                                    <td>{value.last_name}</td>
                                    <td>{value.email}</td>
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
