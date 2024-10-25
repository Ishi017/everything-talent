import React from 'react'
import styles from "./team.module.css";
import Image from 'next/image';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import Photo1 from "@/public/photo1.png";
import Photo2 from"@/public/photo2.png";
import Photo3 from "@/public/photo3.png";
import Photo4 from "@/public/photo4.png";
import Photo5 from"@/public/photo5.png";
import Photo6 from "@/public/photo6.png";
import Photo7 from "@/public/photo7.png";
import Photo8 from "@/public/photo8.png";
import Photo9 from"@/public/photo9.png";
import Photo10 from "@/public/photo10.png";
import Photo11 from "@/public/photo11.png";
import Photo12 from"@/public/photo12.png";
import Photo13 from "@/public/photo13.png";
import Photo14 from "@/public/photo14.png";
import Photo15 from"@/public/photo15.png";
import Photo16 from "@/public/photo16.png";

const Team = () => {
  return (
    <div>
      <div className={styles.intro}>
        <h1>Our Experts Team</h1>
        <h4>
          At Everything Talent, our innovative team develops AI-driven assessments and an advanced ATS to modernize hiring. We focus on reducing bias, making recruitment efficient, and providing accessible tools for companies of all sizes to attract top talent.
        </h4>
      </div>

<div className={styles.teamCards}>
    <div className={styles.line1}>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Image 
            src={Photo1} 
            alt="hero page banner" 
            width={110} 
            height={104} 
            className={styles.valueLogos} 
          />
        </HoverCardTrigger>
        <HoverCardContent className={styles.hoverCardContent}>
          <div className="flex justify-between">
            <div>
              <h4>Vikram Sinha</h4>
              <p >Founder / CEO</p>
              <div>
                <span>Tech innovator solving real-world problems.</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      </div>


      <div className={styles.line2}>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Image 
            src={Photo2} 
            alt="hero page banner" 
            width={110} 
            height={104} 
            className={styles.valueLogos} 
          />
        </HoverCardTrigger>
        <HoverCardContent className={styles.hoverCardContent}>
          <div className="flex justify-between">
            <div>
              <h4>Radhika Iyer</h4>
              <p >Chief Stratergy Officer</p>
              <div>
                <span>Drives growth with strategic insights.</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Image 
            src={Photo3} 
            alt="hero page banner" 
            width={110} 
            height={104} 
            className={styles.valueLogos} 
          />
        </HoverCardTrigger>
        <HoverCardContent className={styles.hoverCardContent}>
          <div className="flex justify-between">
            <div>
              <h4>Ethan Mitchell</h4>
              <p >Chief Stratergy Officer</p>
              <div>
                <span>Drives growth with strategic insights.</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      </div>

              {/* Line 3 */}
        <div className={styles.line3}>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Image 
                src={Photo4} 
                alt="Alice Johnson" 
                width={110} 
                height={104} 
                className={styles.valueLogos} 
              />
            </HoverCardTrigger>
            <HoverCardContent className={styles.hoverCardContent}>
              <div className="flex justify-between">
                <div>
                  <h4>Alice Johnson</h4>
                  <p>Lead Developer</p>
                  <span>Expert in full-stack development.</span>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Image 
                src={Photo5} 
                alt="Bob Smith" 
                width={110} 
                height={104} 
                className={styles.valueLogos} 
              />
            </HoverCardTrigger>
            <HoverCardContent className={styles.hoverCardContent}>
              <div className="flex justify-between">
                <div>
                  <h4>Bob Smith</h4>
                  <p>UI/UX Designer</p>
                  <span>Creating user-friendly interfaces.</span>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Image 
                src={Photo6} 
                alt="Charlie Brown" 
                width={110} 
                height={104} 
                className={styles.valueLogos} 
              />
            </HoverCardTrigger>
            <HoverCardContent className={styles.hoverCardContent}>
              <div className="flex justify-between">
                <div>
                  <h4>Charlie Brown</h4>
                  <p>Data Scientist</p>
                  <span>Transforming data into insights.</span>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        {/* Line 4 */}
        <div className={styles.line4}>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Image 
                src={Photo7} 
                alt="Daisy Clark" 
                width={110} 
                height={104} 
                className={styles.valueLogos} 
              />
            </HoverCardTrigger>
            <HoverCardContent className={styles.hoverCardContent}>
              <div className="flex justify-between">
                <div>
                  <h4>Daisy Clark</h4>
                  <p>Product Manager</p>
                  <span>Leading product innovation.</span>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Image 
                src={Photo8} 
                alt="Eve Davis" 
                width={110} 
                height={104} 
                className={styles.valueLogos} 
              />
            </HoverCardTrigger>
            <HoverCardContent className={styles.hoverCardContent}>
              <div className="flex justify-between">
                <div>
                  <h4>Eve Davis</h4>
                  <p>Marketing Specialist</p>
                  <span>Creating impactful marketing strategies.</span>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Image 
                src={Photo9} 
                alt="Frank Miller" 
                width={110} 
                height={104} 
                className={styles.valueLogos} 
              />
            </HoverCardTrigger>
            <HoverCardContent className={styles.hoverCardContent}>
              <div className="flex justify-between">
                <div>
                  <h4>Frank Miller</h4>
                  <p>Sales Executive</p>
                  <span>Driving sales and building relationships.</span>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Image 
                src={Photo10} 
                alt="Grace Lee" 
                width={110} 
                height={104} 
                className={styles.valueLogos} 
              />
            </HoverCardTrigger>
            <HoverCardContent className={styles.hoverCardContent}>
              <div className="flex justify-between">
                <div>
                  <h4>Grace Lee</h4>
                  <p>Customer Success Manager</p>
                  <span>Ensuring client satisfaction.</span>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

  {/* Line 5 */}
  <div className={styles.line5}>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Image 
                src={Photo11} 
                alt="Alice Johnson" 
                width={110} 
                height={104} 
                className={styles.valueLogos} 
              />
            </HoverCardTrigger>
            <HoverCardContent className={styles.hoverCardContent}>
              <div className="flex justify-between">
                <div>
                  <h4>Alice Johnson</h4>
                  <p>Lead Developer</p>
                  <span>Expert in full-stack development.</span>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Image 
                src={Photo12} 
                alt="Bob Smith" 
                width={110} 
                height={104} 
                className={styles.valueLogos} 
              />
            </HoverCardTrigger>
            <HoverCardContent className={styles.hoverCardContent}>
              <div className="flex justify-between">
                <div>
                  <h4>Bob Smith</h4>
                  <p>UI/UX Designer</p>
                  <span>Creating user-friendly interfaces.</span>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Image 
                src={Photo13} 
                alt="Charlie Brown" 
                width={110} 
                height={104} 
                className={styles.valueLogos} 
              />
            </HoverCardTrigger>
            <HoverCardContent className={styles.hoverCardContent}>
              <div className="flex justify-between">
                <div>
                  <h4>Charlie Brown</h4>
                  <p>Data Scientist</p>
                  <span>Transforming data into insights.</span>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className={styles.line6}>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Image 
            src={Photo14} 
            alt="hero page banner" 
            width={110} 
            height={104} 
            className={styles.valueLogos} 
          />
        </HoverCardTrigger>
        <HoverCardContent className={styles.hoverCardContent}>
          <div className="flex justify-between">
            <div>
              <h4>Radhika Iyer</h4>
              <p >Chief Stratergy Officer</p>
              <div>
                <span>Drives growth with strategic insights.</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Image 
            src={Photo15} 
            alt="hero page banner" 
            width={110} 
            height={104} 
            className={styles.valueLogos} 
          />
        </HoverCardTrigger>
        <HoverCardContent className={styles.hoverCardContent}>
          <div className="flex justify-between">
            <div>
              <h4>Ethan Mitchell</h4>
              <p >Chief Stratergy Officer</p>
              <div>
                <span>Drives growth with strategic insights.</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      </div>


      <div className={styles.line7}>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Image 
            src={Photo16} 
            alt="hero page banner" 
            width={110} 
            height={104} 
            className={styles.valueLogos} 
          />
        </HoverCardTrigger>
        <HoverCardContent className={styles.hoverCardContent}>
          <div className="flex justify-between">
            <div>
              <h4>Vikram Sinha</h4>
              <p >Founder / CEO</p>
              <div>
                <span>Tech innovator solving real-world problems.</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      </div>

      
      </div>
    </div>
  );
};

export default Team;