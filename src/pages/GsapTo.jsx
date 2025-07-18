import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/**
 * 1. PENGGUNAAN DAN PENGENALAN useGSAP
 *      Untuk menggunakan gsap di react Kita membungkusnya dengan useGsap(()=>{},[]). useGsap ini sama konsepnya dengan
 *    useEffect dan useFrame yang membedakan dia hanya untuk gsap. Kemudian logic gsap nya diletakkan didalam callback useGsap.
 *
 *    A. Struk useGsap dan struktur gsap.
 *      a. useGsap
 *          useGsap(() => { **gsap** }, [pemicuEffect/bisaKosong]);
 *      b. gsap.methodGsap("./#targetElement", {properti: bisa banyak})
 *          gsap.to("#boxOne", {x: 400, duration: 1});
 */

const GsapTo = () => {
  // TODO: Implement the gsap.to() method
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      repeat: -1, // --> Value-value Parameters = 1(2kali) || 0(1kali)*default || -1(infinite)
      yoyo: true, // --> Membuat sebuah animasi berlawanan dari yang dideklarasikan.
      rotation: 360,
      duration: 2,
      ease: "elastic", // --> Efek animasi yang digunakan saat animasi berjalan
    });
  }, []);

  return (
    <main>
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the{" "}
        <code>gsap.from()</code> method, but the difference is that the{" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
