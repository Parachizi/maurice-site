import HeroImg from "../../assets/hero.jpg";
import { useTheme } from "../../provider/page";

export default function About() {
  const { theme } = useTheme();

  return (
    <>
      <section
        id="about"
        className={`py-16 md:py-32 ${
          theme === "dark"
            ? "bg-[#090f1c] text-white"
            : "bg-white text-gray-900"
        }`}
      >
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2
            className={`relative z-10 max-w-xl text-4xl font-medium lg:text-5xl ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            AWS Cloud Engineer, Linux Enthusiast & DevOps Learner
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            {/* IMAGE BLOCK */}
            <div className="relative mb-6 sm:mb-0">
              <div
                className={`bg-linear-to-b aspect-76/59 relative rounded-2xl p-px ${
                  theme === "dark" ? "from-zinc-700" : "from-zinc-300"
                } to-transparent`}
              >
                <img
                  src={HeroImg}
                  className={`rounded-[15px] ${
                    theme === "dark" ? "block" : "hidden"
                  }`}
                  alt="Cloud engineering illustration dark"
                  width={1207}
                  height={929}
                />
                <img
                  src={HeroImg}
                  className={`rounded-[15px] shadow ${
                    theme === "dark" ? "hidden" : "block"
                  }`}
                  alt="Cloud engineering illustration light"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            {/* TEXT BLOCK */}
            <div className="relative space-y-4">
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <span
                  className={`font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Hello! I'm Maurice Zadi — an AWS Cloud Engineer focused on
                  building secure, scalable, and cost-efficient cloud solutions.
                </span>{" "}
                I work with AWS services, Linux systems, and DevOps practices to
                design cloud architectures, automate infrastructure, and improve
                reliability. My passion lies in creating cloud environments that
                are optimized, maintainable, and follow modern engineering
                standards.
              </p>

              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I’m continually expanding my skills in automation, CI/CD,
                containerization, and backend technologies to grow as a
                full-stack cloud engineer. My goal is to build efficient,
                production-ready cloud systems and contribute meaningful
                solutions that help teams move faster with confidence.
              </p>

              <div className="pt-6">
                <blockquote
                  className={`border-l-4 ${
                    theme === "dark" ? "border-gray-700" : "border-gray-300"
                  } pl-4`}
                >
                  <p
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }
                  >
                    I'm a lifelong learner, driven by curiosity and
                    problem-solving. Every project I take on is an opportunity
                    to sharpen my skills, explore new technologies, and build
                    cloud solutions that make a real impact.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite
                      className={`block font-medium ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      — Maurice Zadi
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      
      </section>
    </>
  );
}
