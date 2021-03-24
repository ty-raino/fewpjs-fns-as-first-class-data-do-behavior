/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeStr) {
  // if time is < 12pm return "Good Morning"
  // if time is >= 12pm && 5pm return "Good Afternoon"
  // if time is > 5pm return "Good Evening"

  const hour = parseInt(timeStr, 10);

  if (hour < 12) {
    return "Good Morning";
  } else if (hour > 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  };
};

function displayMessage(msg) {
  document.getElementById('greeting').innerText = msg;
};