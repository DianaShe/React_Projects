"use strict";

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    this._radius = value;
  }
  get diametr() {
    return this._radius * 2;
  }
  countArea() {
    return Math.PI * this.radius ** 2;
  }
  countLength() {
    return 2 * Math.PI * this.radius;
  }
}

const userCircle = new Circle(7.5);

console.log(userCircle.radius);
console.log(userCircle.diametr);
console.log(userCircle.countArea());
console.log(userCircle.countLength());
userCircle.radius = 5;
console.log(userCircle.radius);

// ----------------------------------------

class Marker {
  constructor(color, fill) {
    this.color = color;
    this.fill = fill;
  }
  get fill() {
    return this._fill;
  }
  set fill(value) {
    if (this.fill === 0) {
      alert("The marker is empty. Refill it");
      return;
    }
    this._fill = value;
  }

  refill() {
    this._fill = 100;
  }

  render() {
    let input = document.querySelector("#input");
    input.style.color = this.color;
    document.querySelector(
      ".progress-container"
    ).innerHTML = `<div class='progress-bar' id='progressBar' style="background-color:${this.color}"></div>`;
  }
}

document.querySelector("#color").addEventListener("change", createMarker);

function createMarker(e) {
  const input = document.querySelector("#input");
  input.value = "";

  const selectedColor = e.currentTarget.value;
  let userMarker = new Marker(selectedColor, 100);
  userMarker.render();

  input.addEventListener("keydown", handleKeydown);

  function handleKeydown(e) {
    if (e.key.length === 1 && e.code !== 'Space') {
      userMarker.fill -= 0.5;
      changeFill(userMarker.fill);
    }
  }

  document.querySelector("#refill").addEventListener("click", refillMarker);

  function refillMarker() {
    userMarker.refill();
    changeFill(userMarker.fill);
  }

  function changeFill(value) {
    const bar = document.querySelector("#progressBar");
    bar.style.width = value + "%";
  }
}
