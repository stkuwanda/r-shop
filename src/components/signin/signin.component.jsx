import React, { Component } from 'react';
import FormInput from '../forminput/forminput.component';
import CustomButton from '../custombutton/custombutton.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './signin.styles.scss';

class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='signin'>
				<h2>I already have an account</h2>
				<span className='title'>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						value={this.state.email}
						onChange={this.handleChange}
						required
						label='Email'
					/>
					{/* <label htmlFor=''>Email</label> */}
					<FormInput
						type='password'
						name='password'
						value={this.state.password}
						onChange={this.handleChange}
						required
						label='Password'
					/>
					{/* <label htmlFor=''>Password</label> */}
					<CustomButton type='submit'>sign in</CustomButton>
					<CustomButton onClick={signInWithGoogle}>Google Signin</CustomButton>
				</form>
			</div>
		);
	}
}

export default Signin;
