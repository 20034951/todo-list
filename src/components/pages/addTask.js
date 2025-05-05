import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function AddTask(){

    const dispatch = useDispatch();
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ dueDate, setDueDate ] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!title.trim() || !description.trim()) return;

        const newTask = {
            id: uuidv4(),
            title, 
            text: description,
            date: dueDate,
        };

        dispatch(addTask(newTask));

        //Limpiar form
        setTitle("");
        setDescription("");
        setDueDate("");

    }

    return (
        <div className="page-content">
            <Container className="card-stack-container">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Nombre"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            placeholder="Descripción de la Tarea" 
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Fecha Fin</Form.Label>
                        <Form.Control 
                            type="date"
                            value={dueDate}
                            onChange={(event) => setDueDate(event.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Guardar
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default AddTask;