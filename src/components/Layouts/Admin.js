import React from "react";
import { useRouter } from "next/router";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "@/components/Navbars/AdminNavbar";
import AdminFooter from "@/components/Footers/AdminFooter";
import Sidebar from "@/components/Sidebar/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';

import routes from "@/routes";

function Admin(props) {
  // used for checking current route
  const router = useRouter();
  let mainContentRef = React.createRef();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContentRef.current.scrollTop = 0;
  }, []);
  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (router.route.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: "public/images/logo4.PNG",
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContentRef}>
        <AdminNavbar {...props} brandText={getBrandText()} />
        {props.children}
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
}

export default Admin;
