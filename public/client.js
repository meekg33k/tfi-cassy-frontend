"use strict"

import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory, NotFoundRoute } from "react-router";

import IndexLayout from "./components/IndexLayout"
import AdminLayout from "./components/AdminLayout"
import AppLayout from "./components/AppLayout"
import Search from "./components/Search"
import NavBar from "./components/NavBarIndex"

import IndexPage from "./pages/Index"
import AdminPage from "./pages/Admin"
import HomePage from "./pages/Home"
import AddEventPage from "./pages/AddEvent"
import AddStudentPage from "./pages/AddStudent"
import StudentProfilePage from "./pages/StudentProfile"
import AddSchoolPage from "./pages/AddSchool"
import SchoolDetailsPage from "./pages/SchoolDetails"
import AddStaffPage from "./pages/AddStaff"
import AddStudentAdmin from "./pages/AddStudentAdmin"


//const app = document.getElementById("app");
const root = document.getElementById("root");
console.log(root);
//const searchBox = document.getElementById("searchStudent");


//Change IndexLayout... to NavBarIndex and Layout
ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={IndexLayout}>
			<IndexRoute component={IndexPage}/>
		</Route>

		<Route path="/home" component={AppLayout}>
			<IndexRoute component={HomePage}/>
			<Route path="/events/add" component={AddEventPage}/>
			<Route path="/students/add" component={AddStudentPage}/>
			<Route path="/students/view" component={StudentProfilePage}/>
			<Route path="/search" component={Search}/>
		</Route>

		<Route path="/admin" component={AdminLayout}>
			<IndexRoute component={AdminPage}/>
			<Route path="/admin/schools/add" component={AddSchoolPage}/>
			<Route path="/admin/schools/edit" component={SchoolDetailsPage}/>
			<Route path="/admin/staff/add" component={AddStaffPage}/>
			<Route path="/admin/students/add" component={AddStudentAdmin}/>
		</Route>

	</Router>),
root);
