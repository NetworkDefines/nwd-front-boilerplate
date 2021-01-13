import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { device } from '@/theme';

const StyledDiv = styled.div`
  margin: 30px 0;
  background-color: ${({ theme }) => theme.gray};
`;

const CustomButton = styled(Button)`
  color: yellow;
  background-color: skyblue;
`;

const StyledDiv2 = styled.div`
  display: flex;
  margin: 30px 0;
  justify-content: space-between;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const StyledButton = styled(Button)`
  color: white;
  background-color: #435db8;
  width: 100%;
  & + & {
    margin-top: 5px;
  }

  @media ${device.tablet} {
    & + & {
      margin-top: 0;
      margin-left: 5px;
    }
  }
`;

function LandingPage(): ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h3">test 한글</Typography>
        <p>
          Edit <code>src/pages/Auth/Landing.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <StyledDiv>StyledDiv sample</StyledDiv>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <CustomButton variant="contained" color="primary">
        Hello World2
      </CustomButton>

      <StyledDiv2>
        <StyledButton variant="contained" color="primary">
          Media Query sample1
        </StyledButton>
        <StyledButton
          style={{ backgroundColor: '#2C4095' }}
          variant="contained"
          color="primary"
        >
          Media Query sample2
        </StyledButton>
      </StyledDiv2>
    </div>
  );
}

export default LandingPage;
