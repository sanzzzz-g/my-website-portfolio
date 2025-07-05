document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        status.textContent = "✅ Thank you! Your message has been sent.";
        form.reset();
      } else {
        status.textContent = "❌ Oops! Something went wrong.";
      }
    });
  }
});

