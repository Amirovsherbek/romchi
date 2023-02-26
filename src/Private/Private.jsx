import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
   let checkout=localStorage.getItem('acces_token')
  if (!true) {
    return <Navigate to="/auth" />;
  }
  return children;
}

export default PrivateRoute;















// import { Navigate } from "react-router-dom";
// function PrivateRoute({ children }) {
//     let token=false
//     if(!token){
//         return <Navigate to={'/auth'}/>
//     }      
//   return children;
// }

// export default PrivateRoute;
