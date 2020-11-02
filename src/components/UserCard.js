import React from 'react';

export default class UserCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { userInfo, index } = this.props;
		return (
			<div className="card">
				{userInfo.picture !== undefined && userInfo.picture.thumbnail !== undefined && (
					<div className="user_image_wrapper">
						<img src={userInfo.picture.thumbnail} alt="" />
					</div>
				)}

				<div className="user_info_wrapper">
					<p>Name: {`${userInfo.name.title} ${userInfo.name.first} ${userInfo.name.last}`}</p>
					<p>Email: {userInfo.email}</p>
					<p>Gender: {userInfo.gender}</p>
					<p>Phone: {userInfo.phone}</p>
				</div>
			</div>
		);
	}
}
