import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../state/state';

import styled from 'styled-components';

const Header = () => {
  const [{ currentUser }] = useStateValue();

  const style = { marginRight: '5px' };

  return (
    <>
      <h2>Questions & Answers</h2>
      {currentUser ? (
        <>
          <Link to="/questions" style={style}>
            Home
          </Link>
        </>
      ) : null}
    </>
  );
};

export default Header;
