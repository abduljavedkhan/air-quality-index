export const AQI_STANDARDS = [
  {
    category: "Good",
    bgColor: "bg-green-600",
  },
  {
    category: "Satisfactory",
    bgColor: "bg-green-400",
  },
  {
    category: "Moderate",
    bgColor: "bg-yellow-300",
  },
  {
    category: "Poor",
    bgColor: "bg-yellow-600",
  },
  {
    category: "Very Poor",
    bgColor: "bg-red-500",
  },
  {
    category: "Severe",
    bgColor: "bg-red-800",
  },
];

export const textColor = (aqiVal) =>
  aqiVal >= 0 && aqiVal <= 50
    ? "text-green-600"
    : aqiVal >= 51 && aqiVal <= 100
    ? "text-green-400"
    : aqiVal >= 101 && aqiVal <= 200
    ? "text-yellow-300"
    : aqiVal >= 201 && aqiVal <= 300
    ? "text-yellow-600"
    : aqiVal >= 301 && aqiVal <= 400
    ? "text-red-500"
    : "text-red-800";

    export const textColorHex = (aqiVal) =>
  aqiVal >= 0 && aqiVal <= 50
    ? "#059669"
    : aqiVal >= 51 && aqiVal <= 100
    ? "#34d399"
    : aqiVal >= 101 && aqiVal <= 200
    ? "#fcd34d"
    : aqiVal >= 201 && aqiVal <= 300
    ? "#d97706"
    : aqiVal >= 301 && aqiVal <= 400
    ? "#ef4444"
    : "#991b1b";
