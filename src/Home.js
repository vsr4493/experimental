import React from 'react';
import logo from './react.svg';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';


const Styled = {
  Button: styled(Button)`
    font-size: 22px;
    color: green;
  `
}

class Home extends React.Component {
  render() {
    return (
      <Styled.Button variant="raised" color="primary">
        Home
      </Styled.Button>
    );
  }
}

export default Home;
