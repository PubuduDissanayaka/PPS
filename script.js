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

      feedback.textContent = "Opening WhatsApp with your journey details. Review the message and send it to complete your enquiry.";
      const whatsappMessage = [
        "Hello Paris Premium Shuttle,",
        "",
        "I would like to enquire about a transfer.",
        "",
        "Pickup: " + values.pickup,
        "Destination: " + values.destination,
        "Travel date: " + values.date,
        "Pickup time: " + values.time,
        "Passengers: " + values.passengers,
        "Transfer type: " + values.transfer,
        "",
        "Please confirm availability and arrangements. I understand this is an enquiry, not a confirmed booking."
      ].join("\n");
      window.open("https://wa.me/33633308983?text=" + encodeURIComponent(whatsappMessage), "_blank", "noopener,noreferrer");
    });
  }
})();
