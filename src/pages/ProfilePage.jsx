import React from 'react';
import '../index.css';

function ProfilePage() {
  return (
    <div className="page-container">
      <h1>Profile Page</h1>
      <p>Welcome to your profile! This page is only accessible to authenticated users.</p>
      <p>Here you can view and manage your personal information, settings, and more.</p>
      <p>
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="User Profile"
          style={{ maxWidth: '200px', borderRadius: '50%', margin: '1rem 0' }}
        />
      </p>
      <p><b>Name:</b> John Doe</p>
      <p><b>Email:</b> john.doe@example.com</p>
      <p><b>Member Since:</b> January 1, 2023</p>
    </div>
  );
}

export default ProfilePage;
