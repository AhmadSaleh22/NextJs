import React, { useEffect, useState } from 'react'
import axios from "axios"
import Link from 'next/link';
import FollowersListComponent from "./FollowersListComponent";

export default function FollowersList() {

    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        fetchFollowers()
    }, []);

    const fetchFollowers = async () => {
        const {data} = await axios.get("https://randomuser.me/api/?results=5")
        setFollowers(data.results)
    }

    return (
        <FollowersListComponent followers={followers}/>
    )
}
