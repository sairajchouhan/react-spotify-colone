import React from 'react';
import '../styles/Header.css';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDataLayerValue } from '../context/DataLayer';

const Header = () => {
  const [{ user }] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
