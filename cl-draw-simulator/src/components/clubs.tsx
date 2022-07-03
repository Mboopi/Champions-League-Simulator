import React from 'react';
import { Col, Row } from 'react-bootstrap';
import data_2022 from '../data/data-2022.json';

const getClubOverview = (mode: String) => {
  const clubData = data_2022[mode as keyof typeof data_2022];
  let clubOverview = { 1: [''], 2: [''], 3: [''], 4: [''] };

  for (let i = 0; i < clubData.length; i++) {
    const clubPot = clubData[i].pot;
    const clubName = clubData[i].club_name;
    clubOverview[clubPot as unknown as keyof typeof clubOverview].push(
      clubName
    );
  }

  for (let i = 0; i < Object.keys(clubOverview).length; i++) {
    clubOverview[(i + 1) as unknown as keyof typeof clubOverview].shift();
  }

  return clubOverview;
};

const renderClubsFromPot = (clubs: any) => {
  return clubs.map((club: any, i: any) => {
    return (
      <Row key={i}>
        <p style={{ fontSize: 10 }}>{club}</p>
      </Row>
    );
  });
};

const Clubs = () => {
  const allClubs = getClubOverview('group_stage');
  const potNumbers = Object.keys(allClubs);
  console.log(allClubs);
  console.log(Object.keys(allClubs));

  return (
    <>
      <Row>
        <Col>
          <b>Pot 1</b>
          {renderClubsFromPot(allClubs[1])}
        </Col>
        <Col>
          <b>Pot 2</b>
          {renderClubsFromPot(allClubs[2])}
        </Col>
        <Col>
          <b>Pot 3</b>
          {renderClubsFromPot(allClubs[3])}
        </Col>
        <Col>
          <b>Pot 4</b>
          {renderClubsFromPot(allClubs[4])}
        </Col>
      </Row>
    </>
  );
};

export default Clubs;
