// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Container, Nav, Button, Navbar } from 'react-bootstrap';
// import AllCourses from './AllCourses';

// const Home = () => {
//    return (
//       <>
//          <Navbar expand="lg" className="bg-body-tertiary">
//             <Container fluid>
//                <Navbar.Brand><h2>Study App</h2></Navbar.Brand>
//                <Navbar.Toggle aria-controls="navbarScroll" />
//                <Navbar.Collapse id="navbarScroll">
//                   <Nav
//                      className="me-auto my-2 my-lg-0"
//                      style={{ maxHeight: '100px' }}
//                      navbarScroll
//                   >
//                   </Nav>
//                   <Nav>
//                      <Link to={'/'}>Home</Link>
//                      <Link to={'/login'}>Login</Link>
//                      <Link to={'/register'}>Register</Link>
//                   </Nav>

//                </Navbar.Collapse>
//             </Container>
//          </Navbar>

//          <div id='home-container' className='first-container'>
//             <div className="content-home">
//                <p>Small App, Big Dreams: <br /> Elevating Your Education</p>
//                <Link to={'/register'}><Button variant='warning' className='m-2' size='md'>Explore Courses</Button></Link>
//             </div>
//          </div>

//          <Container className="second-container">
//             <h2 className="text-center my-4">Trending Courses</h2>
//             <AllCourses />
//          </Container>
//       </>
//    )
// }

// export default Home


// NEW CODE

// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Container, Nav, Button, Navbar } from 'react-bootstrap';
// import AllCourses from './AllCourses';

// const Home = () => {
//    return (
//       <>
//          <Navbar expand="lg" className="bg-body-tertiary">
//             <Container fluid>
//                <Navbar.Brand><h2>Study App</h2></Navbar.Brand>
//                <Navbar.Toggle aria-controls="navbarScroll" />
//                <Navbar.Collapse id="navbarScroll">
//                   <Nav
//                      className="me-auto my-2 my-lg-0"
//                      style={{ maxHeight: '100px' }}
//                      navbarScroll
//                   >
//                   </Nav>
//                   <Nav>
//                      <Link to={'/'}>Home</Link>
//                      <Link to={'/login'}>Login</Link>
//                      <Link to={'/register'}>Register</Link>
//                   </Nav>

//                </Navbar.Collapse>
//             </Container>
//          </Navbar>

//          <div id='home-container' className='first-container'>
//             <div className="content-home">
//                <p>Small Ap, Big Dreams: <br /> Elevating Your Education</p>
//                <Link to={'/register'}><Button variant='warning' className='m-2' size='md'>Explore Courses</Button></Link>
//             </div>
//          </div>

//          <Container className="second-container">
//             <h2 className="text-center my-4">Trending Courses</h2>
//             <AllCourses />
//          </Container>
//       </>
//    )
// }

// export default Home




import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Button, Navbar } from 'react-bootstrap';
import AllCourses from './AllCourses';
import './App.css';

const Home = () => {
   useEffect(() => {
      // Add Dialogflow script
      const script = document.createElement('script');
      script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
      script.async = true;
      document.body.appendChild(script);

      // Create and configure Dialogflow messenger
      const messenger = document.createElement('df-messenger');
      messenger.setAttribute('intent', 'WELCOME');
      messenger.setAttribute('chat-title', 'Learning Assist');
      messenger.setAttribute('agent-id', '0007b05f-4611-4d69-8b56-b7cb78b01f3c');
      messenger.setAttribute('language-code', 'en');
      document.body.appendChild(messenger);

      // Clean up on component unmount
      return () => {
         document.body.removeChild(script);
         document.body.removeChild(messenger);
      };
   }, []);

   return (
      <>
         {/* Navbar */}
         <Navbar expand="lg" className="bg-primary text-white">
            <Container fluid>
               <Navbar.Brand><h2 className="text-white" style={{ marginLeft: "66px" }}>Study App</h2></Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll></Nav>
                  <Nav style={{ marginRight: '66px' }}>
                     <Link to={'/'} className="nav-link text-white">Home</Link>
                     <Link to={'/login'} className="nav-link text-white">Login</Link>
                     <Link to={'/register'} className="nav-link text-white">Register</Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>

         {/* Home Page Main Content */}
         <div id="home-container" className="first-container" style={{ backgroundColor: '#f9f9ff', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="content-home text-center">
               <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', paddingLeft:'280px', paddingTop:'90px' }}>Small App, Big Dreams: <br /> Elevating Your Education</p>
               <Link to={'/register'}>
                  <Button variant="contained" style={{ backgroundColor: '#007bff', color: '#fff', width:"230px"}} className="m-2" size="md">Explore Courses</Button>
               </Link>
            </div>
         </div>

         {/* Trending Courses Section */}
         <Container className="second-container" style={{ marginTop: '4rem' }}>
            <h2 className="text-center my-4" style={{ color: '#333' }}>Trending Courses</h2>
            <AllCourses />
         </Container>
      </>
   );
}

export default Home;
