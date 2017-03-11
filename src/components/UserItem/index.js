import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles.sass';

class UserItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="uIWrapper">
        <div className="upper">
          <div className="userImg" />
          <div className="itemInfo">
            <h3 className="itemName">
              <Link to="item/1234">Eloquent Javascript</Link>
            </h3>
            <p className="itemCost frm">$40</p>
            <p className="addDate frm">23 Jan, 2017</p>
            <p className="itemDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at.</p>
            <div className="tradeBtnWrapper lower">
              <button className="deleteBtn normalBtn">Remove Item</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserItem;
