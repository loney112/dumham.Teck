const questions = document.querySelectorAll(".faq-question");

  questions.forEach(q => {
    q.addEventListener("click", () => {
      q.parentElement.classList.toggle("active");
    });
  });