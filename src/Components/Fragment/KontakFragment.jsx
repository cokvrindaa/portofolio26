import { useState } from "react";
import BlurText from "../Element/BlurText";
import AnimatedContent from "../Element/AnimatedContent.jsx";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};
const KontakFragment = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "15ca56f1-bdd6-4d65-81e7-767a44c03739");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Pesan berhasil di kirim via email!" : "Error");
  };
  return (
    <AnimatedContent>
      <div className="flex flex-col items-center justify-center ">
        <BlurText
          text="Kontak penulis"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl lg:text-[35px] text-center justify-center font-Poppins font-bold mb-2 lg:text-5xl"
        />

        <form
          onSubmit={onSubmit}
          className="relative z-1 flex flex-col gap-3 w-full max-w-4xl p-4"
        >
          <input
            type="text"
            name="name"
            required
            className="bg-gray-900 text-white px-4 py-2 rounded-xl font-Poppins placeholder:text-white"
            placeholder="Ketik nama anda..."
          />
          <textarea
            name="message"
            required
            className="bg-gray-900 text-white px-4 py-2 rounded-xl font-Poppins placeholder:text-white h-60 resize-none"
            placeholder="Ketik pesan anda...."
          ></textarea>
          <p className="font-Poppins font-semibold ml-1">{result}</p>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-white text-gray-900 font-bold px-8 py-2 rounded-xl font-Poppins hover:bg-gray-200 transition-colors"
            >
              Kirim!
            </button>
          </div>
        </form>
      </div>
    </AnimatedContent>
  );
};

export default KontakFragment;
