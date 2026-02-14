document.addEventListener("DOMContentLoaded", () => {
  const modal = new bootstrap.Modal(document.getElementById("pdfModal"));
  const frame = document.getElementById("pdfFrame");

  document.querySelectorAll(".pdf-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const pdfPath = btn.getAttribute("data-pdf");
      frame.src = pdfPath;
      modal.show();
    });
  });

  // Clear PDF when modal closes
  document.getElementById("pdfModal")
    .addEventListener("hidden.bs.modal", () => {
      frame.src = "";
    });
});
