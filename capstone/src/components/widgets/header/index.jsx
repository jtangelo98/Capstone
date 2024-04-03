import { Container, Row, Col, Button} from 'react-bootstrap';
import {TableComponent} from '../total_grocery_table';

import './style.css';

// const [showModal, setShowModal] = useState(false);

//   const handleTableClick = () => {
//     setShowModal(true);
//   };

//   const handleCloseTable = () => {
//     setShowModal(false);
//   };

export function HeaderComponent() {
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
                <Col/>
                <Col/>
                <Col className='headerCol'>
                    <Button
                        variant = "secondary"
                        size = "lg"
                        // onClick={handleTableClick()}
                    >
                        Grocery List
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default HeaderComponent();