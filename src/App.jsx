import { useState } from "react";
import { useTranslation } from "react-i18next";
import college from "./assets/college-bro.svg";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const { loginWithRedirect } = useAuth0();
  const faqs = [
    {
      q: "What is included in the IELTS practice test?",
      a: "It includes section-based drills for Reading, Listening, Writing, and Speaking.",
    },
    {
      q: "How is the mock test scored?",
      a: "Our system simulates official scoring rubrics for each section.",
    },
    {
      q: "Is the study plan suitable for beginners?",
      a: "Yes, it’s structured from Band 5–8+.",
    },
    {
      q: "How does AI help with my IELTS preparation?",
      a: "AI generates personalized mock tests, scores them, and provides feedback based on your performance.",
    },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans text-[#1B1F2E]">
      {/* 顶部导航 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#00A79D] flex items-center justify-center text-white font-bold text-lg">
              I
            </div>
            <span className="font-bold text-xl tracking-tight">
              Lique IELTS Prep
            </span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#mock" className="hover:text-[#00A79D]">
              Mock Test
            </a>
            <a href="#practice" className="hover:text-[#00A79D]">
              Practice
            </a>
            <a href="#plan" className="hover:text-[#00A79D]">
              Study Plan
            </a>
            <a href="#faq" className="hover:text-[#00A79D]">
              FAQ
            </a>
          </nav>
          <div className="flex">
            <button  onClick={() => loginWithRedirect()} className="border border-[#00A79D] text-[#00A79D] px-4 py-1 rounded hover:bg-[#E0F7F5] transition">
              Login In
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#E0F7F5] to-white py-12 px-4 text-center">
        <div className="flex flex-col items-center mb-6">
          <img
            src={college}
            alt="IELTS Preparation"
            className="w-1/2 mb-4 object-cover rounded-lg shadow-lg"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
          Ace Your IELTS with a Smart Preparation Plan
        </h1>
        <h2 className="text-lg md:text-2xl mb-6 text-[#545353]">
          Free IELTS Mock Tests, Practice Exercises & 8-Week Study Guide to
          Boost Your Score
        </h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button onClick={() => loginWithRedirect()} className="bg-[#00A79D] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#009688] transition">
            Start Your Free Practice Test
          </button>
          <button onClick={() => loginWithRedirect()} className="bg-white border border-[#00A79D] text-[#00A79D] px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#E0F7F5] transition">
            Get My Study Plan PDF
          </button>
        </div>
      </section>

      {/* 三大核心模块 */}
      {/* 三大核心模块 */}
      <section className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-3 gap-8">
        {/* Mock Test */}
        <div
          id="mock"
          className="bg-white rounded-2xl shadow-lg p-7 flex flex-col items-center border-t-4 border-[#00A79D] relative"
          style={{ minHeight: "420px" }}
        >
          <div className="mb-4 text-4xl">📘</div>
          <h3 className="text-xl font-bold mb-2 text-[#00A79D]">
            AI IELTS Mock Test
          </h3>
          <ul className="text-[#545353] mb-4 text-left list-disc list-inside text-sm space-y-2">
            <li>Full-length mock tests with timing and band descriptors</li>
            <li>
              AI automatically generates authentic mock questions covering all
              types
            </li>
            <li>AI-powered scoring and personalized feedback</li>
            <li>
              Recreate the real exam experience to help you identify and improve
              weaknesses
            </li>
          </ul>
         <button onClick={() => loginWithRedirect()} className="bg-[#00A79D] text-white px-4 py-2 rounded hover:bg-[#009688] transition w-[calc(100%-3.5rem)] font-semibold absolute left-1/2 bottom-0 transform -translate-x-1/2 mb-7">
        Take an AI Mock Test Now
      </button>
        </div>
        {/* Practice Test */}
        <div
          id="practice"
          className="bg-white rounded-2xl shadow-lg p-7 flex flex-col items-center border-t-4 border-[#00A79D] relative"
          style={{ minHeight: "420px" }}
        >
          <div className="mb-4 text-4xl">🧠</div>
          <h3 className="text-xl font-bold mb-2 text-[#00A79D]">
            AI IELTS Practice Test
          </h3>
          <ul className="text-[#545353] mb-4 text-left list-disc list-inside text-sm space-y-2">
            <li>
              Reading, Listening, Writing, Speaking sections by difficulty
            </li>
            <li>Daily mini tests with progress tracking</li>
            <li>Grammar & vocabulary boosters</li>
          </ul>
          <button onClick={() => loginWithRedirect()} className="bg-[#00A79D] text-white px-4 py-2 rounded hover:bg-[#009688] transition w-[calc(100%-3.5rem)] font-semibold absolute left-1/2 bottom-0 transform -translate-x-1/2 mb-7">
            Try a Practice Set
          </button>
        </div>
        {/* Preparation Plan */}
        <div
          id="plan"
          className="bg-white rounded-2xl shadow-lg p-7 flex flex-col items-center border-t-4 border-[#00A79D] relative"
          style={{ minHeight: "420px" }}
        >
          <div className="mb-4 text-4xl">📅</div>
          <h3 className="text-xl font-bold mb-2 text-[#00A79D]">
            AI IELTS Preparation Plan
          </h3>
          <ul className="text-[#545353] mb-4 text-left list-disc list-inside text-sm space-y-2">
            <li>AI one-click to generate an efficient 8-week study plan,covers all question types and strategies</li>
            <li>Dynamically adjusts your learning path to fit your progress</li>
            <li>
              AI summarizes top-scorer experiences and sends daily reminders
            </li>
            <li>Plan is printable and fully customizable</li>
          </ul>
          <button onClick={() => loginWithRedirect()} className="bg-[#00A79D] text-white px-4 py-2 rounded hover:bg-[#009688] transition w-[calc(100%-3.5rem)] font-semibold absolute left-1/2 bottom-0 transform -translate-x-1/2 mb-7">
            Get the Plan
          </button>
        </div>
      </section>

      {/* 学习成果展示 */}
      <section className="max-w-5xl mx-auto py-12 px-4 text-center">
        <h3 className="text-2xl font-bold mb-6 text-[#1B1F2E]">
          What Our Learners Say
        </h3>
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-6">
          <div className="bg-white rounded-xl shadow p-5 flex-1 border border-[#E0F7F5]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#00A79D] flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <span className="font-semibold">Anna</span>
              <span className="text-[#00A79D]">★★★★★</span>
            </div>
            <div className="text-[#545353] text-sm">
              “Scored Band 7.5 in just 6 weeks!”
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-5 flex-1 border border-[#E0F7F5]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#00A79D] flex items-center justify-center text-white font-bold text-lg">
                L
              </div>
              <span className="font-semibold">Leo</span>
              <span className="text-[#00A79D]">★★★★★</span>
            </div>
            <div className="text-[#545353] text-sm">
              “Love the plan – daily tasks kept me on track.”
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-5 flex-1 border border-[#E0F7F5]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#00A79D] flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
              <span className="font-semibold">Mia</span>
              <span className="text-[#00A79D]">★★★★★</span>
            </div>
            <div className="text-[#545353] text-sm">
              “Mock test experience was just like the real one!”
            </div>
          </div>
        </div>
        <div className="text-[#27AE60] font-semibold mb-1">
          92% users improved 1+ band after using our plan
        </div>
        <div className="text-[#808080]">Trusted by 80,000+ IELTS learners</div>
      </section>

      {/* FAQ 区域 */}
      <section id="faq" className="max-w-2xl mx-auto py-10 px-4">
        <h3 className="text-xl font-bold mb-4 text-[#1B1F2E]">
          Frequently Asked Questions
        </h3>
        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <div key={idx} className="border rounded-xl bg-white shadow-sm">
              <button
                className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center text-[#1B1F2E]"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                {item.q}
                <span className="text-[#00A79D]">
                  {openFaq === idx ? "−" : "+"}
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-3 text-[#545353]">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-[#1B1F2E] text-white py-10 px-4 text-center">
        <div className="text-2xl font-bold mb-2">Get Started Today</div>
        <div className="mb-4">
          Ready to boost your IELTS score? Start with a mock test or download
          your 8-week prep plan.
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-[#00A79D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#009688] transition">
            Take Free Mock Test
          </button>
          <button className="bg-white text-[#00A79D] px-6 py-3 rounded-lg font-semibold hover:bg-[#E0F7F5] transition">
            Download Study Plan
          </button>
        </div>
        <div className="mt-8 text-xs text-[#808080]">
          © 2025 Lique IELTS Prep. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
