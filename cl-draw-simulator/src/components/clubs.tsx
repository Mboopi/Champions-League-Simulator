import { Col, Row } from 'react-bootstrap';
import Flag from 'react-world-flags';
import data_2022 from '../data/data-2022.json';
import { getCountryCode } from '../helper-functions/helper-functions';
import GlobalStyle from '../styling/global-style';

const renderClubInfo = (data: Array<object>, potNumber: number) => {
  return data.map((entry: any, i: number) => {
    if (entry.pot === potNumber) {
      return (
        <Row key={i}>
          <p style={{ fontSize: GlobalStyle.CONSTANTS.clubFontSize }}>
            <Flag
              width={GlobalStyle.CONSTANTS.clubFlagWidth}
              code={getCountryCode(entry.country)}
              style={GlobalStyle.flag}
            />
            {entry.club_name}
          </p>
        </Row>
      );
    }

    return null;
  });
};

const ClubsOverview = () => {
  const drawMode = 'group_stage';
  const pots = [1, 2, 3, 4];

  return (
    <>
      <hr style={{ height: 2 }} />
      <Row>
        {pots.map((pot: number) => {
          return (
            <Col xs={6} sm={6} md={6} lg={3} key={pot}>
              <b>Pot {pot}</b>
              {renderClubInfo(data_2022[`${drawMode}`], pot)}
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ClubsOverview;
