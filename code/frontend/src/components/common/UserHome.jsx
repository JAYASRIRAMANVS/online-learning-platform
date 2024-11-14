// import React, { useContext, useEffect, useState } from 'react';
// import { Container } from 'react-bootstrap';
// import { UserContext } from '../../App';
// import TeacherHome from '../user/teacher/TeacherHome';
// import AdminHome from '../admin/AdminHome';
// import StudentHome from '../user/student/StudentHome';
// // import axiosInstance from './AxiosInstance';

// const UserHome = () => {
//    const user = useContext(UserContext);
//    let content;
//    {
//       switch (user.userData.type) {
//          case "Teacher":
//             content = <TeacherHome />
//             break;
//          case "Admin":
//             content = <AdminHome />
//             break;
//          case "Student":
//             content = <StudentHome />
//             break;

//          default:
//             break;
//       }
//    }

//    return (
//       <Container>
//          {content}
//       </Container>
//    );
// };

// export default UserHome;

import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import TeacherHome from '../user/teacher/TeacherHome';
import AdminHome from '../admin/AdminHome';
import StudentHome from '../user/student/StudentHome';
import './UserHome.css';

const UserHome = () => {
   const user = useContext(UserContext);
   let content;

   switch (user.userData.type) {
      case 'Teacher':
         content = <TeacherHome />;
         break;
      case 'Admin':
         content = <AdminHome />;
         break;
      case 'Student':
         content = <StudentHome />;
         break;
      default:
         content = <div className="no-access">Access Denied</div>;
         break;
   }

   return (
      <Container className="user-home-container">
         <div className="user-home-header">
            <h2>Welcome, {user.userData.name}</h2>
            <p>Your role: {user.userData.type}</p>
         </div>
         <div className="content-container">
            {content}
         </div>
      </Container>
   );
};

export default UserHome;

