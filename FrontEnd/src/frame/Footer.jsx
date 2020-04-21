import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBNavLink } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter className="font-small pt-0" color="blue lighten-2">
      <MDBContainer>
        <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <MDBNavLink to="#!">About us</MDBNavLink>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <MDBNavLink to="#!">Products</MDBNavLink>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <MDBNavLink to="#!">Awards</MDBNavLink>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <MDBNavLink to="#!">Help</MDBNavLink>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <MDBNavLink to="#!">Contact</MDBNavLink>
            </h6>
          </MDBCol>
        </MDBRow>
        <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
        <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
          <MDBCol md="8" sm="12" className="mt-5">
            <p style={{ lineHeight: "1.7rem" }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae
              vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur.
            </p>
          </MDBCol>
        </MDBRow>
        <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
        <MDBRow className="pb-3">
          <MDBCol md="12">
            <div className="mb-5 flex-center">
              {/* <a className="gplus-ic">
                <i className="fab fa-google-plus-g fa-lg white-text mr-md-4">
                </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-4"> </i>
              </a> */}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} - 
          <a href="https://github.com/choi94/Survival_Project"> github </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;