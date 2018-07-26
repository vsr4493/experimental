import React from 'react';
import logo from './react.svg';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';


const StyledButton = styled(Button)`
  font-size: 22px;
`; 

class Home extends React.Component {
  render() {
    return (
      <Button variant="raised" color="primary">
        Hello
      </Button>
    );
  }
}

export default Home;
