import { Col, Row } from 'react-bootstrap';
import Flag from 'react-world-flags';
import data_2022 from '../data/data-2022.json';
import { getCountryCode } from '../helper-functions/helper-functions';
import GlobalStyle from '../styling/global-style';

const renderClubInfo = (data: Array<object>, potNumber: number) => {
  return data.map((entry: any, i: number) => {
    if (entry.pot == potNumber) {
      return (
        <Row key={i}>
          <p style={{ fontSize: GlobalStyle.CONSTANTS.clubFontSize }}>
            <Flag
              width={GlobalStyle.CONSTANTS.clubFlagWidth}
              code={getCountryCode(entry.country)}
            />{' '}
            {entry.club_name}
          </p>
        </Row>
      );
    }
  });
};

const ClubsOverview = () => {
  const drawMode = 'group_stage';

  return (
    <>
      <Row>
        <Col xs={6} sm={6} md={6} lg={3}>
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

export default ClubsOverview;
