import React, { useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Searchbar } from "../Searchbar/Searchbar";
import rank from "../../../src/image/rank.png";
import schoolgirl from "../../../src/image/Component 18.png";
import school from "../../../src/image/Component 17.png";
import child from "../../../src/image/childimg.png"
import growth from "../../../src/image/growth.png"
import hand from "../../../src/image/hand.png"
import manyChild from "../../../src/image/manyChild.png"
import "../Student/student.css";
import "../Profile/profile.css";
const Profile = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleModalOpen = (content) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalContent({});
  };

  // Array of objects representing your data
  const profileData = [
    {
      id: 1,
      title: "Pride Profile",
      text: "Meeting everyday needs demands the simultaneous use of one to five human capabilities. Those leveraging maximum capabilities concurrently are highly preferred in work environments.",
      image: child
    },
    {
      id: 2,
      title: "Productivity",
      text: "In challenging situations, making accurate and immediate decisions is crucial for a safe and satisfactory outcome, with BPSE being the key influencing factor.",
      image: growth
    },
    {
      id: 3,
      title: "Intelligence",
      text: "Intelligence is the unique capacity to apply shared knowledge in distinctive ways, learned from the same educational foundation.",
      image: hand
    },
    {
      id: 4,
      title: "Performance",
      text: "Everyone has a preferred method to receive information, such as reading subtitles for a more authentic understanding, optimizing precision and efficiency through their sensory pathways.",
      image: manyChild
    }
  ];
  return (


    
    <div>
      <div className="student">
        <div>
          <Sidebar />
        </div>
        <div className="mainpart">
          <Searchbar />
          <div className="profilesection">
            <div className="ProfilePart">
              <h3 id="mpiProfile">MPI Profiles</h3>
              <div className="modals">
                {profileData.map((item) => (
                  <div style={{display:"flex",gap:"10px",flexDirection:item.id % 2 == 1 ? "flex-row" : "row-reverse"}} key={item.id}  onClick={() => handleModalOpen(item)}>
                    <p id="part1Text">{item.text}</p>
                    <div className="image-container">
                      <img className="img"  src={item.image} alt="" />
                      <div className="text-overlay">
                        <p className="image-text">{item.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="main2">
              <div className="Ranking">
                <div className="best-ind">
                  <p id="ind-text">
                    <b>MPI All India Ranking</b>
                  </p>
                  <img id="rank-img" src={school} alt="" />
                </div>
                <h4 id="school">Vani Vidhyalaiya</h4>
                <div className="vaniRank">
                  <h4 id="rank">Rank-465</h4>
                  <img id="rankImg" src={rank} alt="" />
                </div>
              </div>

              <div className="index-score">
                <div className="best-ind">
                  <p id="ind-text">
                    <b>Best Index Score</b>
                  </p>
                </div>
                <div className="ind-img">
                  <img src={schoolgirl} alt="" id="ind-img1" />
                </div>
                <p id="ind-text1">Valarmathi</p>
                <div className="ind-domain">
                  <div className="ind-domain1">
                    <p>
                      Index <br />
                      94.5%
                    </p>
                    <p>
                      Domain <br />
                      Mindset
                    </p>
                  </div>
                </div>
              </div>
              <div className="graph-main">
                <div className="graph">
                  <p id="graph-text">
                    <b>Pride Chart on 6th Standard</b>
                  </p>
                </div>
                <div className="chart">
                  <div className="chart-sub">
                    <p id="chart-text">
                      <b>Outstanding</b>
                    </p>
                    <div className="bar">
                      <div className="line">
                        <div className="indicator"></div>
                      </div>
                    </div>
                  </div>
                  <div className="chart-sub">
                    <p id="chart-text">
                      <b>Proficient</b>
                    </p>
                    <div className="bar2">
                      <div className="line">
                        <div className="indicator2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="chart-sub">
                    <p id="chart-text">
                      <b>Advanced</b>
                    </p>
                    <div className="bar3">
                      <div className="line">
                        <div className="indicator3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="chart-sub">
                    <p id="chart-text">
                      <b>Basic</b>
                    </p>
                    <div className="bar4">
                      <div className="line">
                        <div className="indicator4"></div>
                      </div>
                    </div>
                  </div>
                  <div className="chart-sub">
                    <p id="chart-text">
                      <b>Beginning</b>
                    </p>
                    <div className="bar5">
                      <div className="line">
                        <div className="indicator5"></div>
                      </div>
                    </div>
                  </div>
                  <div className="number">
                    <p>0</p>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                  </div>
                </div>
              </div>
            </div>
      
          </div>
          

          {isModalOpen && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <div className="modal-body">
              <p id="part1Text">{modalContent.text}</p>
              <div className="image-container">
                <img src={modalContent.image} alt="" />
                <div className="text-overlay">
                  <p className="image-text">{modalContent.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


        </div>
      </div>
    </div>
  );
};

export default Profile;
