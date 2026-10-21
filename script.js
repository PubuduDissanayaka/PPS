(() => {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      navigation.classList.toggle("is-open", !isOpen);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
        navigation.classList.remove("is-open");
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
        navigation.classList.remove("is-open");
        menuButton.focus();
      }
    });
  }

  const dateInput = document.querySelector('input[name="date"]');
  if (dateInput) {
    const today = new Date();
    const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 10);
    dateInput.min = localDate;
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  const bookingForm = document.querySelector("#booking-form");
  const feedback = document.querySelector("#form-feedback");

  if (bookingForm && feedback) {
    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!bookingForm.reportValidity()) return;

      const data = new FormData(bookingForm);
      const values = {
        pickup: data.get("pickup"),
        destination: data.get("destination"),
        date: data.get("date"),
        time: data.get("time") || "Not specified",
        passengers: data.get("passengers"),
        transfer: data.get("transfer")
      };

      const subject = encodeURIComponent("Transfer enquiry | Paris Premium Shuttle");
      const body = encodeURIComponent([
        "Hello Paris Premium Shuttle,",
        "",
        "I would like to enquire about a transfer. Please confirm availability and arrangements.",
        "",
        "Pickup: " + values.pickup,
        "Destination: " + values.destination,
        "Travel date: " + values.date,
        "Pickup time: " + values.time,
        "Passengers: " + values.passengers,
        "Transfer type: " + values.transfer,
        "",
        "Please contact me to discuss the details.",
        "",
        "This is an enquiry, not a confirmed reservation."
      ].join("\n"));

      feedback.textContent = "Your email app will open with the journey details. Please send the email to complete your enquiry.";
      /*
       * Replace this value with the business's verified booking email before launch.
       * No booking email was verified during implementation, so this deliberately
       * opens a prefilled email without inventing a recipient address.
       */
      window.location.href = "mailto:?subject=" + subject + "&body=" + body;
    });
  }
})();
