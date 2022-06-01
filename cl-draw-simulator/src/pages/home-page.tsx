import { useState } from 'react';
import DefaultLayout from '../components/default-layout';
import data_2022 from '../data/data-2022.json';
import GlobalStyle from '../styling/global-style';

const HomePage = () => {
  const [drawMode, setDrawMode] = useState('group_stage');
  const [clubData, setClubData] = useState();

  console.log(data_2022);

  return (
    <DefaultLayout style={GlobalStyle.homePage}>
      <p style={GlobalStyle.pageTitle}>UCL SIMULATOR</p>
      <p>UEFA Champions League draw simulator - 2022/23</p>
    </DefaultLayout>
  );
};

export default HomePage;

/*
TO DO:
-Show overview of all clubs with logo or country flag
*/
