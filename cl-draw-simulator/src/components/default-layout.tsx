import Container from 'react-bootstrap/esm/Container';
import GlobalStyle from '../styling/global-style';

const DefaultLayout = ({ children, style }: any) => {
  return (
    <div style={GlobalStyle.defaultLayout}>
      <Container style={style}>{children}</Container>
    </div>
  );
};

export default DefaultLayout;
