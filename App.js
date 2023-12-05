/**personal */
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
import Component from "./Component";
import Skills from "./Skills";
import About from "./About";
import Careers from "./Careers";
import Services from "./Services";
import Projects from "./Projects";
import History from "./History";
import { test } from "./test";
import Contact from "./Contact";
import { blogs } from "./blog";
/** radix */
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Settling from "./Settling";

export default function App() {
  return (
    <>
      <Navbar />
      <Content blog={blogs} />
      <Contact />
      <Component />
      <Skills />
      <Settling />
      <Footer />
    </>
  );
}
