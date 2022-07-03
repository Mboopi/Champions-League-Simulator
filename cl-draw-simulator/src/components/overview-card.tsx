import { Card } from 'react-bootstrap';
import GlobalStyle from '../styling/global-style';

const OverviewCard = ({ title, content }: any) => {
  return (
    <Card style={GlobalStyle.overviewCard}>
      <Card.Body>
        <Card.Title>
          <b style={GlobalStyle.pageSubTitle}>{title}</b>
        </Card.Title>
        {content}
      </Card.Body>
    </Card>
  );
};

export default OverviewCard;
