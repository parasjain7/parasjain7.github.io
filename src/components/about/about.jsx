import React from 'react'
import "./about.css"
import Card from "../../img/about-img.png";

export const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Card} alt="Myimage" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Hello there. I am Paras Jain, Student of ITM University, Gwalior,pursuing the course of BCA[Hons.].<br/>
          I am a Web developer and
          Well-organised person, problem solver with high attention to detail,
          who is fond of programming and quite good at java, python, C, C++,
          JavaScript. I've worked on multiple projects and have technical skills
          and knowledge. I enjoy creating things that live on the internet. I'm a pragmatic guy who's obsessed with
          HTML, CSS and React JS.
        </p>
      </div>
    </div>
  );
}
