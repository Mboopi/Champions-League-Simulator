import { Button } from 'react-bootstrap';
import data_2022 from '../data/data-2022.json';
import Simulation from '../simulation/main-simulation';

const simulation = new Simulation(data_2022.group_stage);

const drawClub = () => {
  const groups = simulation.runSimulationStep();
  //   console.log('GROUPS: ', groups);
};

const SimulationOverview = () => {
  return <Button onClick={() => drawClub()}>Draw club</Button>;
};

export default SimulationOverview;
