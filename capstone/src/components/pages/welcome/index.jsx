import { Row, Col, Container} from 'react-bootstrap';
import { AccountCard } from '../../widgets/account';
import Chart from '../../widgets/graph';
import './style.css';

export function WelcomePage() {
    return (
      <Container fluid>
          <Row className='welPage'>
            <AccountCard title = "Checking Account" funds = "$214.51"/>
            <Col sm = {1}/>
            <AccountCard title = "Savings Account" funds = "$6,425.25"/>
          </Row>
          <Row>
            {/* <Chart/> */}
          </Row>
        </Container>
  )

}