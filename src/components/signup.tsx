import React, { useState, FormEvent } from 'react';
import './App.css';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [sex, setSex] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  const handleInputChange = (field: string, value: string) => {
    switch (field) {
      case 'firstName':
        setFirstName(value);
        clearValidation('firstName');
        break;
      case 'lastName':
        setLastName(value);
        clearValidation('lastName');
        break;
      case 'birthdate':
        setBirthdate(value);
        clearValidation('birthdate');
        break;
      case 'sex':
        setSex(value);
        clearValidation('sex');
        break;
      case 'contact':
        setContact(value);
        clearValidation('contact');
        break;
      case 'email':
        setEmail(value);
        clearValidation('email');
        break;
      case 'password':
        setPassword(value);
        clearValidation('password');
        checkPasswordStrength(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        clearValidation('confirmPassword');
        break;
      default:
        break;
    }
  };

  const clearValidation = (field: string) => {
    const element = document.getElementById(field);
    if (element) {
      element.classList.remove('is-invalid');
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const checkPasswordStrength = (value: string) => {
    if (!value.trim()) {
      setPasswordStrength('');
      return;
    }
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const hasUppercase = uppercaseRegex.test(value);
    const hasNumber = numberRegex.test(value);
    const hasSpecialChar = specialCharRegex.test(value);

    // Calculate password strength based on conditions
    if (value.length < 6 || !hasUppercase || !hasNumber || !hasSpecialChar) {
      setPasswordStrength('Weak');
    } else if (value.length >= 6 && value.length <= 10) {
      setPasswordStrength('Medium');
    } else {
      setPasswordStrength('Strong');
    }
  };

  const validateForm = () => {
    const errors = {
      firstName: 'Please enter your first name.',
      lastName: 'Please enter your last name.',
      birthdate: 'Please select your birthdate.',
      sex: 'Please select your gender.',
      contact: 'Please enter your contact number.',
      email: 'Please enter a valid email address.',
      password: 'Please enter a password.',
      confirmPassword: 'Please confirm your password.',
    };

    let isValid = true;

    // Check each field for validity
    if (!firstName.trim()) {
      document.getElementById('firstName')?.classList.add('is-invalid');
      isValid = false;
    }
    if (!lastName.trim()) {
      document.getElementById('lastName')?.classList.add('is-invalid');
      isValid = false;
    }
    if (!birthdate) {
      document.getElementById('birthdate')?.classList.add('is-invalid');
      isValid = false;
    }
    if (!sex) {
      document.getElementById('sex')?.classList.add('is-invalid');
      isValid = false;
    }
    if (!contact.trim()) {
      document.getElementById('contact')?.classList.add('is-invalid');
      isValid = false;
    }
    if (!email.trim()) {
      document.getElementById('email')?.classList.add('is-invalid');
      isValid = false;
    }
    if (!password.trim()) {
      document.getElementById('password')?.classList.add('is-invalid');
      isValid = false;
    }
    if (!confirmPassword.trim()) {
      document.getElementById('confirmPassword')?.classList.add('is-invalid');
      isValid = false;
    }
    if (password !== confirmPassword) {
      document.getElementById('password')?.classList.add('is-invalid');
      document.getElementById('confirmPassword')?.classList.add('is-invalid');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      alert('Registration successful!');
      window.location.href = '/login';
    }
  };

  return (
    <div className="container-xxl position-relative p-0">
      <div className="container-xxl d-flex justify-content-center align-items-center pt-5 bg-dark hero-header" style={{ height: '100vh' }}>
        <div className="card w-75">
          <div className="text-center border-0 pt-3">
            <h5 className="section-title ff-secondary fs-2 text-center text-danger fw-normal">
              Sign Up
            </h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">First Name:</label>
                <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => handleInputChange('firstName', e.target.value)} />
                <div className="invalid-feedback">Please enter your first name.</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">Last Name:</label>
                <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => handleInputChange('lastName', e.target.value)} />
                <div className="invalid-feedback">Please enter your last name.</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="birthdate" className="form-label">Birthdate:</label>
                <input type="date" className="form-control" id="birthdate" value={birthdate} onChange={(e) => handleInputChange('birthdate', e.target.value)} />
                <div className="invalid-feedback">Please select your birthdate.</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="sex" className="form-label">Sex:</label>
                <select className="form-select" id="sex" value={sex} onChange={(e) => handleInputChange('sex', e.target.value)}>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <div className="invalid-feedback">Please select your sex.</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="contact" className="form-label">Contact:</label>
                <input type="text" className="form-control" id="contact" value={contact} onChange={(e) => handleInputChange('contact', e.target.value)} />
                <div className="invalid-feedback">Please enter your contact information.</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => handleInputChange('email', e.target.value)} />
                <div className="invalid-feedback">Please enter your email address.</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password:</label>
                <input type={showPassword ? 'text' : 'password'} className="form-control" id="password" value={password} onChange={(e) => handleInputChange('password', e.target.value)} />
                {password && <small className={`form-text text-${passwordStrength === 'Weak' ? 'danger' : passwordStrength === 'Medium' ? 'warning' : 'success'}`}>{`Password Strength: ${passwordStrength}`}</small>}
                <div className="invalid-feedback">Please enter your password.</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                <div className="input-group">
                  <input type={showPassword ? 'text' : 'password'} className="form-control" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange('confirmPassword', e.target.value)} />
                  <button type="button" className="btn btn-danger" onClick={handleTogglePassword}>{showPassword ? 'Hide' : 'Show'}</button>
                </div>
                <div className="invalid-feedback">Please confirm your password.</div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-danger mt-3 w-100">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
