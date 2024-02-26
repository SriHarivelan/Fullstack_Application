import React from 'react';
import HomeScreen from './Home';
import "../assets/css/Land.css";
import loandetails from "../assets/images/loandetails.png";

const Landing = () => {
  return (
    <div className="container4">
      <div className="landing-container">
        <div className='na'>
          <HomeScreen />
        </div>
        <div className="bo">
          <div className="back">
            <div className="left">
              <p> Peer to peer lending is an excellent investment option as it has a higher return on the capital.
                The emergence of P2P lending has enabled many individuals to lend money directly to prospective
                borrowers in a hassle-free manner without the involvement of the banks and FIs.
              </p>
            </div>
            <div className="right">
              <p> But just like any other investment,
                it has its risks. The main risk involved with peer-to-peer lending is the risk of default by the borrower. However,
                that risk can be greatly mitigated with certain practices.
              </p>
            </div>
          </div>
          <img src={loandetails} alt="Your image" className="overlay-image" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
