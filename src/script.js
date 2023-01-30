/* eslint-disable no-undef */
const { doc } = require("prettier");

import React from 'react';
import Fade from 'react-reveal/Fade';

class fadeOnScroll extends React.Component {
  render() {
    return (
      <div>
        <Fade bottom>
          <h1>React Reveal</h1>
        </Fade>
      </div>
    );
  }
}

export default fadeOnScroll;
/*
function pageNavigation(evt, navLink) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabContent");
  tablinks = document.getElementsByClassName("tabLinks");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }


  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(navLink).style.display = "block";
  evt.currentTarget.className += " active";
}

*/

function responsiveMenu() {
  var x = document.getElementById("nav");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}

let menu = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navBar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navBar.classList.toggle('open');
}