import React, {PureComponent} from 'react';

import './listUserPanel.css'


class ListUsersPanel extends PureComponent {



  transformUsers(users) {

    const UserItem = (props) => {
      return <div onClick={ this.props.selectUser.bind(this,props.user._id) } className="list-user-panel-item">{props.user.name}</div>
    }

    return users.map((item) => {
      return <UserItem  key={item._id} user={item} ></UserItem>
    })

  }

  render() {





    return (
      <div className="user-panel">

        {this.transformUsers(this.props.users)}

      </div>);
  }
}

export default ListUsersPanel
