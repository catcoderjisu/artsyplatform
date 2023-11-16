import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../practicedata';

function Profiles() {
    const params = useParams();
    console.log("params", params)
    const foundData = data.find((item) => {
        console.log("item.id:", item.id)
        console.log("params.id:", params.id)
        console.log("-------------")
        return item.id === parseInt(params.id);
    });
    console.log("foundData:", foundData)
    return (
        <div>ID: {foundData.id}. 할 일: {foundData.todo}</div>
    )
}

export default Profiles;