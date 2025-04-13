const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Server Is Up and Running");
});

app.get("/user", (req, res) => {
  res.status(200).json({
    userId: 100,
    firstname: "Jon",
    lastName: "Snow",
    email: "contact@example.com",
  });
});

app.get("/aquariums", (req, res) => {
  res.status(200).json({
    userId: 100,
    aquariums: [
      {
        id: 1,
        name: "Aquarium 1",
        speciesList: ["black neon tetra, zebra danio, serpae tetra"],
        totalAmount: 10,
        feedSchedule: {
          monday: true,
          tuesday: false,
          wednesday: true,
          thursday: false,
          friday: true,
          saturday: false,
          sunday: true,
        },
        cleanSchedule: "Once Every Other Week",
      },
      {
        id: 2,
        name: "Aquarium 2",
        speciesList: ["Red Eared Slider"],
        totalAmount: 1,
        feedSchedule: {
          monday: true,
          tuesday: false,
          wednesday: true,
          thursday: false,
          friday: true,
          saturday: false,
          sunday: true,
        },
        cleanSchedule: "Once Every Week",
      },
      {
        id: 3,
        name: "Aquarium 3",
        speciesList: ["Red Eared Slider"],
        totalAmount: 1,
        feedSchedule: {
          monday: true,
          tuesday: false,
          wednesday: true,
          thursday: false,
          friday: true,
          saturday: false,
          sunday: true,
        },
        cleanSchedule: "Once Every Week",
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`APAPT server application listening on port ${port}`);
});
