import React from 'react'
import centre from "@/public/valuesCenter.png";
import styles from "./values.module.css";
import Image from "next/image";
import Customer from "@/public/customer.png";
import Transparency from "@/public/transparency.png"
import Innovation from "@/public/innovation.png"
import Simplicity from "@/public/simplicity.png"
import Security from "@/public/security.png"
import Inclusivity from "@/public/inclusivity.png"

const Values
 = () => {
  return (
    <div>

      <div className={styles.intro}>
        <h1>Our Values</h1>
        <h4>At Everything Talent, our core values drive everything we do</h4>
      </div>


<div className={styles.valuesList}>


    <div className={styles.value1}>
    <Image src={Customer} alt="hero page banner" width={64} height={64} className={styles.valueLogos} />
    <h4>Customer Success</h4>
    <p>Your success is our success. We are devoted to providing exceptional support and resources to help you achieve your hiring goals.</p>
    </div>


    <div className={styles.value2}>

      <div className={styles.value21}> 
        <div className={styles.a}>
            <Image src={Innovation} alt="hero page banner" width={64} height={64} className={styles.valueLogos} />
            <h4>Innovation</h4>
            <p>We are committed to continuously improving our technology to meet the evolving needs of our users and stay ahead of industry trends.</p>
        </div>
        <div className={styles.b}>
            <Image src={Simplicity} alt="hero page banner" width={64} height={64} className={styles.valueLogos} />
            <h4>Simplicity</h4>
            <p>We believe that great technology should be intuitive and easy to use. Our solutions are designed to streamline your hiring process without unnecessary complexity.</p>
        </div>
      </div>

      <div className={styles.value22}>
        <div>
            <Image src={centre}  alt="hero page banner" width={440} height={490} className={styles.centreImageStyle} />
        </div>
      </div>

      <div className={styles.value23}>
        <div className={styles.a}>
            <Image src={Transparency} alt="hero page banner" width={64} height={64} className={styles.valueLogos} />
            <h4>Transparency</h4>
            <p>We value open and honest communication, both within our team and with our users. We’re dedicated to building trust through clarity and integrity.</p>
        </div>
        <div className={styles.b}>
            <Image src={Inclusivity} alt="hero page banner" width={64} height={64} className={styles.valueLogos} />
            <h4>Inclusivity</h4>
            <p>We are committed to fostering a diverse and inclusive hiring environment. By eliminating biases and ensuring fairness, we empower every candidate to present their unique strengths and capabilities.</p>
        </div>
     </div>
    </div>


    <div className={styles.value3}> 
        <Image src={Security} alt="hero page banner" width={64} height={64} className={styles.valueLogos} />
        <h4>Security</h4>
        <p>We prioritize the protection of your data with robust security measures. Our systems are designed to safeguard your information and ensure privacy, giving you peace of mind.</p>
    </div>

    </div>
    </div>
  )
}

export default Values;
