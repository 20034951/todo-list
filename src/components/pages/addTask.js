import { Container, Form, Button } from "react-bootstrap";

function AddTask(){
    return (
        <div className="page-content">
            <Container className="card-stack-container">
                <Form>
                    <Form.Group className="mb-3" controlId="form.ControlIn01">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="form.ControlTextArea01">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Descripción de la Tarea" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="form.ControlIn02">
                        <Form.Label>Fecha Fin</Form.Label>
                        <Form.Control type="date" />
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