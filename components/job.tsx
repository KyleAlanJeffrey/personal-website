//   "jobs": [
//     {
//       "title": "Senior Software Engineer",
//       "description": "Robotics Engineer, Full Stack Software Engineer:",
//       "skills": [
//         "Python",
//         "SaltStack",
//         "React",
//         "React Native",
//         "Expo",
//         "FastAPI",
//         "AWS",
//         "Gitlab",
//         "CI/CD",
//         "Linux",
//         "IOT",
//         "Node.js",
//         "Redux",
//         "Docker",
//         "Postgres",
//         "NestJS"
//       ],
//       "accomplishments": [
//         "SaltStack for Deploying versioned software stacks.",
//         "OS tooling and infrastructure for linux based IOT devices.",
//         "Dev OPS involving CI/CD on Gitlab.",
//         "React Native and Expo for Cross Platform Mobile App Development.",
//         "React for Web using Redux/React Router/React Query/ Next.js",
//         "Python for Backend API Development using FastAPI. ",
//         "AWS Cloud Management."
//       ],
//       "company": "Stout Industrial Technology",
//       "duration": " May '23 - Present"
//     },
type JobType = {
  title: string;
  description: string;
  skills: string[];
  accomplishments: string[];
  company: string;
  duration: string;
};
function Job(props: { job: JobType; index: number }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group">
      <div className="lg:col-span-2 text-center lg:text-left">
        <div
          className="text-sm text-gray-600 dark:text-gray-400 tracking-[0.2em] font-bold mb-2 transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200"
          style={{ fontFamily: "monospace" }}
        >
          {props.job.duration.toUpperCase()}
        </div>
        <div className="w-16 h-1 bg-gray-400 dark:bg-gray-600 mx-auto lg:mx-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-400 dark:bg-gray-600 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></div>
        </div>
        <div
          className="text-2xl font-black text-black dark:text-white mt-4 transition-all duration-300 group-hover:scale-105 tracking-[0.1em]"
          style={{ fontFamily: "monospace" }}
        >
          0{props.index + 1}
        </div>
      </div>

      <div className="lg:col-span-7 text-center lg:text-left">
        <h3
          className="text-2xl md:text-3xl font-black text-black dark:text-white mb-2 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 tracking-[0.1em]"
          style={{ fontFamily: "monospace" }}
        >
          {props.job.title.toUpperCase()}
        </h3>
        <h3
          className="text-2xl md:text-3xl font-black text-black dark:text-white mb-4 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 tracking-[0.1em]"
          style={{ fontFamily: "monospace" }}
        >
          DEVELOPER
        </h3>
        <div
          className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-bold tracking-[0.2em]"
          style={{ fontFamily: "monospace" }}
        >
          AT
        </div>
        <h4
          className="text-lg text-gray-700 dark:text-gray-300 mb-6 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 font-bold tracking-[0.1em]"
          style={{ fontFamily: "monospace" }}
        >
          {props.job.company.toUpperCase()}
        </h4>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 font-medium">
          {props.job.description}
        </p>
        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
          {props.job.skills.map((skill, index) => (
            <span
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
              style={{ fontFamily: "monospace" }}
            >
              {skill.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      <div className="lg:col-span-3 flex justify-center lg:justify-start">
        <div className="w-24 h-24 md:w-32 md:h-32 border-2 border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-gray-600 dark:group-hover:border-gray-400">
          <div
            className="text-2xl md:text-3xl font-black text-gray-600 dark:text-gray-400 transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 tracking-[0.1em]"
            style={{ fontFamily: "monospace" }}
          >
            {props.job.company.split(" ")[0][0].toUpperCase()}
            {props.job.company.split(" ").length > 1
              ? props.job.company.split(" ")[1][0].toUpperCase()
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;
