import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';
const Navigation = () => {
  return (
    <Navbar style={{backgroundColor:'grey'}}>
        <Container fluid>
          <Navbar.Brand>
          <img src='https://th.bing.com/th/id/OIP.Z5bvcAHA_uQes60JZG0VBwHaHa?rs=1&pid=ImgDetMain' width={'220px'} height={'80px'} className='flip'/>
          </Navbar.Brand>
          <Nav className="ms-auto links">
            <Link to={"/Latest Movies"} style={{textDecoration:'none', marginRight:'20px'}}>
            <Nav.Link href="#home" style={{color:'darkblue',fontWeight:'bold',fontSize:'18px'}} className='link1'>Latest Movies</Nav.Link>
            </Link>
            <Link to={"/Popular Movies"} style={{textDecoration:'none', marginRight:'20px'}}>
            <Nav.Link href="#link" style={{color:'darkblue',fontWeight:'bold',fontSize:'18px'}} className='link1'>Popular Movies</Nav.Link>
            </Link>
            <Link to={"/Comedy Movies"} style={{textDecoration:'none', marginRight:'20px'}}>
            <Nav.Link href="#link" style={{color:'darkblue',fontWeight:'bold',fontSize:'18px'}} className='link1'>Comedy Movies</Nav.Link>
            </Link>
            </Nav>
        </Container>
      </Navbar>
  )
}

export default Navigation