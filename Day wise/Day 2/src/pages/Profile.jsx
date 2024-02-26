import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import HomeScreen from './Home';

const Profile = () => {
    const navigate=useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div>
        <div className='na'>
        <HomeScreen/>
        </div> 
        <div className="bo">
      <h1>Profile Page</h1>
      <button onClick={handleLogout}>Logout</button>
      <Link to="/edit-profile">
        <button>Edit Profile</button>
      </Link>
    </div>
    </div>
  );
};

export default Profile;
