import React from 'react'
import Card from 'react-bootstrap/Card';


const ListItems = ({ title, description }) => {

    return (
        <div style={{
            "display": "flex",
            "justifyContent": "center",
            "alignItem": "center"
        }}>

            <Card className='mb-4' style={{ width: '25rem', backgroundColor: "#b3d8e6" }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>


        </div>

    )
}

export default ListItems