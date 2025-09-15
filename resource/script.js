console.log("=== Hour 1: JSON Basics ===");

let student = {
    name: "Alice",
    age: 20,
    marks: [85, 90, 78],
};
let jsonString = JSON.stringify(student);
console.log("JSON String:", jsonString);

let parsedStudent = JSON.parse(jsonString);
console.log("Parsed Object:", parsedStudent);

console.log("=== Book Example: JSON Basics ===");

let book = {
    name: "J.K. Rowling",
    title: "Harry Potter and the Sorcerer's Stone",
    price: 19.99
};

let bookJson = JSON.stringify(book);
console.log("Book JSON String:", bookJson);

let parsedBook = JSON.parse(bookJson);
console.log("Parsed Book Object:", parsedBook);

let books = [
    { name: "Book One", title: "The Dawn", author: "Alice Smith", price: 12.99 },
    { name: "Book Two", title: "Into the Wild", author: "John Doe", price: 15.50 },
    { name: "Book Three", title: "Mystery Night", author: "Jane Roe", price: 9.99 },
    { name: "Book Four", title: "Ocean Deep", author: "Chris Lee", price: 18.25 },
    { name: "Book Five", title: "Sky High", author: "Pat Kim", price: 11.75 },
    { name: "Book Six", title: "Desert Storm", author: "Sam Green", price: 14.00 },
    { name: "Book Seven", title: "Forest Whisper", author: "Dana White", price: 13.60 },
    { name: "Book Eight", title: "City Lights", author: "Alex Brown", price: 16.80 },
    { name: "Book Nine", title: "Mountain Echo", author: "Morgan Black", price: 10.50 },
    { name: "Book Ten", title: "River Flow", author: "Taylor Blue", price: 17.20 }
];

let booksJson = JSON.stringify(books);
console.log("Books JSON String:", booksJson);

let parsedBooks = JSON.parse(booksJson);
console.log("Parsed Books Array:", parsedBooks);

fetch('https://jsonplaceholder.typicode.com/posts') 
    .then(response => response.json())
    .then(data => {
        console.log("Fetched Data:", data);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
    

fetch("https://jsonplaceholder.typicode.com/users") 
    .then(response => response.json())
    .then(users => {
        let output = "<h2>User List</h2><ul>";
        users.forEach((user) => {
            output += `<li>${user.name} - ${user.email}</li>`;
        });
        output += "</ul>";
        document.body.innerHTML += output;
    });
    
const cityCoords = {
  "bangalore": { lat: 12.97, lon: 77.59 },
  "delhi": { lat: 28.61, lon: 77.20 },
  "mumbai": { lat: 19.07, lon: 72.87 },
  "london": { lat: 51.51, lon: -0.13 },
  "new york": { lat: 40.71, lon: -74.01 }
};

// Event Listener for button
document.getElementById("fetchBtn").addEventListener("click", () => {
  let cityInput = document.getElementById("cityInput");
  let weatherDiv = document.getElementById("weather");

  let city = cityInput.value.trim().toLowerCase();

  if (!cityCoords[city]) {
    weatherDiv.innerHTML = "⚠️ City not in list!";
    return;
  }

  let coords = cityCoords[city];
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

  // Show loading message
  weatherDiv.innerHTML = "Loading weather data...";

  // Fetch weather data
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.current_weather) {
        weatherDiv.innerHTML = `
          <h3>Weather in ${city.charAt(0).toUpperCase() + city.slice(1)}</h3>
          <p>🌡 Temp: ${data.current_weather.temperature}°C</p>
          <p>💨 Wind: ${data.current_weather.windspeed} km/h</p>
          <p>⏱ Time: ${data.current_weather.time}</p>
        `;
      } else {
        weatherDiv.innerHTML = "⚠️ No data available.";
      }
    })
    .catch(error => {
      console.error(error);
      weatherDiv.innerHTML = "⚠️ Error fetching weather.";
    });
});
