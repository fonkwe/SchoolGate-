"use client"

import React, { useState } from 'react';
import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";


const menuItems = [
  {
    title: "School Management",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Students",
        path: "/dashboard/students",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Schools",
        path: "/dashboard/schools",
        icon: <MdShoppingBag />,
      },
      {
        title: "Teachers",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Statstitics",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "General",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

function Sidebar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={ "/noavatar.png"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{"username"}</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      {/* <form
        action={async () => {
          "use server";
        }}
      > */}
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      {/* </form> */}
    </div>
  );
}
export default Sidebar;

