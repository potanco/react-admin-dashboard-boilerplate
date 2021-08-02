// import jwtDecode, { JwtPayload } from 'jwt-decode';
// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useLocation } from 'react-router-dom';
// import { logout } from '../slices/auth';

// const CheckToken: React.FC = () => {
//   const { pathname } = useLocation();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     let token = null;

//     if (localStorage.getItem('token')) {
//       token = localStorage.getItem('token');
//     } else {
//       dispatch(logout(0));
//     }
//     const currentDate = new Date();
//     if (token) {
//       try {
//         const { exp } = jwtDecode<JwtPayload>(token);
//         const expirationTime = exp ? exp * 1000 - 15000 : 0;

//         if (exp !== undefined && expirationTime !== 0 && currentDate.getTime() >= expirationTime) {
//           dispatch(logout(0));
//         }
//       } catch (e) {
//         dispatch(logout(0));
//       }
//     }
//   }, [pathname]);

//   return null;
// };

// export default CheckToken;
import React from 'react';

const CheckToken = () => {
  return <div></div>;
};

export default CheckToken;
