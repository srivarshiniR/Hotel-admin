import React, { useState } from "react";
import "../screens/room.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import { DatePicker, Space } from "antd";
import moment from "moment";

// import {faPerson} from "@fontawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

function Room({ rooms }) {

  //passing the dates for bookinpage using navigation

  const navigate = useNavigate();
  function gotobooking(id) {
    if(fromdate&&todate){
    navigate(`/booking/${id}`, {
      state: { startdate: fromdate, enddate: todate , options:options},
    });
  }
  }
  //dates declaration

  const [fromdate, setFromdate] = useState();
  const [todate, setTodate] = useState();
  

  //search declaration

  const [search, setSearch] = useState("");

  //set dates from users

  function filterByDate(dates) {
    setFromdate(moment(dates)._i[0].$d);
    setTodate(moment(dates)._i[1].$d);
    console.log(moment(dates)._i[0].$d);
    console.log(moment(dates)._i[1].$d);
  }

//set options - no.of members who need a stay 

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });


  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };


  //search function

  const handleSearch = () => {
    navigate('/')
  };

  return (
    <>
      <Navbar />
      <div className="mainpage">
        <div className="row">
       
         <div className="headerSearchItem">
          <div className="col-md-3">
            <div className="searchlocation">
            <input
              type="search"
              placeholder="where you want to go?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            </div>
          </div>

          <div className="col-md-4">
            <div className="headerdate">
            <RangePicker format="DD-MM-YYYY" onChange={filterByDate} style={{color:'lightgray'}} />
            </div>
          </div>

          <div className="headerSearchOption">
                {/* <FontAwesomeIcon icon={faPerson} className="headerIcon" /> */}
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>


              <div className="headerSearchbtn">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
              </div>

        </div>

        {rooms
          .filter((room) => {
            return (
              room.name.toLowerCase().includes(search?.toLowerCase()) ||
              room.destination.toLowerCase().includes(search?.toLowerCase())
            );
          })

          .map((rooms) => (
            <div className="row ">
              <div className="col-md-5">
                <img src={rooms.imgurl[0]} className="image" />
              </div>
              <div className="col-md-6">
                <h2>{rooms.name}</h2>
                <p>
                  {rooms.destination}
                </p>
                <p><b><span style={{color:"green"}}>{rooms.ratings}</span></b></p>

                <div className="buttonss">
                  {/* <Link
                    to={`/booking/${rooms._id}`}
                    style={{ textDecoration: "none" }}
                  > */}

                  <button
                    className="btnbooking"
                    onClick={() => gotobooking(rooms?._id)}
                  >
                    Book Now
                  </button>
                  {/* </Link> */}

                  <Link to={`/display/${rooms._id}`}>
                    <button className="btndetails">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Room;
