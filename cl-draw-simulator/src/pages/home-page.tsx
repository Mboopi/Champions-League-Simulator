import { useState } from 'react';
import data_2022 from '../data/data-2022.json';
import GlobalStyle from '../styling/global-style';
import OverviewCard from '../components/overview-card';
import { Col, Row } from 'react-bootstrap';
import Clubs from '../components/clubs';

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
          <OverviewCard title={'Participating Clubs'} content={<Clubs />} />
        </Col>
        <Col>
          <OverviewCard title={'Simulation'} />
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;

/*
TO DO:
-Show overview of all clubs with logo or country flag
*/
