import React from "react";
import s from "./Center.module.css"


const Center =() => {
    return <div className={s.center}>
     <div className={s.text_dog}>
    <div className={s.text1}> <h1> Welcome to your <span className={s.pawfessional}> pawfessional </span> community </h1> </div>
    <div className={s.dog}> <img src="/assets/images/Dog.png" alt="" /> </div>
    </div>

    <div className={s.btn1}>
    <div className={s.ILMP}> <a href="#">I lost my pet!</a>  <img className={s.search} src="/assets/images/search.png"/> </div>
    <div className={s.ILMP2}> <a href="#">Click to find!</a>  <img className={s.search} src="/assets/images/search.png"/> </div> 
    </div> 

    <div className={s.btn2}>
    <div className={s.IFAP}> <a href="#">I found a pet</a> </div>
    <div className={s.IFAP2}> <a href="#">What to do?</a> </div>
    </div> 
    <p>I'm okay, just want to <a className={s.a_join} href="#">JOIN</a> the pawsome community! </p>

    <div className={s.blue_stripe}> 
    <div className={s.blue_text}> Our fluffy space for lovers, admirers, dads and moms of our four-legged, winged, tailed guys. </div>
    </div>

    <div className={s.trio}>
      <img className={s.trio_photo} src="/assets/images/trio.png"/>
      <ul>
        <div className={s.ul_titel} > Here is collected everything that your pet needs:</div>
        <li className={s.trio_li}>professional veterinarian tips; </li>
        <li className={s.trio_li}>useful information about education and care; </li>
        <li className={s.trio_li}>information about pet-sitting and walking service; </li>
        <li className={s.trio_li}>and of course, great communication with new friends in your social network! </li>
        <p>Make an account and <a className={s.a_join} href="#">JOIN</a> to us!</p>
      </ul>
    </div>

    <footer> 
      <img src="assets/images/logo.png"/>
      <div className={s.adress}>1600 Amphitheatre Pkwy Mountain View, CA 94043, USA</div>
    </footer>
  </div>
}

export default Center;