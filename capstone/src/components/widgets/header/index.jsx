import { Container, Row, Col} from 'react-bootstrap';
import {TableComponent} from '../total_grocery_table';

import './style.css';

export function HeaderComponent() {
    return (
        <Container fluid className = 'headerContainer'>
            <Row className = "headerRow h-100">
                <Col>
                    TODO: header component
                </Col>
                <Col>
                    TODO: header component
                </Col>
            </Row>
            <TableComponent/>
        </Container>
    );
}

export default HeaderComponent();