import {
  Cpu,
  Apple,
  Sparkles,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Logo & Description */}

          <div>

            <div className="flex items-center gap-3">

              <img
                src="/apple.png"
                alt="Apple Logo"
                className="w-10 h-10 object-contain"
              />

              <h2 className="text-3xl font-bold text-white">
                iPrice AI
              </h2>

            </div>

            <p className="mt-5 leading-7 text-gray-400">
              AI-powered Apple Device Price Prediction System.
              Predict the resale value of iPhone, iPad,
              MacBook and Apple Watch using Machine Learning.
            </p>

          </div>

          {/* Features */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Features
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Apple size={20} className="text-green-400" />
                <span>Apple Device Prediction</span>
              </div>

              <div className="flex items-center gap-3">
                <Cpu size={20} className="text-blue-400" />
                <span>Machine Learning Model</span>
              </div>

              <div className="flex items-center gap-3">
                <Sparkles size={20} className="text-yellow-400" />
                <span>Instant AI Prediction</span>
              </div>

            </div>

          </div>

          {/* Connect */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Connect
            </h3>

            <p className="text-gray-400 mb-5">
              Explore my GitHub projects.
            </p>

            <a
              href="https://github.com/ankitjangir10054-prog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition duration-300"
            >
              <spam className='text-xl'> </spam> 
              GitHub Profile
            </a>

          </div>

        </div>

        {/* Technologies */}

        <div className="flex flex-wrap gap-3 mt-14 justify-center">

          <span className="bg-slate-800 px-4 py-2 rounded-full">
            React
          </span>

          <span className="bg-slate-800 px-4 py-2 rounded-full">
            FastAPI
          </span>

          <span className="bg-slate-800 px-4 py-2 rounded-full">
            Python
          </span>

          <span className="bg-slate-800 px-4 py-2 rounded-full">
            Scikit-Learn
          </span>

          <span className="bg-slate-800 px-4 py-2 rounded-full">
            Random Forest
          </span>

          <span className="bg-slate-800 px-4 py-2 rounded-full">
            Machine Learning
          </span>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm text-gray-500">
            © 2026 iPrice AI • Developed by <span className="text-green-400 font-semibold">Ankit Jangir</span>
          </p>

          <p className="text-sm text-gray-500 mt-4 md:mt-0">
            Built with ❤️ using React, FastAPI & Machine Learning
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;