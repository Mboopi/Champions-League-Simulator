import GlobalStyle from '../styling/global-style';

const Footer = () => {
  return (
    <div style={GlobalStyle.footer.container}>
      <p style={GlobalStyle.footer.text}>
        This website is not associated with UEFA in any way. The UEFA word, the
        UEFA logo and all marks related to UEFA competitions are copyright of
        UEFA. This website was only made for fun to simulate a Champions League
        draw.
      </p>
      <p style={GlobalStyle.footer.text}>Version: 1.1 - Made by Mboopi</p>
    </div>
  );
};

export default Footer;
