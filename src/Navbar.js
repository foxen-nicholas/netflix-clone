import React, {useState, useEffect} from "react";
import "./Navbar.css";

function Navbar() {
  const [show, setHandleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleShow(true);
      } else setHandleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    }
  }, []);

  return (
    <div className={`navbar ${show && "nav_black"}`}>
      <img className="nav_logo" src="./netflix-logo.png" alt="Netflix logo" />
      <img className="nav_avatar" src="https://occ-0-1339-1340.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeUqbfriC_pGWtwTa1KOx-ZSiQYa7ltLkOuduGxY_GRRc41ugYJNGYHe4LNcmshST4qkRSENvcs2xFomPc0rtX8wq2NG.png?r=b97" alt="Profile avatar" />
    </div>
  )
}

export default Navbar
