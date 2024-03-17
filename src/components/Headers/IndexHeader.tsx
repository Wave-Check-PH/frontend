/*eslint-disable*/
import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import headerImage from "../../img/cloud9.jpg";
import logoImg from "../../assets/img/now-logo.png";
import GlobeLogo from "../../img/globe.png";
import invisionLogo from "../../assets/img/invision-white-slim.png";
import creativeTimLogo from "../../assets/img/creative-tim-white-slim2.png";

function IndexHeader() {
  let pageHeader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        if (pageHeader.current) {
          pageHeader.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
        }
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  }, []);

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{ backgroundImage: `url(${headerImage})` }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img alt="..." className="n-logo" src={logoImg}></img>
            <h1 className="h1-seo">Wave Check PH</h1>
            <h3>Discover the Philippines unlimited waves</h3>
          </div>
          <h6 className="category category-absolute">
            Powered by{" "}
            <img src={GlobeLogo} alt="Globe Telecom Logo" width="100" />
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
