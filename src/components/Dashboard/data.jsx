const Data = [
  {
    cards: [
      {
        title: "Total Revenues",
        number: "$2,129,430",
        icon: "revenue.svg",
        color: "#DDEFE0",
      },
      {
        title: "Total transactions",
        number: "1520",
        icon: "total_transactions_icon.svg",
        color: "#f4ecdd",
      },
      {
        title: "Total Likes",
        number: "9721",
        icon: "likes.svg",
        color: "#EFDADA",
      },
      {
        title: "Total Users",
        number: "892",
        icon: "users.svg",
        color: "#DEE0EF",
      },
    ],

    lineGraph: {
      labels: ["", "Week1", "Week2", "Week3", "Week4", " "],
      data1: [100, 400, 150, 450, 190, 250],
      data2: [200, 300, 200, 300, 210, 450],
    },

    pieChart: {
      labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
      data: [3, 12, 19],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  },
];

export default Data;
