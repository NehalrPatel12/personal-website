import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "./assets/css/style.css";
//import Components from "./Components/components";
import Header from "./Components/headerComponent/header";
import Homecmpnent from "./Components/homePage";
import Resumecmpnent from "./Components/resumePage";
//import HomeheroOne from "../src/assets/img/hero-image-1.jpg";
//import HomeheroTwo from "../src/assets/img/hero-image-2.jpg";

library.add(fas, far, fab);

const data = {
  content: {
    home: [
      // {
      //   _uid: "carousel",
      //   component: "carousel",
      //   slideoneimage: HomeheroOne,
      //   slideonetitle: "What is Lorem Ipsum?",
      //   slideonedesc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      //   slideonelink: "https://www.lipsum.com/",
      //   slidetwoimage: HomeheroTwo,
      //   slidetwotitle: "Why do we use it?",
      //   slidetwodesc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      //   slidetwolink: "https://www.google.com/"
      // },
      {
        _uid: "hmhero",
        component: "hmHero",
        headline: "Nehal Patel",
        designation: "Front End Web Developer."
      },
      {
        _uid: "Aboutme",
        component: "twoColumn",
        headline: "About Me",
        // first block heading means "frt" = First in short //
        frtblockdesc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        aboutmeName: "Nehal Patel",
        aboutmeDob: "Dec 07, 1991",
        aboutmeAdd: "45 Ascot Avenue Brampton ON Canada",
        aboutmePcode: "L6T 2P3",
        aboutmeEmail: "nihalpatel12@gmail.com",
        aboutmePhn: "(647) 901-3729",
      },
      {
        _uid: "services",
        component: "servicesCmp",
        headline: "Services",
        // first block heading means "frt" = First in short //
        frtblocktitle: "Lorem Ipsum",
        frtblockdesc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        // second block heading means "scd" = Second in short //
        scdblocktitle: "Lorem Ipsum",
        scdblockdesc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        // third block heading means "trd" = third in short //
        trdblocktitle: "Lorem Ipsum",
        trdblockdesc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        fourblocktitle: "Lorem Ipsum",
        fourblockdesc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        fiveblocktitle: "Lorem Ipsum",
        fiveblockdesc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        sixblocktitle: "Lorem Ipsum",
        sixblockdesc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      }
      
    ],
    resume: [
      // {
      //   _uid: "carousel",
      //   component: "carousel"
      // },
      {
        _uid: "hmfirst",
        component: "threeColumn",
        headline: "Where does it come from?",
        // first block heading means "frt" = First in short //
        frtblocktitle: "Declarative",
        frtblockdesc: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
        // second block heading means "scd" = Second in short //
        scdblocktitle: "Component-Based",
        scdblockdesc: "Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
        // third block heading means "trd" = third in short //
        trdblocktitle: "Write Anywhere",
        trdblockdesc: "We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code."
      }
    ]
  }
};

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="react-app">
        <Header />
        <Route exact path="/">{data.content.home.map(block => Homecmpnent(block))}</Route>
        <Route exact path="/home">{data.content.home.map(block => Homecmpnent(block))}</Route>
        <Route exact path="/resume" data-target="Resume">{data.content.resume.map(block => Resumecmpnent(block))} </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
