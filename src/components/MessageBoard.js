import React, {PureComponent} from 'react';

import './message-board.css'


class MessageBoard extends PureComponent {





  render() {

    const Message = (props) => {
      return <div className={props.style}> <h3>{ props.text } </h3><h5>{props.date}</h5></div>
    }

    console.log('user_i : ', this.props.current_user_id )
     let messages = this.props.messages.map( (item) => {
       console.log(item._creator , this.props.current_user_id)
        let style = item._creator.toString() === this.props.current_user_id.toString() ? 'me' : 'other'
        return <Message style={style} text={item.text} date={item._created_at}></Message>
     })

    return (
      <div className="message-board">

         { messages }

      </div>);
  }
}

export default MessageBoard
