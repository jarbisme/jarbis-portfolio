/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
// import logo from "../../icons/jarbis-logo.svg";
// import menu from "../../../icons/menu-button.svg";
// import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

// function NavbarComponent() {
//   const [expanded, setExpanded] = useState(false);
//   return (
//     <Navbar id="navbar" bg="light" expand="sm" mg="0">
//       <Container>
//         <Navbar.Brand href="#home">
//           <img className="logo" src={logo} alt="jarbis-logo" />
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="basic-navbar-nav"
//           onClick={() => {
//             console.log(expanded);
//             setExpanded(!expanded);
//           }}
//         >
//           <img src={menu} alt="" />
//         </Navbar.Toggle>
//         <Navbar.Collapse
//           id="navbarSupportedContent"
//         >
//           <Nav
//             className="me-auto"
//             expanded={expanded ? "expanded" : "collapse"}
//           >
//             <Nav.Link
//               href="#welcome-section"
//               onClick={() => setExpanded(false)}
//             >
//               Home
//             </Nav.Link>
//             <Nav.Link
//               href="#projects-section"
//               onClick={() => {
//                 console.log(expanded);
//                 setExpanded(false);
//               }}
//             >
//               Projects
//             </Nav.Link>
//             <Nav.Link href="#resume" onClick={() => setExpanded(false)}>
//               About Me
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav id="navbar" className="navbar navbar-expand-sm navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="logo" src={'/icons/jarbis-logo.svg'} alt="jarbis-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setExpanded(expanded ? false : true)}
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <img src={'/icons/menu-button.svg'} alt="" />
        </button>
        <div
          className={`${expanded ? "" : "collapse"} navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li
              className="nav-item"
              // data-bs-toggle="collapse"
              // data-bs-target=".navbar-collapse.show"
              // data-toggle="collapse"
              // data-target=".navbar-collapse.show"
              // data-bs-toggle="collapse"
              // data-bs-target="#navbarSupportedContent"
            >
              <a
                className="nav-link"
                href="#welcome-section"
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                  }, 150)
                }
              >
                Home
              </a>
            </li>
            <li
              className="nav-item"
              // data-bs-toggle="collapse"
              // data-bs-target=".navbar-collapse.show"
            >
              <a
                className="nav-link active"
                href="#projects-section"
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                  }, 150)
                }
              >
                Projects
              </a>
            </li>
            <li
              className="nav-item"
              // data-bs-toggle="collapse"
              // data-bs-target=".navbar-collapse.show"
            >
              <a
                className="nav-link"
                href="#resume"
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                  }, 150)
                }
              >
                About Me
              </a>
            </li>
            <li
              className="nav-item"
              // data-bs-toggle="collapse"
              // data-bs-target=".navbar-collapse.show"
            >
              <a className="nav-link" href="#footer">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
