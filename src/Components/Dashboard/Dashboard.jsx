import React from 'react'
import { Searchbar } from '../Searchbar/Searchbar'
import "../Dashboard/Dashboard.css"
import uploadimg from "../../../src/image/upload img.png"
import Addplus from "../../../src/image/plus img.png"
import notesImg from "../../../src/image/Notes img.png"
import loader from "../../../src/image/loaderimg.png"
import loader1 from "../../../src/image/loadeimg 1.png"
import octimg from "../../../src/image/Oct img.png"
import Decimg from "../../../src/image/Decimg.png"
import date24img from "../../../src/image/24 img.png"
import date12img from "../../../src/image/12 img.png"
import lineimg from "../../../src/image/line img.png"
import greenChart from "../../../src/image/greenchart img.png"
import blueChart from "../../../src/image/bluechart img.png"
import greenRing  from "../../../src/image/green ring.png"
import blueRing from "../../../src/image/blue ring.png"
import rankImgae from "../../../src/image/rank img.png"
import stdImg from "../../../src/image/std img.png"
import stdRank from "../../../src/image/std rank.png"
import DoughnutChart from '../Chart/DoughnutChart '
import Chart from '../Chart/chart'
import Chart2 from '../Chart/chart2'
import { Sidebar } from '../Sidebar/Sidebar'

export const Dashboard = () => {
    const handleClick = () => {
       
        window.location.href = '/student';
      };
  return (
    <div className='App'>
     <div>
     <Sidebar/>
     </div>
      <div>
      <Searchbar/>
        <div className='Components'>
            <div className='main1'>
            <div className='dash-main1'>
            <div className='gird1'>
                <div id='subgrid1'>
                    <img src={uploadimg} alt="" id='grid1-img' />
                </div>
                <h4 id='grid1-text'>Upload Student Data</h4>
            </div>
            <div className='gird1'>
                <div id='subgrid1'>
                    <img src={Addplus} alt="" id='grid1-img' onClick={handleClick}/>
                </div>
                <h4 id='grid1-text' >Add Student</h4>
            </div>
            <div className='gird1'>
                <div id='subgrid1'>
                    <img src={Addplus} alt="" id='grid1-img' />
                </div>
                <h4 id='grid1-text'>Add Co-ordinator</h4>
            </div>
            <div className='gird1'>
                <div id='subgrid1'>
                    <img src={Addplus} alt="" id='grid1-img' />
                </div>
                <h4 id='grid1-text'>Add Teacher</h4>
            </div>
            </div>
            <div className='dash-main2'>
            <div className='gird2'>
                <div id='subgrid2'>
                    <img src={octimg} alt="" id='grid2-img' />
                    <img src={lineimg} alt="" id='grid2-img2' />
                    <img src={date24img} alt="" id='grid2-img3' />
                </div>
                <div className='grid2-text'>
                    <p id='grid2-text1'>Last Assessment Completion Date</p>
                    <p id='grid2-text2'>Assessment:</p>
                    <div id='grid2-text3'>
                        <img id='grid2-text3-img' src={notesImg} alt="" />
                        <h5 id='grid2-text3-text'>Critical Thinking</h5>
                    </div>
                    <p id='grid2-text1' >Completion</p>
                    <div id='grid2-text3'> 
                    <img src={loader1} id='grid2-text3-img1' alt="" />                      
                        <h5 id='grid2-text3-text1'>80%</h5>
                    </div>
                </div>
            </div>
            <div className='gird2'>
                <div id='subgrid2'>
                    <img src={Decimg} alt="" id='grid2-img' />
                    <img src={lineimg} alt="" id='grid2-img2' />
                    <img src={date12img} alt="" id='grid2-img3' />
                </div>
                <div className='grid2-text'>
                    <p id='grid2-text1'>Next Assessment Creation Date</p>
                    <p id='grid2-text2'>Assessment:</p>
                    <div id='grid2-text3'>
                        <img id='grid2-text3-img' src={notesImg} alt="" />
                        <h5 id='grid2-text3-text'>Communication</h5>
                    </div>
                    <p id='grid2-text1' >Completion</p>
                    <div id='grid2-text3'>
                        <img id='grid2-text3-img1' src={loader} alt="" />
                        <h5 id='grid2-text3-text1'>0%</h5>
                    </div>
                </div>
            </div>
            <div className='gird3'>
                <h4 id='grid-80'>80%</h4>
                <div id='subgrid'>
                    <h4 id='grid3-text'>Assessment Chart</h4>
                    <Chart   /> 
                    
                </div>
                <div id='subgrid3'>
                    <img id='grid3-img1' src=   {greenRing} alt="" />
                    <p id='grid3-text1'>No of Students <br />Taken Assessment</p>
                </div>    
            </div>
            <div className='gird3'>
            <h4 id='grid-60'>60%</h4>
                <div id='subgrid'>
                    <h4 id='grid3-text'>Assessment Chart</h4>
                    <Chart2/>
                </div>
                <div id='subgrid3'>
                    <img id='grid3-img1' src=   {blueRing} alt="" />
                    <p id='grid3-text1'>No of Students <br />Taken Assessment</p>
                </div>    
            </div>
            </div>
            </div>
            <div className='main2'>
                <div className='Ranking'>
                    <div className='India-rank'>
                        <p id='rank-text'><b>All India Ranking</b></p>
                        <img id='rank-img' src={rankImgae} alt="" />
                        <h4 id='rank-text1'>Overall MPI</h4>
                    </div>
                </div>
                <div className='index-score'>
                    <div className='best-ind'>
                        <p id='ind-text'><b>Best Index Score</b></p>
                    </div>
                    <div className='ind-img'>
                            <img src={stdImg} alt=""  id='ind-img1'/>
                            <img src={stdRank} alt=""  id='ind-img2'/>
                    </div>
                    <p id='ind-text1'>Valarmathi</p>
                    <div className='ind-domain'>
                        <div className='ind-domain1'>
                            <p>Index  <br />94.5%</p>
                            <p>Domain <br />Mindset</p>
                        </div>
                    </div>
                </div>
                <div className='graph-main'>
                    <div className='graph'>
                        <p id='graph-text'><b>Pride Chart on 6th Standard</b></p>
                    </div>
                    <div className='chart'>
                        <div className='chart-sub'>
                            <p id='chart-text'><b>Outstanding</b></p>
                            <div className='bar'>
                                <div className='line'>
                                    <div className='indicator'></div>
                                </div>   
                            </div>
                        </div>
                        <div className='chart-sub'>
                            <p id='chart-text'><b>Proficient</b></p>
                            <div className='bar2'>
                                <div className='line'>
                                    <div className='indicator2'></div>
                                </div>
                               
                            </div>
                        </div>
                        <div className='chart-sub'>
                            <p id='chart-text'><b>Advanced</b></p>
                            <div className='bar3'>
                                <div className='line'>
                                    <div className='indicator3'></div>
                                </div>
                            </div>
                        </div>
                        <div className='chart-sub'>
                            <p id='chart-text'><b>Basic</b></p>
                            <div className='bar4'>
                                <div className='line'>
                                    <div className='indicator4'></div>
                                </div>
                            </div>
                        </div>
                        <div className='chart-sub'>
                            <p id='chart-text'><b>Beginning</b></p>
                            <div className='bar5'>
                                <div className='line'>
                                    <div className='indicator5'></div>
                                </div>
                            </div> 
                        </div> 
                        <div className='number'>
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
  )
}
