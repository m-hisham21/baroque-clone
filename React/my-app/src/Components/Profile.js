import React, { useState, useEffect } from 'react'
import "./Profile.css"
import { useNavigate } from 'react-router-dom'
function Profile() {

  useEffect(() => {
    document.title = "Signin - BAROQUE"
  }, [])

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'register'
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  // Login state
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // Register state
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Handle login input change
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  // Handle register input change
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value
    });
  };

  // Login function
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      setMessageType('error');
      setMessage('Please fill in all fields');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:5555/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password
        })
      });

      const data = await response.json();

      if (response.ok && data.status === 'success') {
        setMessageType('success');
        setMessage('Login successful! Redirecting...');

        // Save token to localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('userEmail', loginData.email);

        // Clear form
        setLoginData({ email: '', password: '' });

        // Redirect after 1.5 seconds
        setTimeout(() => {
          navigate('/Body');
        }, 1500);
      } else {
        setMessageType('error');
        setMessage(data.message || 'Login failed');
      }
    } catch (error) {
      setMessageType('error');
      setMessage('Error: ' + error.message);
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!registerData.name || !registerData.email || !registerData.password || !registerData.confirmPassword) {
      setMessageType('error');
      setMessage('Please fill in all fields');
      return;
    }

    if (registerData.password !== registerData.confirmPassword) {
      setMessageType('error');
      setMessage('Passwords do not match');
      return;
    }

    if (registerData.password.length < 6) {
      setMessageType('error');
      setMessage('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:5555/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: registerData.name,
          email: registerData.email,
          password: registerData.password
        })
      });

      const data = await response.text();

      if (response.ok) {
        setMessageType('success');
        setMessage('Registration successful! Please login now.');

        // Clear form
        setRegisterData({ name: '', email: '', password: '', confirmPassword: '' });

        // Switch to login tab after 2 seconds
        setTimeout(() => {
          setActiveTab('login');
          setMessage('');
        }, 2000);
      } else {
        setMessageType('error');
        setMessage(data || 'Registration failed');
      }
    } catch (error) {
      setMessageType('error');
      setMessage('Error: ' + error.message);
      console.error('Register error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div style={{ backgroundColor: "rgb(226, 226, 226)", minHeight: "100vh", paddingBottom: "40px" }}>
        <h2 style={{ backgroundColor: "rgb(226, 226, 226)" }} id='ph2'>Profile</h2>

        {/* Message Display */}
        {message && (
          <div style={{
            margin: "20px auto",
            maxWidth: "500px",
            padding: "12px 20px",
            borderRadius: "5px",
            textAlign: "center",
            backgroundColor: messageType === 'success' ? '#d4edda' : '#f8d7da',
            color: messageType === 'success' ? '#155724' : '#721c24',
            border: `1px solid ${messageType === 'success' ? '#c3e6cb' : '#f5c6cb'}`
          }}>
            {message}
          </div>
        )}

        {/* Tabs */}
        <div className='pdiv'>
          <div style={{
            display: 'flex',
            gap: '20px',
            marginBottom: '20px',
            borderBottom: '2px solid #ddd',
            paddingBottom: '10px'
          }}>
            <button
              onClick={() => { setActiveTab('login'); setMessage(''); }}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '16pt',
                fontWeight: activeTab === 'login' ? 'bold' : 'normal',
                cursor: 'pointer',
                paddingBottom: '10px',
                borderBottom: activeTab === 'login' ? '3px solid black' : 'none',
                marginBottom: '-10px'
              }}
            >
              Sign In
            </button>
            <button
              onClick={() => { setActiveTab('register'); setMessage(''); }}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '16pt',
                fontWeight: activeTab === 'register' ? 'bold' : 'normal',
                cursor: 'pointer',
                paddingBottom: '10px',
                borderBottom: activeTab === 'register' ? '3px solid black' : 'none',
                marginBottom: '-10px'
              }}
            >
              Create Account
            </button>
          </div>

          {/* Login Form */}
          {activeTab === 'login' && (
            <form onSubmit={handleLogin}>
              <h3>Sign In</h3>
              <p style={{ fontSize: "12pt" }}>Enter your email and password</p>

              <div style={{ marginBottom: '15px' }}>
                <input
                  id='csip'
                  type='email'
                  placeholder='Email Address'
                  name='email'
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                  disabled={loading}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <input
                  id='csip'
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                  disabled={loading}
                />
              </div>

              <button
                id='pbtn'
                type='submit'
                disabled={loading}
                style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? 'Signing In...' : 'Sign In ➔'}
              </button>

              <div style={{ marginTop: '20px' }}>
                <input type='checkbox' disabled />
                <span> Email me with news and offers </span>
              </div>

              <p style={{ fontSize: "10pt", textAlign: "center", marginTop: '20px' }}>
                By continuing, you agree to our
                <button className='polices' onClick={() => navigate("/policies/terms-of-service")}>
                  <u>Terms of service</u>
                </button>
              </p>
              <p style={{ fontSize: "10pt", textAlign: "center" }}>
                <button className='polices' onClick={() => navigate("/policies/privacy-policy")}>
                  <u>Privacy policy</u>
                </button>
              </p>
            </form>
          )}

          {/* Register Form */}
          {activeTab === 'register' && (
            <form onSubmit={handleRegister}>
              <h3>Create Account</h3>
              <p style={{ fontSize: "12pt" }}>Fill in your details to create a new account</p>

              <div style={{ marginBottom: '15px' }}>
                <input
                  id='csip'
                  type='text'
                  placeholder='Full Name'
                  name='name'
                  value={registerData.name}
                  onChange={handleRegisterChange}
                  required
                  disabled={loading}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <input
                  id='csip'
                  type='email'
                  placeholder='Email Address'
                  name='email'
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  required
                  disabled={loading}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <input
                  id='csip'
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  required
                  disabled={loading}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <input
                  id='csip'
                  type='password'
                  placeholder='Confirm Password'
                  name='confirmPassword'
                  value={registerData.confirmPassword}
                  onChange={handleRegisterChange}
                  required
                  disabled={loading}
                />
              </div>

              <button
                id='pbtn'
                type='submit'
                disabled={loading}
                style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? 'Creating Account...' : 'Create Account ➔'}
              </button>

              <div style={{ marginTop: '20px' }}>
                <input type='checkbox' disabled />
                <span> Email me with news and offers </span>
              </div>

              <p style={{ fontSize: "10pt", textAlign: "center", marginTop: '20px' }}>
                By continuing, you agree to our
                <button className='polices' onClick={() => navigate("/policies/terms-of-service")}>
                  <u>Terms of service</u>
                </button>
              </p>
              <p style={{ fontSize: "10pt", textAlign: "center" }}>
                <button className='polices' onClick={() => navigate("/policies/privacy-policy")}>
                  <u>Privacy policy</u>
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
