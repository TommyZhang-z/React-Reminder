import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import ReactDOM from 'react-dom';
import {CardChecklist, Trash} from "react-bootstrap-icons"
import {
    Button,
    Container,
    FormControl,
    InputGroup,
    Navbar
} from "react-bootstrap";


function fetchTodos() {
    return [
        {
            id: 1,
            title: "吃饭",
            completed: false
        },
        {
            id: 2,
            title: "睡觉",
            completed: true
        },
        {
            id: 3,
            title: "打豆豆",
            completed: false
        },
        {
            id: 4,
            title: "打游戏",
            completed: true
        },
        {
            id: 5,
            title: "洗澡",
            completed: true
        }
    ];
}

function TodoItem(props) {
    return (
        <InputGroup key={props.id}>
            <InputGroup.Checkbox
                checked={props.completed}
                onChange={props.onToggle}
            />
            <FormControl
                value={props.title}
                style={{
                    textDecoration: props.completed ? "line-through 4px" : "none",
                }}
            />
            <Button variant="outline-danger" onClick={props.onDelete}>
                <Trash/>
            </Button>
        </InputGroup>
    );
}

function App() {
    const [todos, setTodos] = useState(fetchTodos());
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <CardChecklist/> 待办事项
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onDelete={() => {
                            setTodos(todos.filter((x) => x.id !== todo.id));
                        }}
                        onToggle={() => {
                            setTodos(
                                todos.map((x) =>
                                    x.id === todo.id ? {
                                        ...x,
                                        completed: !x.completed
                                    } : x
                                )
                            );
                        }}
                    />
                ))}
            </Container>
        </>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));

