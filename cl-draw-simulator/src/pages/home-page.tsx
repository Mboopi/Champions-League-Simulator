import { useState } from 'react';
import data_2022 from '../data/data-2022.json';
import GlobalStyle from '../styling/global-style';
import OverviewCard from '../components/overview-card';
import { Button, Col, Container, Row } from 'react-bootstrap';
import SimulationOverview from '../components/simulation';
import ClubsOverview from '../components/clubs';

const style = {
  infoContainer: {
    textAlign: 'center' as 'center',
    marginTop: -30,
    marginBottom: 20,
  },
};

const HomePage = () => {
  // const [drawMode, setDrawMode] = useState('group_stage');
  const drawMode = 'group_stage';
  const [clubData, setClubData] = useState(data_2022[`${drawMode}`]);
  const [showInfo, setShowInfo] = useState(false);

  const renderInfo = () => {
    if (showInfo) {
      return (
        <div style={style.infoContainer}>
          <p>
            This site allows you to simulate the draw of the group stage of the
            UEFA Champions League football tournament of the season 2022/23.
            This website is not associated with UEFA in any way. It is simply a
            personal project for fun.{' '}
            <a onClick={() => setShowInfo(false)} style={{ cursor: 'pointer' }}>
              <u>Click to minimize</u>
            </a>
          </p>
        </div>
      );
    } else {
      return (
        <div style={style.infoContainer}>
          <u
            onClick={() => setShowInfo(true)}
            style={{ color: 'white', cursor: 'pointer' }}
          >
            More info
          </u>
        </div>
      );
    }
  };

  return (
    <div style={GlobalStyle.homePage}>
      <p style={GlobalStyle.pageTitle}>UCL SIMULATOR 2022/23</p>
      <p style={GlobalStyle.pageSubTitle}>
        UEFA Champions League Draw Simulator
      </p>

      {renderInfo()}

      <Row style={{ paddingBottom: 20 }}>
        <Col xs={12} sm={12} md={6} lg={6} style={{ marginBottom: 20 }}>
          <OverviewCard
            title={'Clubs (Group Stage)'}
            content={<ClubsOverview />}
          />
        </Col>
        <Col>
          <OverviewCard
            title={'Draw Simulation'}
            content={<SimulationOverview />}
          />
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
