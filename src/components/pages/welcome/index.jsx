import { Row, Col, Container} from 'react-bootstrap';
import { AccountCard } from '../../widgets/account';
import { GroceryTable } from '../../widgets/total_grocery_table';
import Chart from '../../widgets/graph';
import './style.css';
import { CDBJumbotron } from 'cdbreact';

export function WelcomePage() {
    return (
      <Container fluid>
          <Row className='welPage'>
            <AccountCard title = "Checking Account" funds = "$214.51"/>
            <Col sm = {1}/>
            <AccountCard title = "Savings Account" funds = "$6,425.25"/>
          </Row>
          <Row>
          </Row>
        </Container>
  )

}