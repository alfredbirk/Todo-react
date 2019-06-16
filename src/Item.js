import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export class Item extends React.Component
{
  constructor(props) {
    super(props);
  }

  removeItem = () => {
    this.props.handleClick(this.props.name)
  }

  render() {
    return (
      <div style={{display:"flex"}}>
        <div style={{margin:"2px"}}>{this.props.name}</div>
          <FontAwesomeIcon style={{ marginLeft:5, marginTop: 5 }} color="red" icon={faTimes} onClick={ this.removeItem} />
      </div>
    )
  }
}
