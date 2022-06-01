import background from './../assets/background2_upscaled.jpg';
const PrimaryColor = '';
const TextCol = '#FFFFFF';

const GlobalStyle = {
  defaultLayout: {
    color: TextCol,
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    height: '100vh',
  },
  pageTitle: {
    fontWeight: 'bold' as 'bold',
    fontSize: 30,
  },
  homePage: {
    paddingTop: 30,
  },
};

export default GlobalStyle;
