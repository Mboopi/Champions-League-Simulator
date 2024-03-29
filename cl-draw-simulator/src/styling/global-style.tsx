import background from './../assets/background2_upscaled.jpg';

const TextCol = '#FFFFFF';
const defaultRadius = 15;
const defaultShadow = '0px 0px 10px blue';
const titleColor = 'rgb(111, 160, 250)';

const GlobalStyle = {
  defaultLayout: {
    color: TextCol,
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    minHeight: '100vh',
    fontFamily: 'Product Sans',
  },
  pageTitle: {
    fontWeight: 'bold' as 'bold',
    fontSize: 45,
    textAlign: 'center' as 'center',
    marginBottom: -5,
    // textShadow: defaultShadow,
  },
  pageSubTitle: {
    fontWeight: 'bold' as 'bold',
    fontSize: 25,
    textAlign: 'center' as 'center',
    marginBottom: 30,
    // textShadow: defaultShadow,
    color: titleColor,
  },
  cardTitle: {
    fontWeight: 'bold' as 'bold',
    fontSize: 25,
    textAlign: 'center' as 'center',
    marginBottom: 30,
  },
  headerImage: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 15,
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
  flag: {
    marginRight: 5,
  },
  text: {
    textShadow: defaultShadow,
  },
  footer: {
    container: {
      paddingBottom: 5,
      left: 0,
      bottom: 0,
      right: 0,
    },
    text: {
      // textShadow: defaultShadow,
      textAlign: 'center' as 'center',
      fontSize: 9,
      marginTop: -10,
    },
  },
  linkButton: {
    marginTop: -3,
    marginLeft: -7,
    marginRight: -7,
    color: titleColor,
  },
  CONSTANTS: {
    clubFlagWidth: 14,
    clubFontSize: 12,
    titleColor: titleColor,
  },
};

export default GlobalStyle;
