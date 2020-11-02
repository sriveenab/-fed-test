import React from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import UserCard from './UserCard';

export default class Users extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
	}

	componentDidMount() {
		this.getRandomUser();
	}

	onLoadButtonClick = () => {
		this.getRandomUser();
	};

	getRandomUser = () => {
		const { users } = this.state;
		// Making random user request
		axios
			.get('https://randomuser.me/api/')
			.then(response => {
				// handle success
				if (response.status === 200) {
					users.push(response.data.results[0]);
					this.setState({
						users
					});
				}
			})
			.catch(err => {
				// handle error
			});
	};

	render() {
		const { users } = this.state;
		return (
			<div>
				<div className="users_wrapper">
					{users !== undefined &&
						users.length !== 0 &&
						users.map((user, index) => {
							return (
								<div key={index.toString()} className="user_container">
									<UserCard index={index.toString()} userInfo={user} />
								</div>
							);
						})}
				</div>
				<div className="load_more_users_wrapper">
					<Button onClick={this.onLoadButtonClick}>Load More...</Button>
				</div>
			</div>
		);
	}
}
