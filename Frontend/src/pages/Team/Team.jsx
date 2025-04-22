import React from "react";
import "./Team.css";
import TeamSection from "../../components/TeamCard/TeamSection";
import { useEffect } from "react";

const Team = () => {

  useEffect(() => {
    document.title = 'Our Team - Pinch of Yum';
  }, []);

  function backTotop(){
    //window.scrollTo(0,0);
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
  }

  return (
    <>
      <div className="heading">
        <h2>OUR TEAM</h2>
        <div className="content">
          We have an entire team of geniuses behind us at Pinch of Yum who are
          experts in a little bit of everything - from customer service, to social
          media, to videography, to assisting with recipe shoots. They are
          EVERYTHING.
        </div>
        <div>Our team helps keep it all running smoothly.</div>
      </div>
      <div className="team-section">
        <TeamSection />
      </div>

      <div className="back-to-top">
        <button onClick={backTotop}>
            <i class="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </>
  );
};

export default Team;
