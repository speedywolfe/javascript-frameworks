import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';


class UserList extends Component {

	createListItems() {
		return this.props.users.map((user) => {
			return(()
				<li key={user.id} onclick={() => this.props.selectUser(user)}>{user.first} {user.last}</li>
			);
		};
	}

	render() {
		return(
			<ul>
				<li> </li>
				<li> </li>
				<li> </li>
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: state.users
	};
}

function matchDispathToProps(dispatch) {
	return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps)(UserList);