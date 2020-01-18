let score = 0;

scrolling = (y) => {
  window.scrollTo(0, y);
};
scrolling4 = () => {
  window.scrollTo(0, 2922);
};

function reply_click(clicked_id) {
  if (clicked_id === "q1a1") {
    score++;
  } else if (clicked_id === "q1a2") {
    score += 2;
  } else if (clicked_id === "q1a3") {
    score += 3;
  } else if (clicked_id === "q1a4") {
    score += 4;
  }
}

function reply_click2(clicked_id) {
  if (clicked_id === "q2a1") {
    score += 4;
  } else if (clicked_id === "q2a2") {
    score += 3;
  } else if (clicked_id === "q2a3") {
    score += 2;
  } else if (clicked_id === "q2a4") {
    score++;
  }
}

function reply_click3(clicked_id) {
  if (clicked_id === "q3a1") {
    score++;
  } else if (clicked_id === "q3a2") {
    score += 2;
  } else if (clicked_id === "q3a3") {
    score += 3;
  } else if (clicked_id === "q3a4") {
    score += 4;
  }
}

function reply_click4(clicked_id) {
  if (clicked_id === "q4a1") {
    score++;
  } else if (clicked_id === "q4a2") {
    score += 2;
  } else if (clicked_id === "q4a3") {
    score += 3;
  } else if (clicked_id === "q4a4") {
    score += 4;
  }
}

function reply_click5(clicked_id) {
  if (clicked_id === "q5a1") {
    score++;
    message();
    scrolling4();
  } else if (clicked_id === "q5a2") {
    score += 2;
    message();
    scrolling4();
  } else if (clicked_id === "q5a3") {
    score += 3;
    message();
    scrolling4();
  } else if (clicked_id === "q5a4") {
    score += 4;
    message();
    scrolling4();
  }
}

let message = () => {
  if (score < 8) {
    document.getElementById("message1").style.display = "";
    document.getElementById("img1").style.display = "";
  } else if (score < 11) {
    document.getElementById("message2").style.display = "";
    document.getElementById("img2").style.display = "";
  } else if (score < 16) {
    document.getElementById("message3").style.display = "";
    document.getElementById("img3").style.display = "";
  } else if (score < 21) {
    document.getElementById("message4").style.display = "";
    document.getElementById("img4").style.display = "";
  }
};
