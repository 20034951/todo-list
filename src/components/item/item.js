import Button from 'react-bootstrap/Button';
import {Stack, Card } from 'react-bootstrap';

const todosDataEjemplo = [
    { title: 'Título de Ejemplo 1', text: 'Este es el contenido de la primer tarea.' },
    { title: 'Título de Ejemplo 2', text: 'Esta es la segunda tarear con más texto.' },
    { title: 'Título de Ejemplo 3', text: 'Una tercera tarea para mostrar.' },
];

function Item(){
    return (
        <Stack gap={todosDataEjemplo.length}>
        {todosDataEjemplo.map((item, index) => (
            <Card key={index} className="todo-card shadow w-100">
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Subtitulo de la tarea</Card.Subtitle>
                    <Card.Text>
                        {item.text}
                    </Card.Text>
                    <Button variant="primary">Actualizar</Button>
                </Card.Body>
            </Card>
        ))}
        </Stack>
    )
}

export default Item;