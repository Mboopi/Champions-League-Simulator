import { useEffect, useRef, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Flag from 'react-world-flags';
import data_2022 from '../data/data-2022.json';
import { getCountryCode } from '../helper-functions/helper-functions';
import Club from '../simulation/club';
import Simulation from '../simulation/main-simulation';
import { ClubType, GroupType } from '../simulation/types/interfaces';
import GlobalStyle from '../styling/global-style';

const simulation = new Simulation(data_2022.group_stage);

const style = {
  button: {
    marginRight: 10,
    borderRadius: 15,
  },
};

const renderGroup = (group: GroupType) => {
  let clubs: ClubType[] = [];
  const GROUP_SIZE = 4;

  for (let i = 0; i < GROUP_SIZE; i++) {
    clubs.push(group.getClubs()[i] || new Club('...', 'N/A', 0));
  }

  return clubs.map((club: ClubType, i: number) => {
    return (
      <Row key={i}>
        <p style={{ fontSize: GlobalStyle.CONSTANTS.clubFontSize }}>
          <Flag
            width={GlobalStyle.CONSTANTS.clubFlagWidth}
            code={getCountryCode(club.getCountry())}
            style={GlobalStyle.flag}
          />
          {club.getName()}
        </p>
      </Row>
    );
  });
};

const renderAllGroups = (groups: Array<GroupType>) => {
  const groupsFirst = ['A', 'B', 'C', 'D']; // Groups before the divider.
  const groupsSecond = ['E', 'F', 'G', 'H']; // Groups after the divider.

  return (
    <>
      <Row>
        {groupsFirst.map((name: string, index: number) => {
          return (
            <Col xs={6} sm={6} md={6} lg={3} key={name}>
              <b>Group {name}</b>
              {renderGroup(groups[index])}
            </Col>
          );
        })}
      </Row>
      <hr />
      <Row>
        {groupsSecond.map((name: string, index: number) => {
          return (
            <Col xs={6} sm={6} md={6} lg={3} key={name}>
              <b>Group {name}</b>
              {renderGroup(groups[index + groupsFirst.length])}
            </Col>
          );
        })}
      </Row>
    </>
  );
};

const SimulationOverview = () => {
  const [groupOverview, setGroupOverview] = useState(Array<GroupType>); // Track the state of the groups.
  const [firstLoad, setFirstLoad] = useState(true); // Initially, the groupOverview state should be set to empty groups
  // s.t. placeholders can be shown.
  const [firstClick, setFirstClick] = useState(true); // The draw button should only scroll on the first drawn club.
  const [fullDrawn, setFullDrawn] = useState(false); // Variable for determining when to run to fading animation.
  const [resultsOpacity, setResultsOpacity] = useState(1); // Current opacity.

  const time = 250; // Timer in ms.

  const resultsRef = useRef<HTMLDivElement>(null);

  // Set the groupOverview to empty array so that the placeholders are displayed.
  // Otherwise, only the title and buttons are displayed when no clubs have been drawn yet.
  useEffect(() => {
    if (firstLoad) {
      setGroupOverview([...simulation.groups]);
      setFirstLoad(false);
    }
  }, [firstLoad]);

  // Depending on the states, adjust the opacity for the fading animation of the results.
  useEffect(() => {
    if ((firstLoad && firstClick) || fullDrawn) {
      setResultsOpacity(0);
    } else {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        setResultsOpacity(1);
      }, time);
    }
  }, [firstLoad, firstClick, fullDrawn]);

  // Idem
  useEffect(() => {
    if (fullDrawn) {
      setFullDrawn(false);
    }
  }, [fullDrawn]);

  const scrollToResults = () => {
    resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const drawClub = (quick: boolean) => {
    if (quick) {
      setFullDrawn(true);

      const timer = setTimeout(() => {
        clearTimeout(timer);
        setGroupOverview([...simulation.quickSimulation()]); // Otherwise React doesn't see the state as updated as arrays are checked by reference.
      }, time);

      scrollToResults();
    } else {
      setGroupOverview([...simulation.runSimulationStep()]); // Otherwise React doesn't see the state as updated as arrays are checked by reference.

      if (firstClick) {
        scrollToResults();
        setFirstClick(false);
      }
    }
  };

  return (
    <div ref={resultsRef}>
      <Button
        onClick={() => drawClub(false)}
        variant="outline-light"
        style={style.button}
        disabled={simulation.isDone}
      >
        Draw club
      </Button>
      <Button
        onClick={() => drawClub(true)}
        variant="outline-light"
        style={style.button}
        disabled={simulation.isDone}
      >
        Full draw
      </Button>
      <Button
        onClick={() => {
          simulation.resetSimulation();
          //setGroupOverview([]);
          setFirstClick(true);
          setFirstLoad(true);
          setFullDrawn(false);
        }}
        variant="outline-danger"
        style={GlobalStyle.button}
      >
        Reset
      </Button>
      {groupOverview.length > 0 && <hr style={{ height: 2 }} />}

      <div
        style={{
          marginTop: 10,
          opacity: resultsOpacity,
          transition: 'opacity ease-out 0.15s',
        }}
      >
        {groupOverview.length > 0 && renderAllGroups(groupOverview)}
      </div>
    </div>
  );
};

export default SimulationOverview;
