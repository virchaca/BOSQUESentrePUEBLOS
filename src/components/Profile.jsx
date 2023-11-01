// import React from 'react';
import PropTypes from 'prop-types';
import moni7 from "../images/moni7.png";
import '../styles/Profile.scss';

function Profile(props) {
  const avatar = props.avatar === '' ? moni7 : props.avatar;
  return (
    <div className="profile">
      <div
        className="profile__avatar"
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;