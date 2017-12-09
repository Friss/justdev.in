import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <section className="hero is-info is-medium background-image">
      <div className="overlay" />
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">JustDev.In</h1>
          <h2 className="subtitle is-5">
            The ramblings of a software engineer
          </h2>
          <span className="icon is-large">
            <i className="fa fa-3x fa-chevron-down scroll-down" />
          </span>
        </div>
      </div>
    </section>
    <section className="section is-small">
      <div className="container">
        <div className="columns is-align-items-center">
          <div className="column">
            <h1 className="title is-2">
              <Link to="/out-in-the-open/">
                Out in the Open - A Tale of Insecure Public Profiles
              </Link>
            </h1>
            <h3>Zachary Friss - 1/27/2015</h3>
            <div className="content">
              <p>
                This year for Christmas I got my fiancé a medical ID bracelet.
                Rather than being engraved with her information, it has an
                online profile that a first responder or doctor can view in
                three ways: by scanning a QR code, entering the band ID and pin
                online or calling the service and providing the ID and pin.
                After receiving the bracelet and going online to create her
                profile, we were pleased with just how easy it was to enter
                information.
              </p>
              <p>
                As I gave the profile a closer look I saw something curious. The
                profile page that you are sent to after registering is{' '}
                <code>http://example.com/profile/XXX</code> where{' '}
                <code>XXX</code> is a number. Being the curious web developer I
                am I decided to check out what would happen if I were to change
                that number by 1. When I did I was shocked to see that I could
                access all the information about someone who had registered just
                before us! I was astounded at how easy it was to view everyone’s
                personal medical information simply by changing a number in a
                URL. The information varied from addresses and phone numbers to
                medical conditions and insurance information.{' '}
              </p>
              <p>
                <Link
                  to="/out-in-the-open/"
                  className="button is-primary is-outlined"
                >
                  Read More
                </Link>
              </p>
            </div>
          </div>

          <div className="column is-one-quarter links">
            <h3>
              <i className="fa fa-github" /> Github
            </h3>
            <p>
              <a href="https://github.com/friss" target="_blank">
                https://github.com/friss
              </a>
            </p>

            <h3>
              <i className="fa fa-twitter" /> Twitter
            </h3>
            <p>
              <a href="https://twitter.com/thatguyfriss" target="_blank">
                https://twitter.com/thatguyfriss
              </a>
            </p>

            <h3>
              <i className="fa fa-briefcase" /> Portfolio
            </h3>
            <p>
              <a href="https://friss.me" target="_blank">
                https://friss.me
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>&copy; Zachary Friss</p>
        </div>
      </div>
    </footer>
  </div>
);

export default IndexPage;
