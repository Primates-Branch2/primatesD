import React, { useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Searchbar } from "../Searchbar/Searchbar";
import rank from "../../../src/image/rank.png";
import schoolgirl from "../../../src/image/Component 18.png";
import school from "../../../src/image/Component 17.png";
import "../Student/student.css";
const Student = () => {
  const [studentName, setStudentName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [email, setemail] = useState("");
  const [studentid, setStudentId] = useState("");
  const [enrollmentno, setEnrollmentNo] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [schoolCity, setSchoolCity] = useState("");
  const [dob, setDOB] = useState("");
  const [mobile, setMobile] = useState("");
  const [standard, setStandard] = useState("");
  const [gender, setGender] = useState("");

  return (
    <div>
      <div className="student">
        <div>
          <Sidebar />
        </div>
        <div className="mainpart">
          <Searchbar />
          <div className="studentDetails">
            <div className="heading">
              <h4>ADD NEW STUDENT </h4>

              <div className="input">
                <h4>Student Details</h4>
              <div className="detailsOfStudent">
              <div>
                  <p>PHOTO</p>
                  <div id="photo"></div>
                </div>
                <form>
                  <div>
                    <div className="form">
                      <div>
                        <label htmlFor="studentName">Student Name</label>
                        <br />
                        <input
                          type="text"
                          id="studentName"
                          value={studentName}
                          placeholder="student name"
                          onChange={(e) => {
                            const re = /^[A-Za-z\s]+$/;
                            if (e.target.value === '' || re.test(e.target.value)) {
                              setStudentName(e.target.value);
                            }
                          }}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="fatherName">Father's Name:</label>
                        <br />
                        <input
                          type="text"
                          id="fatherName"
                          value={fatherName}
                          placeholder="father Name "
                          onChange={(e) => {
                            const re = /^[A-Za-z\s]+$/;
                            if (e.target.value === '' || re.test(e.target.value)) {
                              setFatherName(e.target.value);
                            }
                          }}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="motherName">Mother's Name:</label>
                        <br />
                        <input
                          type="text"
                          id="motherName"
                          value={motherName}
                          placeholder="motherName"
                          onChange={(e) => {
                            const re = /^[A-Za-z\s]+$/;
                            if (e.target.value === '' || re.test(e.target.value)) {
                              setMotherName(e.target.value);
                            }
                          }}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                          type="text"
                          id="email"
                          value={email}
                          placeholder="email"
                          onChange={(e) => setemail(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="studentid">Student ID</label>
                        <br />
                        <input
                          type="text"
                          id="studentid"
                          value={studentid}
                          placeholder="student id"
                          onChange={(e) => setStudentId(e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="enrollmentno">Enrollment No </label>
                        <br />
                        <input
                          type="text"
                          id="enrollmentno"
                          value={enrollmentno}
                          placeholder="enrollment no"
                          onChange={(e) => setEnrollmentNo(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="username">Username</label>
                        <br />
                        <input
                          type="text"
                          id="username"
                          value={username}
                          placeholder="username"
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="password">Password</label>
                        <br />
                        <input
                          type="text"
                          id="password"
                          value={password}
                          placeholder="password"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="form2">
                      <div>
                        <label htmlFor="state">State</label>
                        <br />
                        <input
                          type="text"
                          id="state"
                          value={state}
                          placeholder="state"
                          onChange={(e) => {
                            const re = /^[A-Za-z\s]+$/;
                            if (e.target.value === '' || re.test(e.target.value)) {
                              setState(e.target.value);
                            }
                          }}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="city">City</label>
                        <br />
                        <input
                          type="text"
                          id="city"
                          value={city}
                          placeholder="city"
                          onChange={(e) => {
                            const re = /^[A-Za-z\s]+$/;
                            if (e.target.value === '' || re.test(e.target.value)) {
                              setCity(e.target.value);
                            }
                          }}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="schoolCity">School City</label>
                        <br />
                        <input
                          type="text"
                          id="schoolCity"
                          value={schoolCity}
                          placeholder="schoolCity"
                          onChange={(e) => {
                            const re = /^[A-Za-z\s]+$/;
                            if (e.target.value === '' || re.test(e.target.value)) {
                              setSchoolCity(e.target.value);
                            }
                          }}
                          required
                        />
                      </div>
                    </div>
                    <div className="form3">
                      <div>
                        <label htmlFor="dob">D.O.B</label>
                        <br />
                        <input
                          type="text"
                          id="dob"
                          value={dob}
                          placeholder="dob"
                          onChange={(e) => setDOB(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="mobile">Mobile</label>
                        <br />
                        <input
                          type="text"
                          id="mobile"
                          value={mobile}
                          placeholder="mobile"
                          onChange={(e) => {
                            const re = /^[0-9\b]+$/;
                            if (e.target.value === '' || re.test(e.target.value)) {
                              setMobile(e.target.value);
                            }
                          }}
                         
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="standard">Standard</label>
                        <br />
                        <input
                          type="text"
                          id="standard"
                          value={standard}
                          placeholder="standard"
                          onChange={(e) => setStandard(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="gender">Gender</label>
                        <br />
                        <input
                          type="text"
                          id="gender"
                          value={gender}
                          placeholder="gender"
                          onChange={(e) => setGender(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="button">
                    <button id="button1">Save</button>
                    <button id="button2">Cancel</button>
                  </div>
                </form>
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default Student;
