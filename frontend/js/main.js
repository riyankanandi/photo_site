const API = "http://localhost:5000/api";

async function submitBooking(e) {
  e.preventDefault();

  const data = {
    name: bookingName.value,
    email: bookingEmail.value,
    phone: bookingPhone.value,
    booking_type: bookingType.value,
    event_date: bookingDate.value,
    message: bookingMessage.value
  };

  await fetch(`${API}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  alert("Booking submitted");
}
