import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {
  // stagger itu hanya sebuah properti untuk memulai animasi

  // TODO: Implement the gsap.stagger() method
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 250,
      rotation: 360,
      borderRadius: "100%",
      repeat: -1,
      yoyo: true,
      // disini stagger menganimasikan semuanya menjadi satu demi satu
      // stagger: 0.5, * simple stagger
      // * complex stagger
      stagger: {
        amount: 1.5,
        grid: [2, 1],
        axis: "y",
        ease: "circ.inOut",
        from: "center",

        /**
          🔹 amount: 1.5
              - Total durasi distribusi penundaan antar elemen adalah 1.5 detik.
              - Misalnya ada 3 elemen, dan amount 1.5, maka GSAP akan menyebarkan delay dari elemen pertama ke terakhir dalam rentang 1.5 detik.
          🔹 grid: [2, 1]
              - Menyatakan bahwa elemen-elemennya diatur dalam grid 2 kolom x 1 baris.
              - Artinya GSAP tahu bahwa penataan elemen yang dianimasikan berbentuk grid, sehingga stagger bisa bekerja berdasarkan posisi grid 
              (bukan hanya urutan array).
          🔹 axis: "y"
              - Stagger hanya akan terjadi secara vertikal (sumbu Y).
              - Dalam konteks grid, artinya delay dihitung berdasarkan baris.
          🔹 ease: "circ.inOut"
              - Fungsi easing untuk mengatur kecepatan animasi per elemen.
              - "circ.inOut" berarti animasi dimulai dan diakhiri perlahan dengan kecepatan puncak di tengah (lingkaran/sirkular easing).
          🔹 from: "center"
              - Menentukan dari mana animasi akan mulai menyebar.
              - "center" berarti elemen di tengah grid akan mulai duluan, lalu menyebar ke luar ke elemen-elemen di sekitarnya.
              - Alternatif lain: "start", "end", "edges", angka indeks, atau fungsi kustom.
         */
      },
    });
  }, []);

  return (
    <main>
      <h1>GsapStagger</h1>

      <p className="mt-5 text-gray-500">
        GSAP stagger is a feature that allows you to apply animations with a
        staggered delay to a group of elements.
      </p>

      <p className="mt-5 text-gray-500">
        By using the stagger feature in GSAP, you can specify the amount of time
        to stagger the animations between each element, as well as customize the
        easing and duration of each individual animation. This enables you to
        create dynamic and visually appealing effects, such as staggered fades,
        rotations, movements, and more.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Gsap Stagger
        </a>{" "}
        feature.
      </p>

      <div className="mt-20">
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box" />
        </div>
      </div>
    </main>
  );
};

export default GsapStagger;
