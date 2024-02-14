import { Container, Row, Col, Button} from 'react-bootstrap';
import {Linkedin} from 'react-bootstrap-icons'
import './style.css';

export function FooterComponent() {
    return (
        <Container>
            <Row className='text-center flex-nowrap footerRow'>
                    <p>Contact Information</p>
                    <hr className='horizontalRule'/>
                    <p>Joseph Angelo</p>
                    <p>Student</p>
                    <p>angeloj@sunypoly.edu</p>
                    <p>(123) 456-7890 </p>
                    
            </Row>
        </Container>
    );
}

export default FooterComponent();