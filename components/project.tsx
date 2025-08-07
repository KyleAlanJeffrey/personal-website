// githubRepos.map((repo, index) => {
//                 if (repo.pinned) {
//                   return (
//                     <div
//                       className="item"
//                       key={`repo${index}`}
//                       title={repo.name}
//                     >
//                       <div className="header">
//                         <a
//                           rel="noreferrer"
//                           href={repo.homepage}
//                           target="_blank"
//                         >
//                           {repo.name}
//                         </a>
//                         {repo.topics.includes("website") && (
//                           <span>Live Website!</span>
//                         )}
//                       </div>
//                       <p>{repo.description}</p>
//                       <div className="flex-spacer" />
//                       <div className="topics">
//                         <TypeWriterEffect
//                           textStyle={{
//                             lineHeight: "16px",
//                             color: "#66ff66",
//                             fontSize: "12px",
//                           }}
//                           startDelay={0}
//                           typeSpeed={100}
//                           text={repo.topics.join(" / ")}
//                         />
//                       </div>
//                     </div>
//                   );
//                 } else {
//                   return null;
//                 }
export type GithubRepoType = {
  pinned: boolean;
  name: string;
  homepage: string;
  topics: string[];
  description: string;
};

function Project(props: { githubRepo: GithubRepoType; index: number }) {
  return (
    <div className="space-y-12 p-2">
      <div className="group cursor-pointer p-6 border-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:border-gray-500 dark:hover:border-gray-500 hover:shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <h3
            className="text-2xl font-black text-black dark:text-white transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 tracking-[0.1em]"
            style={{ fontFamily: "monospace" }}
          >
            {props.githubRepo.name}
          </h3>
          <div
            className="text-sm text-gray-500 dark:text-gray-400 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 font-bold tracking-[0.2em]"
            style={{ fontFamily: "monospace" }}
          >
            0{props.index + 1}
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 font-medium">
          {props.githubRepo.description || "No description available"}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {props.githubRepo.topics.map((topic, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-400 dark:border-gray-600 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 tracking-[0.1em]"
              style={{ fontFamily: "monospace" }}
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
