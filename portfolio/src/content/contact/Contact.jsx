import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emailjs from '@emailjs/browser';

import './contact.css';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      document.getElementById('contact__form').reset();
  };

  console.log('KEY', import.meta.env.VITE_PUBLIC_KEY)


  return (
    <div className='contact__container' id='contact'>
      <p>CONTACT</p>
      <h2>Fell free to contact me!</h2>
      <div className='contact__form'>
        <Form ref={form} id='contact__form'>
          <Row className="mb-3">
            <InputGroup as={Col}>
              <Form.Control as='input' type='text' name='from_name' placeholder="Enter your name" />
            </InputGroup>
            <InputGroup as={Col}>
              <Form.Control as='input' type='email' name='from_email' placeholder="Enter your email" />
            </InputGroup>
          </Row>
          <Row className="mb-3">
            <InputGroup as={Col}>
              <Form.Control as='input' type='text' name='subject' placeholder="Enter subject" />
            </InputGroup>
          </Row>
          <InputGroup>
            <Form.Control name='message' placeholder='Enter Message' as="textarea" aria-label="With textarea" />
          </InputGroup>
          <Button as={Col} onClick={sendEmail} className='contact__button' type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Contact;