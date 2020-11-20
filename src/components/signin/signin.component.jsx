import React, { Component } from 'react';
import FormInput from '../forminput/forminput.component';
import CustomButton from '../custombutton/custombutton.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './signin.styles.scss';

class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = async e => {
		e.preventDefault();
		const {email, password} = this.state;
		try{
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		}catch(err){
			console.log(err);
		}	
	};

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const {email, password} = this.state;
		
		return (
			<div className='signin'>
				<h2>I already have an account</h2>
				<span className='title'>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						value={email}
						onChange={this.handleChange}
						required
						label='Email'
					/>
					{/* <label htmlFor=''>Email</label> */}
					<FormInput
						type='password'
						name='password'
						value={password}
						onChange={this.handleChange}
						required
						label='Password'
					/>
					<div className='buttons'>
						<CustomButton type='submit'>sign in</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignin>
							google sign in
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default Signin;
