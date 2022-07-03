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
  potCard: {
    opacity: 0.75,
    backgroundColor: 'purple',
    backdropFilter: 'blur(10px)',
    borderRadius: 15,
  },
  overviewCard: {
    opacity: 0.75,
    backgroundColor: 'purple',
    backdropFilter: 'blur(10px)',
    borderRadius: 15,
  },
};

export default GlobalStyle;
