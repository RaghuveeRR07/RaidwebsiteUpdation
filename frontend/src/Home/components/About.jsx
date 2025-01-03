import React from 'react'
import { GiTeacher } from "react-icons/gi";
import { FaCode } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";

export function About() {
  return (
    <div id="about" className="mx-auto max-w-full h-full px-4 sm:px-6 lg:px-8 bg-black mb-24 ">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto inline-flex rounded-full bg-black px-4 py-8">
          {/* <p className="text-xs font-semibold uppercase tracking-widest text-black">
            100+ Tailwind Components
          </p> */}
         </div>
        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          What we do at RAID ?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-300">
        At RAID, we innovate in AI through hands-on projects, mentorship, and collaborative learning, building a strong community of AI enthusiasts at IIT Jodhpur.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <FaLaptopCode className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-white">WARP Projects</h3>
          <p className="mt-4 text-sm text-gray-300">
          Every winter, RAID, conducts WARP (Winter Adventures with RAID Projects). These sessions offer students a chance to explore and innovate in AI through hands-on projects.</p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <FaCode className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-gray-200">Summer RAID Projects</h3>
          <p className="mt-4 text-sm text-gray-300">
          During the summer, RAID organizes Summer RAID Projects, where seniors mentor juniors, helping students grow their skills in AI through collaborative and innovative projects.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <GiTeacher className="h-11 w-11 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-white">Paper Reading Sessions</h3>
          <p className="mt-4 text-sm text-gray-300">
          RAID conducts paper reading sessions where students discuss and analyze research papers in AI, gaining insights into the latest trends and technologies in the field.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-evenly rounded-full bg-gray-100">
            <IoIosPeople className="h-12 w-12 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-white">Alumni interactions</h3>
          <p className="mt-4 text-sm text-gray-300">
          RAID organizes alumni interactions where alumni offer current students valuable guidance, networking opportunities, and inspiration from their successful ventures in the AI and tech industry.
          </p>
        </div>
      </div>
    </div>
  )
}
