import React from 'react';
import './Projects.css'
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';


export default function Projects() {
  return (
    <div id="projects">
      <h1 className='projects-title'>Projects</h1>

      <div className='projects-container'>
        <Card className='project'>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/term_system.jpg"} />
          <Card.Body>
            <Card.Title>T.E.R.M System</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Ticketing System</Card.Subtitle>
            <Card.Text>
            The Ticketing-Expert Repair Maintenance (TERM) System is a web application of an Auto Shop System with a ticketing with Scheduling System.
            </Card.Text>

            <Dropdown className='dropdown'>
              <Dropdown.Toggle data-bs-theme="dark" variant="secondary">
                Demo Account
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Email: admin1@email.com</Dropdown.Item>
                <Dropdown.Item>Password: admin1</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Card.Subtitle className="text-muted project-tech">Technologies:</Card.Subtitle>
          </Card.Body>
        </Card>

        <Card  className='project'>
          <Card.Body>
            <Card.Title>Project 2</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              Project Description
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='project'>
          <Card.Body>
            <Card.Title>Project 3</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              Project Description
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='project'>
          <Card.Body>
            <Card.Title>Project 4</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              Project Description
            </Card.Text>
          </Card.Body>
        </Card>

      </div>
    </div>
  )
}
