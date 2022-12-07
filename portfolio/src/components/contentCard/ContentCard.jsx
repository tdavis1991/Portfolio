import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './contentCard.css';

function ContentCard({ image, title, desc, site, code }) {
  return (
    <Card className='contentCard__container' bg='secondary' style={{ width: '20rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <div className='contentCard__buttons'>
          <a href={site}><Button variant="danger">Site</Button></a>
          <a href={code}><Button variant="danger">Code</Button></a>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ContentCard;