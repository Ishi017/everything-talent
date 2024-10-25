import React from 'react'
import styles from "./story.module.css";
import Image from "next/image";
import story1 from "@/public/story1.png";
import story2 from "@/public/story2.png";
import story3 from "@/public/story3.png"

const Story = () => {
  return (
    <div className={styles.storyPage}>
      <div className={styles.intro}>
        <h1>Our Story</h1>
        <p>We not only make the world’s most comfortable hammocks, but through training and sustainable job creation, we empower our weavers and their families to break the cycle of poverty and build a brighter future.</p>
      </div>


      <div className={styles.story1}>
       <div className={styles.storyText}>
           <h3>The Journey to Transform Recruitment</h3>
           <p>Everything Talent was founded with a vision to transform the way organizations approach hiring. Frustrated by traditional, cumbersome methods of recruiting and recognizing the potential for bias in evaluating candidates, our founder set out to create a solution that simplifies the hiring journey while leveraging the latest advancements in technology.</p>
       </div>
       <Image
                                src={story1}
                                alt="Company Logo"
                                width={720}
                                height={493}
                                className={styles.storyImage} 
                            />
      </div>


      <div className={styles.story2}>
      <Image
                                src={story2}
                                alt="Company Logo"
                                width={720}
                                height={493}
                                className={styles.storyImage}  
                            />
      <div className={styles.storyText}>
          <h3>Combining Innovation with Efficiency</h3>
          <p>Our platform combines a free Applicant Tracking System (ATS) with AI-driven tech assessments. This allows you to evaluate candidates quickly and accurately, regardless of their background or the complexity of the role. We are committed to leveraging the latest technology to streamline the recruitment process and reduce bias.</p>
      </div>
      </div>


      <div className={styles.story3}>
      <div className={styles.storyText}>
          <h3>Democratizing Recruitment Tools</h3>
          <p>We believe in democratizing access to powerful recruitment tools, making them available to both startups and established companies alike. Our goal is to level the playing field, ensuring that every organization, regardless of size, can compete for and secure the best talent available.</p>
      </div>
      <Image
                                src={story3}
                                alt="Company Logo"
                                width={720}
                                height={493}
                                className={styles.storyImage} 
                            />
      </div>
    </div>
  )
}

export default Story