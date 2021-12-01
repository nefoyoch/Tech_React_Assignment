import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UserList = (props) =>{
    return (
        <Card className = {classes.users}>
        
    <table className="table table-dark">
        <thead>
            <tr>
                <th scope="col">Emp. Id</th>
                <th scope="col">Name</th>
                <th scope="col">Department</th>
            </tr>
        </thead>
            
        <tbody>
            
                    {
                        props.users.map(user => <tr key={user.id}>
                            <td>{user.age}</td>
                            <td>{user.name}</td>
                            <td>{user.dep}</td>
                        </tr>)
                    }
                
            
        </tbody>
    </table>
    </Card>
    )
}

export default UserList;