import styled from 'styled-components';

export const Container = styled.header`
  max-width: 100%;
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  padding: 0 30px;

  img {
    height: 20px;
    margin: 20px auto;
  }
`