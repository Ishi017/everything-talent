import React from 'react'
import Image from "next/image";
import banner from "@/public/Banner.png"

const Banner = () => {
  return (
    <div>
      <Image
                                src={banner}
                                alt="hero page banner"
                                width={1500}
                                height={1500}
                                className="object-contain m-1" 
                            />
    </div>
  )
}

export default Banner;
