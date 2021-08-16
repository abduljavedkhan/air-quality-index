export const timeCalculation = (time) => {
  let recTime = new Date(time);
  let currentTime = new Date();

  let seconds = (currentTime.getTime() - recTime.getTime()) / 1000;
  if (seconds < 60) {
    return `few sec ago`;
  }
  if (seconds >= 60 && seconds <= 119) {
    return `A min ago`;
  } else {
    return recTime.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }
};

export default timeCalculation;
