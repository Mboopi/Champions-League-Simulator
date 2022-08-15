import { Image } from 'react-bootstrap';
import GlobalStyle from '../styling/global-style';

import Logo from '../assets/header.png';

const Header = () => {
  return (
    <div>
      <Image src={Logo} width={125} style={GlobalStyle.headerImage} />
      <p style={GlobalStyle.pageTitle}>CL SIMULATOR</p>
      <p style={GlobalStyle.pageSubTitle}>Group Stage 2022/23</p>
    </div>
  );
};

export default Header;
