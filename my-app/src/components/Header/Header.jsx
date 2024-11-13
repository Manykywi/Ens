import { NavLink } from 'react-router-dom';

import { AvatarContainer, Container, NavContainer } from './styles';

const Header = () => {
  return (
    <Container>
      <NavContainer>
        <NavLink to="/">Меню</NavLink>
        <NavLink to="/products">Товари</NavLink>
        <NavLink to="/help">Допомога</NavLink>
      </NavContainer>
      <AvatarContainer>
        <img src="path/to/avatar.jpg" alt="User Avatar" />
      </AvatarContainer>
    </Container>
  );
};

export default Header;
