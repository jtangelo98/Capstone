import { Container, Button } from 'react-bootstrap';
import { WelcomePage } from '../../pages/welcome';
import { HeaderComponent } from '../../widgets/header';
import { FooterComponent } from "../../widgets/footer";
import './style.css';
import TableComponent from '../../widgets/total_grocery_table';




export function AppComponent() {
  return (
    <Container fluid className="AppComponent vh-100 px-0" data-testid="core-app">
        <HeaderComponent/>
        <WelcomePage/>
        <FooterComponent/> 
    </Container>
  );
}

export default AppComponent;