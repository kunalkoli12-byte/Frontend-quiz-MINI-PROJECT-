
function checkScore() {
  let score = 0;

  // Correct answers
  const answers = {
    q1: "true",
    q2: "true",
    q3: "false",
    q4: "false",
    q5: "true",
    q16: "true",
    q17: "false",
    q28: "true",
    sq1: "yes",
    sq2: "no"
  };

  for (let q in answers) {

    // Try radio button
    let radio = document.querySelector(`input[name="${q}"]:checked`);
    
    // Try select tag
    let select = document.querySelector(`select[name="${q}"]`);

    let selectedValue = null;

    if (radio) {
      selectedValue = radio.value;
    } else if (select) {
      selectedValue = select.value;
    }

    if (selectedValue === answers[q]) {
      score++;
    }
  }

  document.getElementById("result").textContent =
    "Your Score: " + score + "/" + Object.keys(answers).length;
} 

document.getElementById("result").style.display = "block";






