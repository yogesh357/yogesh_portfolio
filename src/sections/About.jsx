// import Globe from "react-globe.gl";
// import Button from "../components/Button";
// import { useState } from "react";

// function About() {
//   const [hasCopied, setHasCopied] = useState(false);
//   const handleCopy = () => {
//     navigator.clipboard.writeText("ypdhakane101@gmail.com");
//     setHasCopied(true);
//     setTimeout(() => {
//       setHasCopied(false);
//     }, 2000);
//   };

//   return (
//     <section className="c-space my-20" id="about">
//       {/* <div className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-5 h-full"> */}
//       <div className="grid xl:grid-cols-3   md:grid-cols-2 grid-cols-1 gap-5 h-full">
//         {/* About */}
//         <div className="col-span-1 xl:row-span-3 ">
//           <div className="grid-container">
//             <img
//               src="assets/grid1.png"
//               alt="grid-1"
//               className="w-full sm:h-[276px] h-fit object-contain"
//             />

//             <div className="text-white">
//               <p className="grid-headtext">Hi, I’m Yogesh Dhakane</p>
//               <p className="grid-subtext">
//                 {/* With 2 years of experience, I have honed my skills in both
//                 frontend and backend dev, creating dynamic and responsive
//                 websites. */}
//                 a software developer skilled in TypeScript, JavaScript, Python
//                 ,Java. I specialize in building scalable web and mobile
//                 applications using frameworks like React,NEXTJS, and Node.js. I
//                 also have experience with 3D graphics using Three.js. I'm a
//                 quick learner who works closely with clients to create
//                 efficient, user-friendly solutions that address real-world
//                 challenges. Let’s collaborate to bring your ideas to life!
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* Tech stack */}
//         <div className="col-span-1 xl:row-span-3 ">
//           <div className="grid-container">
//             <img
//               src="assets/grid7.jpg"
//               alt="grid-2"
//               className="w-full sm:h-[276px] h-fit object-contain"
//             />

//             <div>
//               <p className="grid-headtext">Tech Stack</p>
//               <p className="grid-subtext">
//                 {/* I specialize in a variety of languages, frameworks, and tools
//                 that allow me to build robust and scalable applications. */}
//                 I work with a diverse range of programming languages,
//                 frameworks, and development tools that enable me to design,
//                 build, and deploy robust, scalable, and high-performance
//                 applications. My expertise spans both frontend and backend
//                 technologies, allowing me to deliver end-to-end solutions with
//                 efficiency, reliability, and modern best practices.
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* Location */}
//         <div className="col-span-1 ">
//           <div className="grid-container">
//             <div className="rounded-3xl w-full sm:h-[300px] h-fit flex justify-center items-center">
//               <Globe
//                 height={326}
//                 width={326}
//                 backgroundColor="rgba(0, 0, 0, 0)"
//                 backgroundImageOpacity={0.5}
//                 showAtmosphere
//                 showGraticules
//                 globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
//                 bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
//                 labelsData={[
//                   {
//                     lat: 40,
//                     lng: -100,
//                     text: "Pune, Maharastra",
//                     color: "white",
//                     size: 15,
//                   },
//                 ]}
//               />
//             </div>
//             <div>
//               <p className="grid-headtext">
//                 I’m very flexible with time zone communications & locations
//               </p>
//               <p className="grid-subtext">
//                 I&apos;m based in Pune , Maharastra and open to remote work
//                 worldwide.
//               </p>
//               <a href="#contact">
//                 <Button
//                   name="Contact Me"
//                   isBeam
//                   containerClass="w-full mt-10"
//                 />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Contact */}
//         <div className="">
//           <div className="grid-container">
//             <img
//               src="assets/grid4.png"
//               alt="grid-4"
//               className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
//             />

//             <div className="space-y-2">
//               <p className="grid-subtext text-center">Contact me</p>
//               <div className="copy-container" onClick={handleCopy}>
//                 <img
//                   src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
//                   alt="copy"
//                 />
//                 <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
//                   ypdhakane101@gmail.com
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;

//:

import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function About() {
  const [hasCopied, setHasCopied] = useState(false);
  const gridItemsRef = useRef([]);

  const sectionRef = useRef(null);
  const textRefs = useRef([]);
  const addToTextRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("ypdhakane101@gmail.com");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  // ✨ Clean Fade-In Text Animation
  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade + slide for grid items
      gsap.fromTo(
        gridItemsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Hover effect: lift + glow + scale image
      gridItemsRef.current.forEach((item) => {
        if (!item) return;

        const tl = gsap.timeline({ paused: true });

        tl.to(item, {
          y: -10,
          scale: 1.02,
          boxShadow: "0px 8px 25px rgba(255,255,255,0.15)",
          duration: 0.3,
          ease: "power2.out",
        }).to(
          item.querySelector("img"),
          {
            scale: 1.08,
            duration: 0.4,
            ease: "power2.out",
          },
          0
        );

        item.addEventListener("mouseenter", () => tl.play());
        item.addEventListener("mouseleave", () => tl.reverse());
      });

      // Text hover underline animation
      gsap.utils.toArray(".hover-underline").forEach((el) => {
        const textTl = gsap.timeline({ paused: true });
        textTl.to(el, {
          backgroundSize: "100% 2px",
          duration: 0.3,
          ease: "power2.out",
        });

        el.addEventListener("mouseenter", () => textTl.play());
        el.addEventListener("mouseleave", () => textTl.reverse());
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="c-space my-20" id="about" ref={sectionRef}>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* About Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container relative overflow-hidden  group hover:transform hover:scale-[1.02] transition-all duration-300">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div className="text-white">
              <p className="grid-headtext hover-underline" ref={addToTextRefs}>
                Hi, I'm Yogesh Dhakane
              </p>
              <p className="grid-subtext hover-underline" ref={addToTextRefs}>
                A software developer skilled in TypeScript, JavaScript, Python,
                and Java. I specialize in building scalable web and mobile
                applications using React, Next.js, and Node.js. I also work with
                3D graphics using Three.js. I'm a fast learner who collaborates
                closely with clients to build clean, efficient, and powerful
                digital solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container relative overflow-hidden  group hover:transform hover:scale-[1.02] transition-all duration-300">
            <img
              src="assets/grid7.jpg"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext hover-underline" ref={addToTextRefs}>
                Tech Stack
              </p>
              <p className="grid-subtext hover-underline" ref={addToTextRefs}>
                I work across a wide range of modern tools and technologies,
                enabling me to build robust, scalable, and high-performance
                applications. From frontend to backend development, I deliver
                complete end-to-end solutions with clean architecture and modern
                best practices.
              </p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="col-span-1">
          <div className="grid-container group hover:transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <div className="rounded-3xl w-full sm:h-[260px] h-fit flex justify-center items-center">
              <Globe
                height={260}
                width={260}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40,
                    lng: -100,
                    text: "Pune, Maharashtra",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>

            <div>
              <p className="grid-headtext " ref={addToTextRefs}>
                I'm flexible with global time zones
              </p>
              <p className="grid-subtext " ref={addToTextRefs}>
                Currently based in Pune, Maharashtra — open to remote work
                worldwide.
              </p>

              <a href="#contact">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="">
          <div className="grid-container group hover:transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center" ref={addToTextRefs}>
                Contact me
              </p>

              <div
                className="copy-container cursor-pointer flex items-center gap-2"
                onClick={handleCopy}
              >
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  ypdhakane101@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
