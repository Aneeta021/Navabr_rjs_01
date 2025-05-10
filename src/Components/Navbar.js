import React from "react";
// import "./Nav.css"

const Navbar = (props) => {
  return (
    <>
      {/* Navbar by Bootstarp */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid d-flex align-items-center">
         <div className="row "> {/*d-flex align-items-center */}
            <div className="logo">
              <a href="#" className="logo">
                <img src={props.logo} alt="" width={70} />
              </a>
            </div>
            
            <div className="nav-items collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item px-3">
                  <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;

// const Navbar = (props) => {
//   return (
//     <>
//       <h2>Navbar</h2>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container-fluid d-flex justify-content-center">
//           <a className="navbar-brand logo" href="#">
//             <img className="" src={props.logo} alt="Logo" width={70} />
//           </a>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item px-3">
//                 <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link text-white" href="#">Link</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
