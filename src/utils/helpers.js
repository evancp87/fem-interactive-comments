/* eslint-disable no-unused-vars */
export function formatDate(timestamp) {
  const day = new Date(timestamp);
  const time = day.toLocaleTimeString("en-GB");
  return (
    time.substring(0, 5) + time.slice(-2) + " | " + day.toLocaleDateString()
  );
}
