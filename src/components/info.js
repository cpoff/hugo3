import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaYoutube as Youtube,
  FaInstagram as Insta,
  FaEnvelope as Mail,
  FaTelegram as Telegram,
  FaKeybase as Keybase,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style = {{color : "white"}}>Hello, I'm</span> <br />
        Curt Poff.
      </div>
      <div className="h1 code mt-4 mb-3">async {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
      I’ve worked as a web developer/producer/PM for the past 20 years at The Arizona Republic, Macworld, Walmart.com, and Nike. I’m married to the lovely <a href="https://gofitgirl.com" target="_blank">Go Fit Girl!</a> Not long ago we relocated to Tucson after many years in the Bay Area and Portland. It's nice and sunny here, so I'm happy. Also fair to say I'm a huge sports fan.
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://twitter.com/cpoff">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://instagram.com/cpoff">
          <Insta />
        </a>
        <a className="mr-5 icon" href="https://github.com/cpoff">
          <Github />
        </a>
        <a className="mr-5 icon" href="https://keybase.io/cpoff">
          <Keybase />
        </a>
        <a className="mr-5 icon" href="https://t.me/cpoff">
          <Telegram />
        </a>
        <a className="mr-5 icon" href="mailto://cpoff@protonmail.com">
          <Mail />
        </a>
        </div>
    </div>
  )
}
