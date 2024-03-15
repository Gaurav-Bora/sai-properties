import  { useState } from 'react';
import axios from 'axios';
import { createUrl } from '../utils/Utils';






const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = createUrl('/user/signin.php');
      const response = await axios.post(
        apiUrl,
        { email, password }
      );

      if (response.status === 200) {
        // Successful login
        console.log(response.data);
        setError('');
        // Redirect or do something with the response data
      } else {
        // Login failed
        setError(response.data.StatusDescription || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Login;
