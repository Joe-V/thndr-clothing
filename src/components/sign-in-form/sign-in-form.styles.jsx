import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    padding: 0 10px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media screen and (max-width: 400px) {
    flex-direction: column;
    
    /* This ensures standard buttons take full width on mobile */
    button {
      width: 100%;
    }
  }
`;