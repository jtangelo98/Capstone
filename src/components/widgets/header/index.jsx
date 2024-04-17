import { Container, Row, Col, Button} from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import logo from "../../../assets/logo2.png";
import { Modal } from 'react-bootstrap';
import { GroceryTable } from '../total_grocery_table';
import './style.css';
import { useState } from 'react';

export function HeaderComponent() {
    const [showGrocery, setShowGrocery] = useState(false);
    
    const handleGroceryOpen = () => setShowGrocery(true);
    const handleGroceryClose = () => setShowGrocery(false);

    return (
        <Container 
            fluid 
            className = 'headerContainer'
        >
            <Row 
                className = "headerRow"
            >
                <Col className='titleCol'>    
                    Financial Wellness
                </Col>
                <Col xs >
                  {/* <Image
                    src = {logo}
                    style={{height: '50px'}}
                  /> */}
                </Col>
                <Col/>
                <Col className='headerCol'>
                    <Button
                        variant = "dark"
                        size = "md"
                        onClick={() =>handleGroceryOpen()}
                    >
                        Grocery List
                    </Button>
                </Col>
            </Row>
            <Modal
        show={showGrocery}
        onHide={handleGroceryClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Grocery List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <GroceryTable/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleGroceryClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </Container>
    );
}

export default HeaderComponent;