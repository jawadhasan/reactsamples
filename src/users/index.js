import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const apiURL = "https://kjsa0fp0tb.execute-api.eu-central-1.amazonaws.com/Prod/api/users"

const Users = () => {
    const navigate = useNavigate();
    const [usersData, setUserData] = useState([]);

    useEffect(() => {
        getUsersWithAxios();
    }, []);// An empty array means the callback will only execute once   

    const getUsersWithAxios = async () => {
        const response = await axios.get(apiURL);
        console.log(response.data);
        setUserData(response.data);
    };

    const onDelete = async (e) => {
        const id = e.target.dataset.letter;
        const url = `${apiURL}/${id}`;
        console.log(url);
        const response = await axios.delete(url);
        console.log(response.data);
        await getUsersWithAxios(); //reload from server
    }
    const onClear = (e) => {       
        console.log('onClear', e.target.value);
        setUserData([]);
    };
    const onAddUser = async (e) => {
        console.log('addUser');
        navigate("/users/add");
    }

    return (
        <div className="container">
            <h5>Users - API</h5>

            <button className="btn btn-warning" onClick={onClear}>Clear</button>            
            <button className="btn btn-info" onClick={getUsersWithAxios}>Get (axios)</button>
            <button className="btn btn-primary float-end" onClick={onAddUser}>+Add</button>

            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData.map((user) => (
                        <tr key={user.id}>
                            <th>{user.firstName} {user.lastName}</th>
                            <th>{user.email} </th>
                            <th>
                                {/* <span className="btn btn-info" data-letter={user.id} onClick={onDetails}>Details</span>&nbsp;  */}
                                <Link to={`/users/${user.id}`}> <span className="btn btn-info">Details</span></Link>
                                <Link to={`/users/edit/${user.id}`}> <span className="btn btn-primary">Edit</span></Link>
                                <span className="btn btn-danger" data-letter={user.id} onClick={onDelete}>Delete</span>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default Users;