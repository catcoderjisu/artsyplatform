import React from 'react';
import '../App.css';
import { useParams, Link } from 'react-router-dom';
import { data } from '../practicedata';




function Profile() {
  const params = useParams();
  console.log("params", params)

  return(
    <div>
      {data.map((work) => {
        return (
          <div key={work.id}>
            <div>할일: {work.id}</div>
            <Link to={`/works/${work.id}`}>
              <span style={{ cursor: 'pointer' }}>➡️ Go to: {work.todo}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Profile;
