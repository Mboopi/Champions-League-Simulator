import background from './../assets/background2_upscaled.jpg';

const TextCol = '#FFFFFF';
const defaultRadius = 15;

const GlobalStyle = {
  defaultLayout: {
    color: TextCol,
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    minHeight: '100vh',
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
    borderRadius: defaultRadius,
  },
  overviewCardContainer: {
    borderRadius: defaultRadius,
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  },
  button: {
    borderRadius: defaultRadius,
  },
  toast: {
    header: {
      borderTopLeftRadius: defaultRadius,
      borderTopRightRadius: defaultRadius,
    },
    body: {
      borderRadius: defaultRadius,
      color: 'black',
    },
  },
  CONSTANTS: {
    clubFlagWidth: 14,
    clubFontSize: 12,
  },
};

export default GlobalStyle;
