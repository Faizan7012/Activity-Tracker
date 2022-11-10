import React from "react";
import { Boxfaq } from "./Faq_components/Boxfaq";
import Data from "./Faq_components/Datafaq";
import styles from "./Faq.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
export const Faq = () => {
  return (
    <> 
    {/* <Navbar /> */}
      {/* <ChakraProvider>
       
        <Navbar />
      </ChakraProvider> */}

      <div className={styles.boxupper}>
        <h1>Frequently Asked Questions</h1>
        <h3>Here you can find all the questions you need answered</h3>
        <input
          className={styles.boxinput}
          placeholder="What you are looking for ?"
        />
        <button className={styles.boxbutton}>SUBMIT</button>
      </div>

      <Boxfaq Data={Data} />

      <div className={styles.box}>
        <h1 className={styles.boxh1}>
          Join 400,000+ users already managing their <br></br> time with the
          DeskTime app
        </h1>
        <input className={styles.boxinput} placeholder="Your work email" />
        <button className={styles.boxbutton}>GET STARTED</button>
        <br></br>
        <p>Try free for 14 days. No credit card required.</p>

        <p>By signing up, you agree to our terms and privacy policy.</p>
      </div>

      {/* <ChakraProvider>
        
        <Footer />
      </ChakraProvider> */}
       {/* <Footer /> */}
    </>
  );
};
