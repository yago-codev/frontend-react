import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container } from './styles';

import logoMoovin from './logo.svg';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title_theme } = useContext(ThemeContext);

  return (
    <Container>
      <img src={logoMoovin} alt="Logo da Moovin" />
      
      <Switch 
        onChange={toggleTheme}
        checked={title_theme === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={40}
        handleDiameter={20}
        offColor={shade(0.1, colors.secondary)}
        onColor={colors.moovin}
      />
    </Container>
  );
};

export default Header;