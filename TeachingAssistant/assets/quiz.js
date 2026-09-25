// Shared quiz widget. Markup:
// <div class="quiz" data-answer="b"><p class="q">…</p>
//   <div class="opts"><button data-k="a" data-why="…">…</button>…</div></div>
// Each button's data-why explains that option. An optional <span class="score">
// on the page shows the first-attempt tally.
(function () {
  const quizzes = Array.from(document.querySelectorAll(".quiz"));
  const scoreEl = document.querySelector(".score");
  let answered = 0, firstTry = 0;

  function renderScore() {
    if (scoreEl) scoreEl.textContent = `First-try score: ${firstTry} / ${answered} answered of ${quizzes.length}`;
  }

  quizzes.forEach((quiz) => {
    const answer = quiz.dataset.answer;
    const fb = document.createElement("p");
    fb.className = "fb";
    fb.setAttribute("aria-live", "polite");
    quiz.appendChild(fb);
    let attempts = 0;

    quiz.querySelectorAll("button[data-k]").forEach((btn) => {
      btn.addEventListener("click", () => {
        attempts += 1;
        const correct = btn.dataset.k === answer;
        if (attempts === 1) { answered += 1; if (correct) firstTry += 1; renderScore(); }
        btn.classList.add(correct ? "right" : "wrong");
        btn.disabled = true;
        fb.className = "fb " + (correct ? "ok" : "no");
        fb.textContent = (correct ? "✓ " : "✗ ") + (btn.dataset.why || "");
        if (correct) quiz.querySelectorAll("button[data-k]").forEach((b) => (b.disabled = true));
      });
    });
  });
  renderScore();
})();
