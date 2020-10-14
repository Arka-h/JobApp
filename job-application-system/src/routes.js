/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import Index from "views/Index";
import Profile from "views/examples/Profile";
import Register from "views/examples/Register";
import Login from "views/examples/Login";
import Jobs from "views/examples/Jobs";
import Applied from 'views/examples/Applied'
import Recruit from 'views/examples/Recruit'

var routes = [
  // {
  //   path: "/index",
  //   name: "Dashboard",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: Index,
  //   layout: "/user"
  // },
  {
    path: "/jobs",
    name: "Jobs",
    icon: "ni ni-briefcase-24 text-red",
    access:"all",
    component: Jobs,
    layout: "/user"
  },
  {
    path: "/applied",
    name: "Applied",
    icon: "ni ni-book-bookmark text-green",
    access:"Candidate",
    component: Applied,
    layout: "/user"
  },
  {
    path: "/recruit",
    name: "Recruit",
    icon: "ni ni-bulb-61 text-yellow",
    access:"Employer",
    component: Recruit,
    layout: "/user"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-info",
    access:"all",
    component: Profile,
    layout: "/user"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }
];
export default routes;
