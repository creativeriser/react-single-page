import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="task-card form-card">
      <h3>Form Handling Task</h3>
      
      {}
      <form method="GET">
        <div>
          <label>Name: </label>
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
          />
        </div>
        <br />
        <div>
          <label>Email: </label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <br />
        <div>
          <label>Role: </label>
          <input 
            type="text" 
            name="role" 
            value={formData.role} 
            onChange={handleChange} 
          />
        </div>
        <br />
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default UserForm;