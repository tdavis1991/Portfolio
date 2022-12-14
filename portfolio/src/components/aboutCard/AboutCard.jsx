import Card from 'react-bootstrap/Card';

import './aboutCard.css';

function AboutCard({ title, placeTime, text }) {
  return (
    <Card className='aboutCard__container'>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className='aboutCard__place'>{placeTime}</Card.Subtitle>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;