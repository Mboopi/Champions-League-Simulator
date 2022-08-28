import { useEffect, useState } from 'react';
// import data_2022 from '../data/data-2022.json';
import GlobalStyle from '../styling/global-style';
import OverviewCard from '../components/overview-card';
import { Button, Col, Row } from 'react-bootstrap';
import SimulationOverview from '../components/simulation';
import ClubsOverview from '../components/clubs';
import Footer from '../components/footer';
import Header from '../components/header';

const HomePage = () => {
  // const [drawMode, setDrawMode] = useState('group_stage');
  // const drawMode = 'group_stage';
  // const [clubData, setClubData] = useState(data_2022[`${drawMode}`]);
  const [showInfo, setShowInfo] = useState(false);
  const [textOpacity, setTextOpacity] = useState(0);

  const style = {
    infoContainer: {
      textAlign: 'center' as 'center',
      marginTop: -30,
      marginBottom: 20,
    },
    animatedTextInfo: {
      textShadow: '0px 0px 10px blue',
      opacity: textOpacity,
      transition: 'opacity 1.5s',
      color: GlobalStyle.CONSTANTS.titleColor,
    },
    animatedLinkButton: {
      marginTop: -3,
      marginLeft: -7,
      marginRight: -7,
      color: GlobalStyle.CONSTANTS.titleColor,
      opacity: (textOpacity + 1) % 2,
      transition: 'opacity 1.5s',
    },
  };

  useEffect(() => {
    if (showInfo) {
      setTextOpacity(1);
    } else {
      setTextOpacity(0);
    }
  }, [showInfo]);

  const renderInfo = () => {
    if (showInfo) {
      return (
        <div style={style.infoContainer}>
          <p style={style.animatedTextInfo}>
            This site allows you to simulate the draw of the group stage of the
            UEFA Champions League football tournament of the season 2022/23.{' '}
            <Button
              variant="link"
              style={GlobalStyle.linkButton}
              onClick={() => setShowInfo(false)}
            >
              Hide
            </Button>
          </p>
        </div>
      );
    } else {
      return (
        <div style={style.infoContainer}>
          <Button
            variant="link"
            style={style.animatedLinkButton}
            onClick={() => {
              setShowInfo(true);
            }}
          >
            More info
          </Button>
        </div>
      );
    }
  };

  return (
    <div style={GlobalStyle.homePage}>
      <Header />

      {renderInfo()}

      <Row style={{ paddingBottom: 20 }}>
        <Col xs={12} sm={12} md={6} lg={6} style={{ marginBottom: 20 }}>
          <OverviewCard title={'All Clubs'} content={<ClubsOverview />} />
        </Col>
        <Col>
          <OverviewCard
            title={'Draw Simulation'}
            content={<SimulationOverview />}
          />
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default HomePage;
