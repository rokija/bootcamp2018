import React from "react";

const UserCard = () => (
  <li className="list-group-item d-flex justify-content-between lh-condensed">
    <div className="d-flex">
      <img
        className="rounded-circle mr-3"
        src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
        alt="Generic placeholder"
        width="40"
        height="40"
      />
      <span>
        <h6 className="my-0">John Doe</h6>
        <small className="text-muted">Brief description</small>
      </span>
    </div>
    <span className="text-muted">5</span>
  </li>
);

export default UserCard;
