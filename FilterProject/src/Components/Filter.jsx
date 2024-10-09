import React, { useState } from "react";

export default function Filter() {
  const [car, setcar] = useState("");
  const [catagory, setCatagory] = useState("");
  const arr = [
    {
      car: "Audi A4",
      price: "₹55,50,000",
      catagory: "Audi",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_Grmc80nVyVb55CvwWz0R3x6nUA8yEMBAA&s"
    },
    {
      car: "Audi-Benz",
      url: "https://www.freeiconspng.com/thumbs/audi-png/2016-audi-rs-7-png-13.png",
      price: "₹ 74,40,000",
      catagory: "Audi"
    },
    {
      car: "Audi Wagon",
      url: "https://cdn.dribbble.com/users/10423512/screenshots/17485944/media/9b290913929f7f4224ac3b887ce69575.png",
      price: "₹ 21,74,000",
      catagory: "Audi"
    },
    {
      car: "Rang Rover Factam",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-XOLulpiGWCbewbsIGGB-P-iGQPRj2B0K6Q&s",
      price: "₹60, 15,000",
      catagory: "Rang Rover"
    },
    {
      car: "Rang Rover LR",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWeU5mHk4az7KSPhT5XG9nzAGdzPwgnwhkaQ&s",
      price: "₹ 19,90,000",
      catagory: "Rang Rover"
    },
    {
      car: "Defender",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qkXp6PIdN3hL4-6C2m6pNuSnJc1TS5vl6LOoe-pYfEZ4dR7iCkC8WWndXIGox6Sfdao&usqp=CAU",
      price: "₹ 54,75,000",
      catagory: "Rang Rover"
    },
    {
      car: "Ferarri F1",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgMac8PSPYGmcWY7bpvZTiL2jLWyOvX7TXJQ&s",
      price: "₹ 90,92,000",
      catagory: "Ferarri"
    },
    {
      car: "Ferarri McLarn",
      url: "  https://i.pinimg.com/564x/2f/e2/b2/2fe2b2a64a98c4ad574c0564f84d01d7.jpg",
      price: "₹ 85,87,000",
      catagory: "Ferarri"

    },
    {
      car: "Ferarri Oslo",
      url: "https://i.pinimg.com/736x/16/0f/81/160f81b25be36781d3c02396c263fe95.jpg",
      price: "₹96,88,000",
      catagory: "Ferarri"
    },
  ];
  const data = arr.filter((e) =>
    e.car.toLowerCase().includes(car.toLowerCase()) &&
    (catagory ? e.catagory.toLowerCase() === catagory.toLowerCase() : true)
  );
  return (
    <div>
      <center>
        <br /><br /><br />
        <h1>Searching & Filtering Project</h1>
        <br />
        <input type="text" placeholder="Enter car Name" onChange={(e) => setcar(e.target.value)} />
        <select className="s2" onChange={(e) => setCatagory(e.target.value)}  >
          <option value="">All Category</option>
          <option value="Audi">Audi</option>
          <option value="Rang Rover">Rang Rover</option>
          <option value="Ferarri">Ferarri</option>
        </select> <br /> <br />
        {data &&
          data.map((e, i) => {
            return (
              <div key={i}> <hr />  
                <img style={{ height: "290px", width: "100%", objectFit: "contain", borderRadius: "10px" }} src={e.url} alt="" />
                <p >{e.car}</p>
                <p >{e.price}</p>
                <p id="p1">{e.catagory}</p> <hr />
              </div>
            );
          })}
      </center>
    </div>

  );
}