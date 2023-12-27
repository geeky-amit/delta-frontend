import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import ListItems from "../components/ListItems"


const CreateListItem = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    let counter = 0;

    useEffect(() => {
        axios.get('/api/todo').then((res) => {
            setTodos(res.data)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const clickHandler = async () => {
        if (!(title || description)) {
            alrt("Please fill all the required fields");
            return;
        }

        try {

            await axios.post("/api/todo/createTodo", { title, description });
            alert('Item created successfully');
        } catch (error) {
            console.error(`Something went wrong ${error.message}`);
        }
    }


    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Tittle</Form.Label>
                    <Form.Control onChange={(e) => setTitle(e.target.value)} type="email" placeholder="tittle" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={(e) => setDescription(e.target.value)} as="textarea" rows={4} placeholder="description" />
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
                todos.map((todo) => (<ListItems key={todo._id} title={todo.title} description={todo.description} />))
            }
        </>

    )
}

export default CreateListItem