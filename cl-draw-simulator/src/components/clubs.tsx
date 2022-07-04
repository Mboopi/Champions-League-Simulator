import { Col, Row } from 'react-bootstrap';
import ReactCountryFlag from 'react-country-flag';
import data_2022 from '../data/data-2022.json';

const lookup = require('country-code-lookup');

// type clubEntry = {
//   club_name: string;
//   country: string;
//   pot: number;
// };

const getCountryCode = (country: string) => {
  return lookup.byCountry(country).iso2;
};

const renderClubInfo = (data: Array<object>, potNumber: number) => {
  return data.map((entry: any, i: number) => {
    if (entry.pot == potNumber) {
      return (
        <Row key={i}>
          <p style={{ fontSize: 12 }}>
            <ReactCountryFlag countryCode={getCountryCode(entry.country)} />{' '}
            {entry.club_name}
          </p>
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
