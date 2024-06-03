
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function App() {
  return (
    <div className="App">
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>

  
    </Navbar>
    <div className='alaa'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.yvB3WT_jGPFvW2gtAbacmQHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7/100px180" />
      <Card.Body>
        <Card.Title>Esperance sportif de tunis</Card.Title>
        <Card.Text>
        L'Espérance sportive de Tunis (arabe : الترجي الرياضي التونسي ou Attarajī ar-Riyāḍi Attūnisī), abrégé en ES Tunis ou EST, est un club de football tunisien basé à Tunis et fondé en 1919 dans le quartier de Bab Souika. Il évolue dans le championnat de Tunisie.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.yvB3WT_jGPFvW2gtAbacmQHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7/100px180" />
      <Card.Body>
        <Card.Title>Esperance sportif de tunis</Card.Title>
        <Card.Text>
        L'Espérance sportive de Tunis (arabe : الترجي الرياضي التونسي ou Attarajī ar-Riyāḍi Attūnisī), abrégé en ES Tunis ou EST, est un club de football tunisien basé à Tunis et fondé en 1919 dans le quartier de Bab Souika. Il évolue dans le championnat de Tunisie.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.yvB3WT_jGPFvW2gtAbacmQHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7/100px180" />
      <Card.Body>
        <Card.Title>Esperance sportif de tunis</Card.Title>
        <Card.Text>
        L'Espérance sportive de Tunis (arabe : الترجي الرياضي التونسي ou Attarajī ar-Riyāḍi Attūnisī), abrégé en ES Tunis ou EST, est un club de football tunisien basé à Tunis et fondé en 1919 dans le quartier de Bab Souika. Il évolue dans le championnat de Tunisie.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
    <Button variant="primary" size="lg">
        Block level button
      </Button>
      <Card>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="https://lagrinta.fr/wp-content/uploads/2017/12/3-ES-Tunis-1-0-Club-Africain-.jpg" />
      </Card>
      <Card>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
    </div>
  );
}

export default App;
