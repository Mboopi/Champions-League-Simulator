import { Card } from 'react-bootstrap';
import GlobalStyle from '../styling/global-style';

const OverviewCard = ({ title, content }: any) => {
  return (
    <div style={GlobalStyle.overviewCardContainer}>
      <Card style={GlobalStyle.overviewCard}>
        <Card.Body>
          <Card.Title>
            <b style={GlobalStyle.cardTitle}>{title}</b>
          </Card.Title>
          {content}
        </Card.Body>
      </Card>
    </div>
  );
};

export default OverviewCard;
