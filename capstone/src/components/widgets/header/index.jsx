import { Container, Row, Col} from 'react-bootstrap';
import {TableComponent} from '../total_grocery_table';

import './style.css';

export function HeaderComponent() {
    return (
        <Container>
            <Row className = "headerRow h-100">
            
                TODO: header component
            </Row>
            <TableComponent/>
        </Container>
    );
}

export default HeaderComponent();