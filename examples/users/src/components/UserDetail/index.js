import React, { PropTypes } from 'react';

function UserDetail({ user }) {
  return (
    <div className="user-preview">
      {user.avatarUrl ?
        <img src={user.avatarUrl} height="50" width="50" role="presentation" /> : null
      }
      <h5>{user.firstName} {user.lastName}</h5>
    </div>
  );
}

UserDetail.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    avatarUrl: PropTypes.avatarUrl,
  }).isRequired,
};

export default UserDetail;
