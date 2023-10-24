// export function formatted(date) {
//   return new Date(date).toString().slice(0, 15);
// }

export function formatted(originalDate) {
  const date = new Date(originalDate);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const year = date.getUTCFullYear();
  const month = months[date.getUTCMonth()];
  const day = date.getUTCDate();
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  // Convert hours to 12-hour format
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }

  const formattedDate = `${month} ${day}, ${year} - ${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${ampm}`;

  return formattedDate;
}

// Format date to YYYY/MM/DD
export function formatDateToDigits(newdate) {
  const date = new Date(newdate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${day}/${month}/${year}`;
}
