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
    // fontSize: 20,
  },
  pageTitle: {
    fontWeight: 'bold' as 'bold',
    fontSize: 45,
    textAlign: 'center' as 'center',
    marginBottom: 5,
  },
  pageSubTitle: {
    fontWeight: 'bold' as 'bold',
    fontSize: 25,
    textAlign: 'center' as 'center',
    marginBottom: 40,
  },
  homePage: {
    paddingTop: 30,
  },
  overviewCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.33)',
    borderRadius: 15,
  },
  overviewCardContainer: {
    borderRadius: 15,
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  },
  button: {
    borderRadius: 15,
  },
};

export default GlobalStyle;
