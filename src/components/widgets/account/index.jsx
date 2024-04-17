import { Card } from "react-bootstrap";
import './style.css';

export function AccountCard(account){
    return (
        <Card className = 'accountCard'>
          <Card.Body>
            <Card.Title> {account.title} </Card.Title>
            <Card.Text> {account.funds} </Card.Text>
          </Card.Body>
        </Card>
    )
}