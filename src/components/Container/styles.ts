import styled from 'styled-components';

export const Card = styled.section`
  height: calc(90% - 54px);
  margin: 30px;
  padding: 0 10px 10px 10px;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.tertiary};

  h1 {
    margin: 25px 0 25px 20px;
    font-size: 18px;
    color: ${props => props.theme.colors.font_primary};
  }
`;