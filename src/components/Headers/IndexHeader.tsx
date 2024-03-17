/*eslint-disable*/
import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import headerImage from "../../img/cloud9.jpg";
import logoImg from "../../assets/img/now-logo.png";
import GlobeLogo from "../../img/globe.png";

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
          style={{

            backgroundImage: `url(${headerImage})`
          }}
          ref={pageHeader}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity here (0.5 is 50%)
            }}
          ></div>
        </div>
        <Container>
          <div className="content-center brand">
            {/* <img alt="..." className="n-logo" src={logoImg}></img> */}
            <h1 className="h1-seo">Wave Check PH</h1>
            <h3>Discover the Philippines unlimited waves</h3>
          </div>
          <strong className="category" style={{ marginTop: '500px' }}>
            Powered by{" "}
            <img src={GlobeLogo} alt="Globe Telecom Logo" width="100" />
          </strong>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
