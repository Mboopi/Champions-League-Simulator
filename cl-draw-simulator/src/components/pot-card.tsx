import Card from 'react-bootstrap/Card';
import GlobalStyle from '../styling/global-style';

const PotCard = ({ potNumber, clubs }: any) => {
  return (
    <Card style={GlobalStyle.potCard}>
      <Card.Body>
        <Card.Title>Pot {potNumber}</Card.Title>
        <Card.Text>{clubs}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PotCard;
