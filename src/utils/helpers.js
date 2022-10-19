function formatDate(timestamp) {
  const day = new Date(timestamp);
  const time = day.tocLocaleTimeString("en-GB");
  return time.substr(0, 5) + time.slice(-2) + " | " + day.toLocaleDateString();
}
