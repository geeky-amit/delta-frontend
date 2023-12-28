import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
//import ListItems from "../components/ListItems"


const CreateListItem = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    let [counter, setCounter] = useState(0)

    useEffect(() => {
        axios.get('https://delta-backend.onrender.com/api/todo').then((res) => {
            setTodos(res.data)
        }).catch((error) => {
            console.log(error);
        })
        console.log("hello");
    }, [title])

    const clickHandler = async () => {
        if (!(title || description)) {
            alrt("Please fill all the required fields");
            return;
        }

        try {

            await axios.post("https://delta-backend.onrender.com/api/todo/createTodo", { title, description });
            setCounter(counter++)
            setTitle("")
            setDescription("")
            alert('Item created successfully');
            console.log(title, description, counter);
        } catch (error) {
            console.error(`Something went wrong ${error.message}`);
        }
    }


    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Tittle</Form.Label>
                    <Form.Control onChange={(e) => setTitle(e.target.value)} value={title} type="email" placeholder="tittle" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={(e) => setDescription(e.target.value)} value={description} as="textarea" rows={4} placeholder="description" />
                </Form.Group>
            </Form>
            <div style={{
                "display": "flex",
                "justifyContent": "center",
                "alignItem": "center"
            }}>
                <Button onClick={clickHandler} variant="primary" size="md">
                    Add item
                </Button >
            </div>

            <br />


            {
                todos.map((todo) => (
                    <div key={todo._id} style={{
                        "display": "flex",
                        "justifyContent": "center",
                        "alignItem": "center"
                    }}>

                        <Card className='mb-4' style={{ width: '25rem', backgroundColor: "#b3d8e6" }}>
                            <Card.Body>
                                <Card.Title>{todo.title}</Card.Title>
                                <Card.Text>
                                    {todo.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>


                    </div>
                ))
            }

            {/* {
                todos.map((todo) => (<ListItems key={todo._id} title={todo.title} description={todo.description} />))
            } */}
        </>

    )
}

export default CreateListItem