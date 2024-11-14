// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import { Container, Nav } from 'react-bootstrap';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import axiosInstance from './AxiosInstance';
// import Dropdown from 'react-bootstrap/Dropdown';




// const Register = () => {
//    const navigate = useNavigate()
//    const [selectedOption, setSelectedOption] = useState('Select User');
//    const [data, setData] = useState({
//       name: "",
//       email: "",
//       password: "",
//       type: "",
//    })

//    const handleSelect = (eventKey) => {
//       setSelectedOption(eventKey);
//       setData({ ...data, type: eventKey });
//    };

//    const handleChange = (e) => {
//       const { name, value } = e.target;
//       setData({ ...data, [name]: value });
//    };

//    const handleSubmit = (e) => {
//       e.preventDefault()
//       if (!data?.name || !data?.email || !data?.password || !data?.type) return alert("Please fill all fields");
//       else {
//          axiosInstance.post('/api/user/register', data)
//             .then((response) => {
//                if (response.data.success) {
//                   alert(response.data.message)
//                   navigate('/login')

//                } else {
//                   console.log(response.data.message)
//                }
//             })
//             .catch((error) => {
//                console.log("Error", error);
//             });
//       }
//    };


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
//                      {/* <Link to={'/about'}>About</Link> */}
//                      <Link to={'/login'}>Login</Link>
//                      <Link to={'/register'}>Register</Link>
//                   </Nav>

//                </Navbar.Collapse>
//             </Container>
//          </Navbar>
//          <div className="first-container">
//             <Container component="main" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
//                <Box
//                   sx={{
//                      marginTop: 8,
//                      marginBottom: 4,
//                      display: 'flex',
//                      flexDirection: 'column',
//                      alignItems: 'center',
//                      padding: '10px',
//                      background: '#dddde8db',
//                      border: '1px solid lightblue',
//                      borderRadius: '5px'
//                   }}
//                >
//                   <Avatar sx={{ bgcolor: 'secondary.main' }}>
//                      {/* <LockOutlinedIcon /> */}
//                   </Avatar>
//                   <Typography component="h1" variant="h5">
//                      Register
//                   </Typography>
//                   <Box component="form" onSubmit={handleSubmit} noValidate>
//                      <TextField
//                         margin="normal"
//                         fullWidth
//                         id="name"
//                         label="Full Name"
//                         name="name"
//                         value={data.name}
//                         onChange={handleChange}
//                         autoComplete="name"
//                         autoFocus
//                      />
//                      <TextField
//                         margin="normal"
//                         fullWidth
//                         id="email"
//                         label="Email Address"
//                         name="email"
//                         value={data.email}
//                         onChange={handleChange}
//                         autoComplete="email"
//                         autoFocus
//                      />
//                      <TextField
//                         margin="normal"
//                         fullWidth
//                         name="password"
//                         value={data.password}
//                         onChange={handleChange}
//                         label="Password"
//                         type="password"
//                         id="password"
//                         autoComplete="current-password"
//                      />
//                      <Dropdown className='my-3'>
//                         <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
//                            {selectedOption}
//                         </Dropdown.Toggle>

//                         <Dropdown.Menu>
//                            <Dropdown.Item onClick={() => handleSelect("Student")}>Student</Dropdown.Item>
//                            <Dropdown.Item onClick={() => handleSelect("Teacher")}>Teacher</Dropdown.Item>
//                         </Dropdown.Menu>
//                      </Dropdown>
//                      <Box mt={2}>
//                         <Button
//                            type="submit"
//                            variant="contained"
//                            sx={{ mt: 3, mb: 2 }}
//                            style={{ width: '200px' }}
//                         >
//                            Sign Up
//                         </Button>
//                      </Box>
//                      <Grid container>
//                         <Grid item>Have an account?
//                            <Link style={{ color: "blue" }} to={'/login'} variant="body2">
//                               {" Sign In"}
//                            </Link>
//                         </Grid>
//                      </Grid>
//                   </Box>
//                </Box>
//             </Container>
//          </div>

//       </>
//    )
// }

// export default Register


// NEW CODE

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axiosInstance from './AxiosInstance';
import Dropdown from 'react-bootstrap/Dropdown';

const Register = () => {
   const navigate = useNavigate();
   const [selectedOption, setSelectedOption] = useState('Select User');
   const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
      type: "",
   });

   const handleSelect = (eventKey) => {
      setSelectedOption(eventKey);
      setData({ ...data, type: eventKey });
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!data?.name || !data?.email || !data?.password || !data?.type) return alert("Please fill all fields");
      else {
         axiosInstance.post('/api/user/register', data)
            .then((response) => {
               if (response.data.success) {
                  alert(response.data.message);
                  navigate('/login');
               } else {
                  console.log(response.data.message);
               }
            })
            .catch((error) => {
               console.log("Error", error);
            });
      }
   };

   return (
      <>
         <Navbar expand="lg" className="bg-primary text-white">
            <Container>
               <Navbar.Brand className="text-white"><h2>Study App</h2></Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav className="ms-auto">
                     <Link className="nav-link text-white" to={'/'}>Home</Link>
                     <Link className="nav-link text-white" to={'/login'}>Login</Link>
                     <Link className="nav-link text-white" to={'/register'}>Register</Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>

         <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
            <Container component="main" maxWidth="xs">
               <Box
                  sx={{
                     marginTop: 8,
                     padding: 4,
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     backgroundColor: '#f9f9ff',
                     boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                     borderRadius: 3,
                  }}
               >
                  <Avatar sx={{ bgcolor: 'primary.main', mb: 2 }} />
                  <Typography component="h1" variant="h5">
                     Register
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                     <TextField
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Full Name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        autoComplete="name"
                        autoFocus
                     />
                     <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        autoComplete="email"
                        autoFocus
                     />
                     <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                     />
                     <Dropdown className="my-3">
                        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                           {selectedOption}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                           <Dropdown.Item onClick={() => handleSelect("Student")}>Student</Dropdown.Item>
                           <Dropdown.Item onClick={() => handleSelect("Teacher")}>Teacher</Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>
                     <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: 'primary.main' }}
                     >
                        Sign Up
                     </Button>
                     <Grid container justifyContent="flex-end">
                        <Grid item>
                           <Typography variant="body2">
                              Already have an account?
                              <Link to={'/login'} style={{ color: '#3f51b5', marginLeft: '4px' }}>
                                 Sign In
                              </Link>
                           </Typography>
                        </Grid>
                     </Grid>
                  </Box>
               </Box>
            </Container>
         </div>
      </>
   );
};

export default Register;
