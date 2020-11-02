import React from 'react';
import Users from './components/Users';
import './App.css';

export default function App() {
	return (
		<div>
			<div>
				<h4 style={{ textAlign: 'center' }}>USER INFORMATION</h4>
			</div>
			<Users />
		</div>
	);
}
