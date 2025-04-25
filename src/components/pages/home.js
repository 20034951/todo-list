import { Container } from "react-bootstrap";
import Item from "../item/item";

function Home(){
    return (
        <div className="page-content">
            <Container className="card-stack-container">
                <Item />
            </Container>
        </div>
    )
}

export default Home;