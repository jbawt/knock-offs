/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Standings from "views/Standings/Standings.js";
import LeaguePlayers from "views/LeaguePlayers/LeaguePlayers.js";
import Schedule from "views/Schedule/Schedule.js";
// import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Team Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/standings",
    name: "Standings",
    icon: LibraryBooks,
    component: Standings,
    layout: "/admin",
  },
  {
    path: "/Schedule",
    name: "Schedule",
    icon: "content_paste",
    component: Schedule,
    layout: "/admin",
  },
  {
    path: "/leagueplayers",
    name: "League Players",
    icon: Person,
    component: LeaguePlayers,
    layout: "/admin",
  },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin",
  // },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
];

export default dashboardRoutes;
