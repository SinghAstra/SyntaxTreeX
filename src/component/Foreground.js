import React, { useState } from "react";
import "../styles/Foreground.css";
import Card from "./Card";

const Foreground = () => {
  const [data, setData] = useState([
    {
      desc: "lorem ipsum dolor sit amet consectetur",
      fileSize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "sed do eiusmod tempor incididunt ut labore",
      fileSize: "1.2mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Expired", tagColor: "red" },
    },
    {
      desc: "ut enim ad minim veniam quis nostrud",
      fileSize: "2.4mb",
      close: true,
      tag: { isOpen: true, tagTitle: "New", tagColor: "blue" },
    },
    {
      desc: "exercitation ullamco laboris nisi ut aliquip",
      fileSize: "3.1mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "duis aute irure dolor in reprehenderit",
      fileSize: "0.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Outdated", tagColor: "grey" },
    },
    {
      desc: "in voluptate velit esse cillum dolore",
      fileSize: "4.0mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Available", tagColor: "green" },
    },
    {
      desc: "eu fugiat nulla pariatur excepteur sint",
      fileSize: "1.5mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Unavailable", tagColor: "blue" },
    },
    {
      desc: "occaecat cupidatat non proident sunt in culpa",
      fileSize: "0.8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Free", tagColor: "blue" },
    },
    {
      desc: "duis aute irure dolor in reprehenderit",
      fileSize: "0.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Outdated", tagColor: "red" },
    },
    {
      desc: "in voluptate velit esse cillum dolore",
      fileSize: "4.0mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Available", tagColor: "green" },
    },
    {
      desc: "eu fugiat nulla pariatur excepteur sint",
      fileSize: "1.5mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Unavailable", tagColor: "blue" },
    },
    {
      desc: "occaecat cupidatat non proident sunt in culpa",
      fileSize: "0.8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Free", tagColor: "skyblue" },
    },
    {
      desc: "duis aute irure dolor in reprehenderit",
      fileSize: "0.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Outdated", tagColor: "grey" },
    },
    {
      desc: "in voluptate velit esse cillum dolore",
      fileSize: "4.0mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Available", tagColor: "red" },
    },
    {
      desc: "eu fugiat nulla pariatur excepteur sint",
      fileSize: "1.5mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Unavailable", tagColor: "green" },
    },
    {
      desc: "occaecat cupidatat non proident sunt in culpa",
      fileSize: "0.8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Free", tagColor: "green" },
    },
    {
      desc: "lorem ipsum dolor sit amet consectetur",
      fileSize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "sed do eiusmod tempor incididunt ut labore",
      fileSize: "1.2mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Expired", tagColor: "red" },
    },
    {
      desc: "ut enim ad minim veniam quis nostrud",
      fileSize: "2.4mb",
      close: true,
      tag: { isOpen: true, tagTitle: "New", tagColor: "blue" },
    },
    {
      desc: "exercitation ullamco laboris nisi ut aliquip",
      fileSize: "3.1mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "duis aute irure dolor in reprehenderit",
      fileSize: "0.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Outdated", tagColor: "grey" },
    },
    {
      desc: "in voluptate velit esse cillum dolore",
      fileSize: "4.0mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Available", tagColor: "green" },
    },
    {
      desc: "eu fugiat nulla pariatur excepteur sint",
      fileSize: "1.5mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Unavailable", tagColor: "blue" },
    },
    {
      desc: "occaecat cupidatat non proident sunt in culpa",
      fileSize: "0.8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Free", tagColor: "blue" },
    },
    {
      desc: "duis aute irure dolor in reprehenderit",
      fileSize: "0.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Outdated", tagColor: "red" },
    },
    {
      desc: "in voluptate velit esse cillum dolore",
      fileSize: "4.0mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Available", tagColor: "green" },
    },
    {
      desc: "eu fugiat nulla pariatur excepteur sint",
      fileSize: "1.5mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Unavailable", tagColor: "blue" },
    },
    {
      desc: "occaecat cupidatat non proident sunt in culpa",
      fileSize: "0.8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Free", tagColor: "skyblue" },
    },
    {
      desc: "duis aute irure dolor in reprehenderit",
      fileSize: "0.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Outdated", tagColor: "grey" },
    },
    {
      desc: "in voluptate velit esse cillum dolore",
      fileSize: "4.0mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Available", tagColor: "red" },
    },
    {
      desc: "eu fugiat nulla pariatur excepteur sint",
      fileSize: "1.5mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Unavailable", tagColor: "green" },
    },
    {
      desc: "occaecat cupidatat non proident sunt in culpa",
      fileSize: "0.8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Free", tagColor: "green" },
    },
    {
      desc: "lorem ipsum dolor sit amet consectetur",
      fileSize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "sed do eiusmod tempor incididunt ut labore",
      fileSize: "1.2mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Expired", tagColor: "red" },
    },
    {
      desc: "ut enim ad minim veniam quis nostrud",
      fileSize: "2.4mb",
      close: true,
      tag: { isOpen: true, tagTitle: "New", tagColor: "blue" },
    },
    {
      desc: "exercitation ullamco laboris nisi ut aliquip",
      fileSize: "3.1mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "duis aute irure dolor in reprehenderit",
      fileSize: "0.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Outdated", tagColor: "grey" },
    },
    {
      desc: "in voluptate velit esse cillum dolore",
      fileSize: "4.0mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Available", tagColor: "green" },
    },
    {
      desc: "eu fugiat nulla pariatur excepteur sint",
      fileSize: "1.5mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Unavailable", tagColor: "blue" },
    },
    {
      desc: "occaecat cupidatat non proident sunt in culpa",
      fileSize: "0.8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Free", tagColor: "blue" },
    },
    {
      desc: "duis aute irure dolor in reprehenderit",
      fileSize: "0.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Outdated", tagColor: "red" },
    },
    {
      desc: "in voluptate velit esse cillum dolore",
      fileSize: "4.0mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Available", tagColor: "green" },
    },
    {
      desc: "eu fugiat nulla pariatur excepteur sint",
      fileSize: "1.5mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Unavailable", tagColor: "blue" },
    },
    {
      desc: "occaecat cupidatat non proident sunt in culpa",
      fileSize: "0.8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Free", tagColor: "skyblue" },
    },
    {
      desc: "duis aute irure dolor in reprehenderit",
      fileSize: "0.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Outdated", tagColor: "grey" },
    },
    {
      desc: "in voluptate velit esse cillum dolore",
      fileSize: "4.0mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Available", tagColor: "red" },
    },
    {
      desc: "eu fugiat nulla pariatur excepteur sint",
      fileSize: "1.5mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Unavailable", tagColor: "green" },
    },
    {
      desc: "occaecat cupidatat non proident sunt in culpa",
      fileSize: "0.8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Free", tagColor: "green" },
    },
    {
      desc: "lorem ipsum dolor sit amet consectetur",
      fileSize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "sed do eiusmod tempor incididunt ut labore",
      fileSize: "1.2mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Expired", tagColor: "red" },
    },
    {
      desc: "ut enim ad minim veniam quis nostrud",
      fileSize: "2.4mb",
      close: true,
      tag: { isOpen: true, tagTitle: "New", tagColor: "blue" },
    },
    {
      desc: "exercitation ullamco laboris nisi ut aliquip",
      fileSize: "3.1mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "duis aute irure dolor in reprehenderit",
      fileSize: "0.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Outdated", tagColor: "grey" },
    },
    {
      desc: "in voluptate velit esse cillum dolore",
      fileSize: "4.0mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Available", tagColor: "green" },
    },
    {
      desc: "eu fugiat nulla pariatur excepteur sint",
      fileSize: "1.5mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Unavailable", tagColor: "blue" },
    },
    {
      desc: "occaecat cupidatat non proident sunt in culpa",
      fileSize: "0.8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Free", tagColor: "blue" },
    },
    {
      desc: "duis aute irure dolor in reprehenderit",
      fileSize: "0.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Outdated", tagColor: "red" },
    },
    {
      desc: "in voluptate velit esse cillum dolore",
      fileSize: "4.0mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Available", tagColor: "green" },
    },
    {
      desc: "eu fugiat nulla pariatur excepteur sint",
      fileSize: "1.5mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Unavailable", tagColor: "blue" },
    },
    {
      desc: "occaecat cupidatat non proident sunt in culpa",
      fileSize: "0.8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Free", tagColor: "skyblue" },
    },
    {
      desc: "duis aute irure dolor in reprehenderit",
      fileSize: "0.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Outdated", tagColor: "grey" },
    },
    {
      desc: "in voluptate velit esse cillum dolore",
      fileSize: "4.0mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Available", tagColor: "red" },
    },
    {
      desc: "eu fugiat nulla pariatur excepteur sint",
      fileSize: "1.5mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Unavailable", tagColor: "green" },
    },
    {
      desc: "occaecat cupidatat non proident sunt in culpa",
      fileSize: "0.8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Free", tagColor: "green" },
    },
  ]);

  return (
    <div className="foreground-container">
      {data.map((data, index) => (
        <Card data={data} key={index} />
      ))}
    </div>
  );
};

export default Foreground;
