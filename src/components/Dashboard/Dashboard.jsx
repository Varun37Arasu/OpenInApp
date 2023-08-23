import styles from "./Dashboard.module.css";
import {
  FaRegCalendar,
  FaRegSun,
  FaRegUserCircle,
  FaTags
} from "react-icons/fa";
import { FiPieChart } from "react-icons/fi";
import SideBarLinks from "./SideBarLinks";
import LineChart from "./LineChart.jsx";
import Search from "../../assets/SearchIcon.svg";
import Bell from "../../assets/bell.svg";
import ProfilePic from "../../assets/userProfile.png";
import DropDown from "../../assets/dropdown.png";
import Arrow from "../../assets/downarrow.jpg";
import { PieChart } from "./PieChart";
import Card from "./Card";
import { useState } from "react";
import Data from "./data";

const Dashboard = () => {
  const [click, setClick] = useState(false);

  const handleNav = () => {
    setClick(!click);
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.navigation}>
        <div className={styles.leftSide} />
        <b className={styles.board}>Board.</b>
        <div className={styles.navBox}>
          <b>
            <SideBarLinks name="Dashboard" icon={<FiPieChart />} />
          </b>
          <SideBarLinks name="Transactions" icon={<FaTags />} />
          <SideBarLinks name="Schedules" icon={<FaRegCalendar />} />
          <SideBarLinks name="Users" icon={<FaRegUserCircle />} />
          <SideBarLinks name="Settings" icon={<FaRegSun />} />
        </div>

        <div className={styles.help}>Help</div>
        <div className={styles.contactUs}>Contact Us</div>
      </div>

      <div className={styles.varun}>
        <div className={styles.menu}>
          <button className={styles.menu_button} onClick={handleNav}>
            <h1>Board.</h1>
          </button>
        </div>

        {click && (
          <nav className={styles.navMobile}>
            <div className={styles.navigationM}>
              <div className={styles.leftSideM} />
              <div className={styles.navBoxM}>
                <b>
                  <SideBarLinks name="Dashboard" icon={<FiPieChart />} />
                </b>
                <SideBarLinks name="Transactions" icon={<FaTags />} />
                <SideBarLinks name="Schedules" icon={<FaRegCalendar />} />
                <SideBarLinks name="Users" icon={<FaRegUserCircle />} />
                <SideBarLinks name="Settings" icon={<FaRegSun />} />
              </div>

              <div className={styles.help}>Help</div>
              <div className={styles.contactUs}>Contact Us</div>
            </div>
          </nav>
        )}

        <div className={styles.mobileView}>
          <nav className={styles.navMobile}>
            <div className={styles.navigationM}>
              <div className={styles.leftSideM} />
              <div className={styles.navBoxM}>
                <b>
                  <SideBarLinks name="Dashboard" icon={<FiPieChart />} />
                </b>
                <SideBarLinks name="Transactions" icon={<FaTags />} />
                <SideBarLinks name="Schedules" icon={<FaRegCalendar />} />
                <SideBarLinks name="Users" icon={<FaRegUserCircle />} />
                <SideBarLinks name="Settings" icon={<FaRegSun />} />
              </div>

              <div className={styles.help}>Help</div>
              <div className={styles.contactUs}>Contact Us</div>
            </div>
          </nav>
        </div>

        <div className={styles.header}>
          <div className={styles.menu900}>
            <button className={styles.menu_button900}>
              <h1>Board.</h1>
            </button>
          </div>

          <b className={styles.dashboard2}>Dashboard</b>
          <div className={styles.dummy}></div>
          <div className={styles.searchBar}>
            <input className={styles.search} placeholder="Search..." />

            <img className={styles.searchIcon} alt="" src={Search} />
          </div>
          <img className={styles.vectorIcon6} alt="" src={Bell} />
          <img className={styles.maskGroupIcon} alt="" src={ProfilePic} />
        </div>

        <div className={styles.cardContainer}>
          {Data[0].cards.map((card) => {
            return (
              <>
                <Card
                  title={card.title}
                  number={card.number}
                  icon={card.icon}
                  color={card.color}
                />
              </>
            );
          })}

          {/* <Card title="Total transactions" number="1520" icon={Transactions} />
          <Card
            title="Total Likes"
            number="9721"
            icon={Likes}
            color="#EFDADA"
          />
          <Card title="Total Users" number="892" icon={Users} color="#DEE0EF" /> */}
        </div>

        <div className={styles.activitiesCard}>
          <h2 className={styles.activityHeading}>Activities</h2>
          <span className={styles.activityDropDown}>
            May - June 2021{" "}
            <span>
              <img src={DropDown} />
            </span>
          </span>
          <div className={styles.rotate}>
            <LineChart width="150px" height="200px" />
          </div>
        </div>

        <div className={styles.bottomPart}>
          <div className={styles.topProductsCard}>
            <div className={styles.productHeading}>
              <h2 className={styles.productHeading}>Top Products</h2>
              <span className={styles.activityDropDown}>
                May - June 2021
                <span>
                  <img src={DropDown} />
                </span>
              </span>
            </div>
            <div className={styles.pieChartReducer}>
              <div className={styles.graph}>
                <PieChart />
              </div>
              <div className={styles.pieChartData}>
                <ul className={styles.legendLabels}>
                  <li>
                    Super Hoodies <span>14%</span>{" "}
                  </li>
                  <li>
                    Custom Short Pants<span>31%</span>
                  </li>
                  <li>
                    Basic Tees<span>55%</span>
                  </li>
                </ul>
                {/* <h4 >
              </h4> */}
              </div>
            </div>
          </div>

          <div className={styles.scheduleCard}>
            <div className={styles.scheduleHeading}>
              <h2 className={styles.scheduleHeading}>Today's Schedule</h2>
              <span className={styles.activityDropDown}>
                See All
                <span>
                  <img src={Arrow} />
                </span>
              </span>
            </div>
            <div className={styles.meetingBox}>
              <ul className={styles.meetingDetails}>
                <li className={styles.event}>
                  <div
                    className={styles.schedularBar}
                    style={{ backgroundColor: "#9BDD7C" }}
                  ></div>
                  <div className={styles.eventDetail}>
                    <p>Meeting with Suppliers from Kuta Bali</p>
                    <span>14.00-15.00</span>
                    <span>at Sunset Road,Kuta Bali</span>
                  </div>
                </li>
                <li className={styles.event}>
                  <div
                    className={styles.schedularBar}
                    style={{ backgroundColor: "#6972C3" }}
                  ></div>
                  <div className={styles.eventDetail}>
                    <p>Check operation at Giga Factory 1</p>
                    <span>18.00-20.00</span>
                    <span>at Central Jakarta</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
