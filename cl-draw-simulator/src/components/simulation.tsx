import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import data_2022 from '../data/data-2022.json';
import Simulation from '../simulation/main-simulation';
import { ClubType, GroupType } from '../simulation/types/interfaces';

const simulation = new Simulation(data_2022.group_stage);

const renderGroup = (group: GroupType) => {
  return group.getClubs().map((club: ClubType, i: number) => {
    return (
      <Row key={i}>
        <p style={{ fontSize: 12 }}>{club.getName()}</p>
      </Row>
    )
  })
}

const renderAllGroups = (groups: Array<GroupType>) => {
  return (
    <>
      <Row>
        <Col>
          <b>Group A</b>
          {renderGroup(groups[0])}
        </Col>
        <Col>
          <b>Group B</b>
          {renderGroup(groups[1])}
        </Col>
        <Col>
          <b>Group C</b>
          {renderGroup(groups[2])}
        </Col>
        <Col>
          <b>Group D</b>
          {renderGroup(groups[3])}
        </Col>
      </Row>

      <Row>
        <Col>
          <b>Group E</b>
          {renderGroup(groups[4])}
        </Col>
        <Col>
          <b>Group F</b>
          {renderGroup(groups[5])}
        </Col>
        <Col>
          <b>Group G</b>
          {renderGroup(groups[6])}
        </Col>
        <Col>
          <b>Group H</b>
          {renderGroup(groups[7])}
        </Col>
      </Row>
    </>
  )
}


const SimulationOverview = () => {
  const [groupOverview, setGroupOverview] = useState(Array<GroupType>)

  const drawClub = () => {
    const groups = simulation.runSimulationStep();

    setGroupOverview([...groups]) // Otherwise React doesn't see the state as updated as arrays are checked by reference.

    console.log(groupOverview)
  };

  return (
    <>
      {groupOverview.length > 0 && renderAllGroups(groupOverview)}
      <Button onClick={() => drawClub()} variant='light' style={{ marginRight: 10 }} disabled={simulation.isDone}>
        Draw a club
      </Button>
      <Button
        onClick={() => {
          simulation.resetSimulation();
          setGroupOverview([])
        }}
        variant="danger"
      >
        Restart
      </Button>
    </>
  );
};

export default SimulationOverview;
