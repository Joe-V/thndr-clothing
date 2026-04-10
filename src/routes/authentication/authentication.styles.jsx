import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 900px;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: 95%;

    // This targets the div containers inside SignInForm and SignUpForm
    > div {
      margin-bottom: 50px;
      width: 100%;
    }
  }
`;

// Also moving the inline h1 styles here for cleaner code
export const AuthenticationTitle = styled.h1`
  text-align: center;
  margin: 20px 0;
`;