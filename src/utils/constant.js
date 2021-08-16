// export const AIR_QUALITY_STANDARDS = {
//     GOOD: { bottom: 0, top: 50, color: 'green' },
//     SATISFACTORY: { bottom: 51, top: 100, color: 'lightgreen' },
//     MODERATE: { bottom: 101, top: 200, color: 'yellow' },
//     POOR: { bottom: 201, top: 300, color: 'orange' },
//     VERY_POOR: { bottom: 301, top: 400, color: 'red' },
//     SEVERE: { bottom: 401, top: 500, color: 'darkred' },
//   };
  
  export const AIR_QUALITY_STANDARDS = [
    { category: "Good", bgColor: "bg-green-600", textColor:"text-green-600" },
    { category: "Satisfactory", bgColor: "bg-green-400", textColor:"text-green-400"},
    { category: "Moderate", bgColor: "bg-yellow-300", textColor:"text-yellow-300" },
    { category: "Poor", bgColor: "bg-yellow-600", textColor:"text-yellow-600" },
    { category: "Very Poor", bgColor: "bg-red-500", textColor:"text-red-500" },
    { category: "Severe", bgColor: "bg-red-800", textColor:"text-red-800" },
  ];