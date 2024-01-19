"use client";

import { useState } from "react";

const Components = () => {
  const [components, setComponents] = useState([
    {
      image: "/image-retro-pcs.jpg",
      number: "01",
      topic: "Reviving Retro PCs",
      body: "What happens when old PCs are given modern upgrades?",
      id: 1,
    },
    {
      image: "/image-top-laptops.jpg",
      number: "02",
      topic: "Top 10 Laptops of 2022",
      body: " Our best picks for various needs and budgets.",
      id: 2,
    },
    {
      image: "/image-gaming-growth.jpg",
      number: "03",
      topic: "The Growth of Gaming",
      body: "How the pandemic has sparked fresh opportunities.",
      id: 3,
    },
  ]);

  return (
    <div className="components flex md:flex-row flex-col justify-left w-full my-10 items-center justify-between">
      {components.map((component) => (
        <div
          key={component.id}
          className="flex space-x-5 items-center md:my-0 my-5"
        >
          <img
            src={component.image}
            alt=""
            className="md:w-24 w-1/3 justify-left"
          />
          <div className="w-full">
            <p className="text-GrayishBlue font-bold text-3xl">
              {component.number}
            </p>
            <h2 className="text-lg cursor-pointer my-2 font-bold hover:text-softRed">
              {component.topic}
            </h2>
            <p className="text-Darkgrayishblue">{component.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Components;
