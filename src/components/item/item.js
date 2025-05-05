import {Stack, Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/taskSlice';

/*
const todosDataEjemplo = [
    { title: 'Título de Ejemplo 1', text: 'Este es el contenido de la primer tarea.' },
    { title: 'Título de Ejemplo 2', text: 'Esta es la segunda tarear con más texto.' },
    { title: 'Título de Ejemplo 3', text: 'Una tercera tarea para mostrar.' },
];
*/

function Item(){

    const tasks = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();

    return (
        <Stack gap={tasks.length}>
        {tasks.map((item, index) => (
            <Card key={item.id} className="todo-card shadow w-100">
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Subtitulo de la tarea</Card.Subtitle>
                    <Card.Text>
                        {item.text}
                    </Card.Text>
                    <div className='d-flex justify-content-end gap-2'>
                        <Button 
                            variant="danger"
                            onClick={() => dispatch(deleteTask(item.id))}
                        >Eliminar</Button>
                    </div>
                </Card.Body>
            </Card>
        ))}
        {tasks.length === 0 && <p className='text-muted'>No hay tareas registradas</p>}
        </Stack>
    )
}

export default Item;