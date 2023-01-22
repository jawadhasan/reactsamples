import { useState, useEffect } from "react";
import axios from "axios";

const gitHubUrl = "https://api.github.com/users/jawadhasan"

export default function GitHubUser() {

    const [userData, setUserData] = useState({});
    useEffect(() => {
        getGiHubUserWithAxios();
    }, []);    

    // const getGitHubUserWithFetch = async () => { };
    const getGitHubUserWithFetch = async () => {
        const response = await fetch(gitHubUrl);
        const jsonData = await response.json();
        console.log(jsonData);
        setUserData(jsonData);
    };

    const getGiHubUserWithAxios = async () => {
        const response = await axios.get(gitHubUrl);
        setUserData(response.data);
    };

    return (
        <div className="Card">
            <div className="card-body">
                <h5 className="card-title">{userData.login}</h5>
                <div className="card-text"><span className="fa fa-map-marker"></span> {userData.location}</div>
                <div className="card-text"><span className="fa fa-chrome"></span> {userData.blog}</div>
                <div className="card-text"><span className="fa fa-building"></span> Company: {userData.company}</div>
            </div>
        </div>
    )
}