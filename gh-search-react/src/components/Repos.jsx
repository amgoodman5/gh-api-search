import React from 'react'
import Card from 'react-bootstrap/Card'

export default function Repos({ repo }) {

    return (
  
            <Card
              style={{ width: '18rem' }}
              className="mb-2"
            >
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{repo.language} Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          )
}

