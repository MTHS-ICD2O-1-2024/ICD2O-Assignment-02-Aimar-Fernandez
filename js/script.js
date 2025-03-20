// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: Feb 2025
// This file contains the JS functions for index.html

function myButtonClicked() {
  const length = document.getElementById("length").value
  const width = document.getElementById("width").value
  const height = document.getElementById("height").value
  document.getElementById("answer").innerHTML = 
    "The volume is: " + (length*width*height) + " cm³"
}
