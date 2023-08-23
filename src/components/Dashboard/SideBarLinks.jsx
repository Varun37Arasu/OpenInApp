import React from "react";
import styles from "./Dashboard.module.css";
import { FiPieChart } from "react-icons/fi";

const SideBarLinks = ({ name, icon }) => {
  return (
    <>
      <ul className={styles.sidebarNames}>
        <li>{icon}</li>
        {name}
      </ul>
    </>
  );
};

export default SideBarLinks;
