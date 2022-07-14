import { useState } from 'react';
import data_2022 from '../data/data-2022.json';
import GlobalStyle from '../styling/global-style';
import OverviewCard from '../components/overview-card';
import { Col, Row } from 'react-bootstrap';
import SimulationOverview from '../components/simulation';
import ClubsOverview from '../components/clubs';

const HomePage = () => {
  // const [drawMode, setDrawMode] = useState('group_stage');
  const drawMode = 'group_stage';
  const [clubData, setClubData] = useState(data_2022[`${drawMode}`]);

  return (
    <div style={GlobalStyle.homePage}>
      <p style={GlobalStyle.pageTitle}>UCL SIMULATOR 2022/23</p>
      <p style={GlobalStyle.pageSubTitle}>
        UEFA Champions League Draw Simulator
      </p>

      <Row>
        <Col>
          <OverviewCard
            title={'Participating Clubs - Group Stage'}
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
