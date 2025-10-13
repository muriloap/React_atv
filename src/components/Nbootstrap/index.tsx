'use client'
import { Container, Nav, Navbar } from "react-bootstrap";
 
export default function Nbootstrap(){
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/admin/">Home</Nav.Link>
            <Nav.Link href="/admin/features">Features</Nav.Link>
            <Nav.Link href="/admin/pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}