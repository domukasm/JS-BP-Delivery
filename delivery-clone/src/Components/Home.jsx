import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import SignIn from "./SignIn";

function Home() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div>
        <header>
          <div className="main-header">
            <div className="boxing">
              <h1 className="header1">
              Experience fast and reliable delivery services<br />
              with our trusted team of professionals.
              </h1>
              <button className="button">
                <img
                  src={process.env.PUBLIC_URL + "/logo.png"}
                  alt="Button Image"
                />
                <a href="/create" className="button-text">
                  Create !
                </a>
              </button>
            </div>
          </div>
        </header>
        <section className="container">
          <div className="row">
            <div className="col-md-5 mt-5 order-last order-md-first">
              <p className="title mb-4">What to expect</p>
              <h2 className="heading">
              Professional and courteous service
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 order-md-1">
              <div className="circle mt-5">1</div>
              <h2 className="header2">Start with the basics</h2>
              <p>Safe and secure handling of packages</p>
            </div>
            <div className="col-md-4 order-md-2">
              <div className="circle mt-5">2</div>
              <h2 className="header2">Competitive pricing</h2>
              <p>We'll guide you with tips along the way.</p>
            </div>
            <div className="col-md-4 order-md-3">
              <div className="circle mt-5">3</div>
              <h2 className="header2">Share with friends and family</h2>
              <p>Real-time tracking and updates on delivery status</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
