import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"; // 1. import dulu
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger); // 2. inisialisasi dan daftarkan dengan method registerPlugin

/**
 * GSAP scroll trigger
 *  Adalah sebuah plugin dan dia juga properti yang bisa kompleks maupun simple. Karena scroll triger merupakan plugin maka wajib bagi kita
 *  untuk mengimport nya dan melakukkan inisial.
 *
 */

const GsapScrollTrigger = () => {
  const scrollRef = useRef(); // 3. Kita membutuhkan Ref untuk mengatuhi posisi scroll

  // TODO: Implement the gsap scroll trigger
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(scrollRef.current.children); // 4. Disini kita menggunakan ref untuk mengambil semua anakanya (DOM)

      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150 * (boxes.indexOf(box) + 5),
          rotation: 360,
          borderRadius: "100%",
          scale: 1.5,
          scrollTrigger: {
            trigger: box, // triger dilakukkan jika box muncul dilayar saat scroll
            start: "bottom bottom", // Ketika bawahan dari box bertemu dengan bawahan dari viewport maka diaakan beranimasi
            end: "top 20%", // ketika top nya mencapai 20% dari viewport maka dia akan berhenti
            scrub: true, // ini akan membuat animasi kita mencadi smoot,
          },
          ease: "power1.inOut",
        });
      });
    },
    // scope digunakan agar animasi hanya berlaku pada elemen di dalam komponen ini,
    // mencegah konflik dengan elemen lain yang punya class sama di luar komponen.
    { scope: scrollRef }
  );

  return (
    <main>
      <h1>GsapScrollTrigger</h1>

      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger is a plugin that allows you to create animations
        that are triggered by the scroll position of the page.
      </p>

      <p className="mt-5 text-gray-500">
        With ScrollTrigger, you can define various actions to be triggered at
        specific scroll points, such as starting or ending an animation,
        scrubbing through animations as the user scrolls, pinning elements to
        the screen, and more.{" "}
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap scroll trigger
        </a>{" "}
        method.
      </p>

      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>

        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>

      <div className="mt-20 w-full h-screen" ref={scrollRef}>
        {/* ref kitagunakan disini untuk menandakan posisi scroll */}
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        />
      </div>
    </main>
  );
};

export default GsapScrollTrigger;
