import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Flag from 'react-world-flags';
import data_2022 from '../data/data-2022.json';
import { getCountryCode } from '../helper-functions/helper-functions';
import Simulation from '../simulation/main-simulation';
import { ClubType, GroupType } from '../simulation/types/interfaces';
import GlobalStyle from '../styling/global-style';
import ToastMessage from './toast-message';

const simulation = new Simulation(data_2022.group_stage);

const renderGroup = (group: GroupType) => {
  return group.getClubs().map((club: ClubType, i: number) => {
    return (
      <Row key={i}>
        <p style={{ fontSize: GlobalStyle.CONSTANTS.clubFontSize }}>
          <Flag width={GlobalStyle.CONSTANTS.clubFlagWidth} code={getCountryCode(club.getCountry())} />{' '}
          {club.getName()}</p>
      </Row>
    )
  })
}

const renderAllGroups = (groups: Array<GroupType>) => {
  return (
    <>
      <Row>
        <Col xs={6} sm={6} md={6} lg={3}>
          <b>Group A</b>
          {renderGroup(groups[0])}
        </Col>
        <Col xs={6} sm={6} md={6} lg={3}>
          <b>Group B</b>
          {renderGroup(groups[1])}
        </Col>
        <Col xs={6} sm={6} md={6} lg={3}>
          <b>Group C</b>
          {renderGroup(groups[2])}
        </Col>
        <Col xs={6} sm={6} md={6} lg={3}>
          <b>Group D</b>
          {renderGroup(groups[3])}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={6} sm={6} md={6} lg={3}>
          <b>Group E</b>
          {renderGroup(groups[4])}
        </Col>
        <Col xs={6} sm={6} md={6} lg={3}>
          <b>Group F</b>
          {renderGroup(groups[5])}
        </Col>
        <Col xs={6} sm={6} md={6} lg={3}>
          <b>Group G</b>
          {renderGroup(groups[6])}
        </Col>
        <Col xs={6} sm={6} md={6} lg={3}>
          <b>Group H</b>
          {renderGroup(groups[7])}
        </Col>
      </Row>
    </>
  )
}


const SimulationOverview = () => {
  const [groupOverview, setGroupOverview] = useState(Array<GroupType>)

  const drawClub = (quick: boolean) => {
  
    if (quick) {
      setGroupOverview([...simulation.quickSimulation()]) // Otherwise React doesn't see the state as updated as arrays are checked by reference.
    } else {
      setGroupOverview([...simulation.runSimulationStep()]) // Otherwise React doesn't see the state as updated as arrays are checked by reference.
    }
  };

  return (
    <>
      <Button onClick={() => drawClub(false)} variant='outline-light' style={{ marginRight: 10, borderRadius: 15 }} disabled={simulation.isDone}>
        Draw a club
      </Button>
      <Button onClick={() => drawClub(true)} variant='outline-light' style={{ marginRight: 10, borderRadius: 15 }} disabled={simulation.isDone}>
        Quick draw
      </Button>
      <Button
        onClick={() => {
          simulation.resetSimulation();
          setGroupOverview([])
        }}
        variant="outline-danger"
        style={GlobalStyle.button}
      >
        Restart
      </Button>

      <div style={{ marginTop: 10 }} >
        {groupOverview.length > 0 && <hr style={{ height: 2 }} />}
        {groupOverview.length > 0 && renderAllGroups(groupOverview)}
      </div>
    </>
  );
};

export default SimulationOverview;
