import { useState } from 'react';
import PotCard from '../components/pot-card';
import DefaultLayout from '../components/default-layout';
import data_2022 from '../data/data-2022.json';
import GlobalStyle from '../styling/global-style';

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

const HomePage = () => {
  // const [drawMode, setDrawMode] = useState('group_stage');
  const drawMode = 'group_stage';
  const [clubData, setClubData] = useState(data_2022[`${drawMode}`]);

  const [clubOverview, setClubOverview] = useState(() =>
    getClubOverview(drawMode)
  );

  // const test = getClubOverview()
  console.log(clubOverview);

  // console.log(clubData);
  // console.log(clubData.length);

  return (
    <DefaultLayout style={GlobalStyle.homePage}>
      <p style={GlobalStyle.pageTitle}>UCL SIMULATOR 2022/23</p>
      <p style={GlobalStyle.pageSubTitle}>
        UEFA Champions League Draw Simulator
      </p>
      <p>Overview Clubs</p>
      <PotCard potNumber={1} clubs={clubOverview[1]} />
      <PotCard potNumber={2} clubs={clubOverview[2]} />
      <PotCard potNumber={3} clubs={clubOverview[3]} />
      <PotCard potNumber={4} clubs={clubOverview[4]} />
    </DefaultLayout>
  );
};

export default HomePage;

/*
TO DO:
-Show overview of all clubs with logo or country flag
*/
