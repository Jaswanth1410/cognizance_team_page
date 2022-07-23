import React from 'react'
import img1 from '../Images/myPic.jpg'
import FlipCard from './FlipCard'
import './Team.css'
const Team = () => {
  let content = [
    {
      id: 1,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 2,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 3,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 4,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 5,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 6,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 7,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 8,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 9,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 10,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 11,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 12,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 13,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 14,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 15,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 16,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 17,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 18,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 19,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 20,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 21,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 22,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 23,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 24,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 25,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 26,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 27,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 28,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 29,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 30,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 31,
      src: img1,
      name: "abc",
      descp: "",
    },
    {
      id: 32,
      src: img1,
      name: "abc",
      descp: "",
    },
  ];

  return (
    <div className="team">
      {content.map((con) => (
            <FlipCard key={con.id} src={con.src} name = {con.name} />
          ))}
    </div>
  )
}

export default Team