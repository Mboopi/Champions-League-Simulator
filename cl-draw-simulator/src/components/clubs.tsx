import { Col, Row } from 'react-bootstrap';
import data_2022 from '../data/data-2022.json';

const renderClubInfo = (data: any, potNumber: any) => {
  return data.map((entry: any, i: any) => {
    if (entry.pot == potNumber) {
      return (
        <Row key={i}>
          <p style={{ fontSize: 10 }}>{entry.club_name}</p>
        </Row>
      );
    }
  });
};

const Clubs = () => {
  const drawMode = 'group_stage';

  return (
    <>
      <Row>
        <Col>
          <b>Pot 1</b>
          {renderClubInfo(data_2022[`${drawMode}`], 1)}
        </Col>
        <Col>
          <b>Pot 2</b>
          {renderClubInfo(data_2022[`${drawMode}`], 2)}
        </Col>
        <Col>
          <b>Pot 3</b>
          {renderClubInfo(data_2022[`${drawMode}`], 3)}
        </Col>
        <Col>
          <b>Pot 4</b>
          {renderClubInfo(data_2022[`${drawMode}`], 4)}
        </Col>
      </Row>
    </>
  );
};

export default Clubs;
