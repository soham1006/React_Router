import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://avatars.githubusercontent.com/u/149703014?v=4"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Hello 👋  I'm Soham Mewada! <br />
I'm an ECE student at IIIT Bhopal with a passion for web development. 🌐💻
                      </h2>
                      <p className="mt-6 text-gray-600">
                      🎓 Studying Electronics and Communication Engineering (ECE) at IIIT Bhopal <br />
🌟 Enthusiastic about creating beautiful and functional websites <br />
🚀 Learning HTML, CSS, JavaScript, and exploring frameworks like React JS <br />
🎨 Enjoying the creative process of turning ideas into code.
                      </p>
                      <p className="mt-4 text-gray-600">
                      🌐 Crafting responsive and user-friendly interfaces <br />
📚Exploring new technologies and staying up-to-date with industry trends <br />
🎧 Listening to music while coding (it’s my secret productivity booster!).

                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}