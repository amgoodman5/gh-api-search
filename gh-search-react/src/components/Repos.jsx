import React from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import { VscStarEmpty } from "react-icons/vsc";

export default function Repos({ repo }) {

    return (

        <Card
             bg="info"
            style={{ width: '18rem' }}
            className="mb-2"
        >
            <Card.Header>{repo.name}</Card.Header>
            <Card.Body>
                <Card.Title>{repo.name} - {repo.language}</Card.Title>

                <Card.Text>Language: {repo.language}</Card.Text>
                <Card.Text>Owner: {repo.full_name}</Card.Text>
                <Card.Text>Description: {repo.description}</Card.Text>

            </Card.Body>
           <span>
            <Badge variant="light"><VscStarEmpty /> {repo.stargazers_count}</Badge>
           </span>
               

        </Card>
    )
}

// repository name, description, number of stars, language, and the owners name.

