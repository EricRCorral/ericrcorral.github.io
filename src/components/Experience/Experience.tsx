import { useEffect } from "react";
import { TemperiesLogo, TemperiesText, Puzzle } from "../../assets/img";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const [t] = useTranslation();

  const TEMPERIES_TASKS = [
    t("experience.temperies.task_1"),
    t("experience.temperies.task_2"),
    t("experience.temperies.task_3"),
    t("experience.temperies.task_4"),
    t("experience.temperies.task_5"),
    t("experience.temperies.task_6"),
    t("experience.temperies.task_7"),
    t("experience.temperies.task_8"),
    t("experience.temperies.task_9"),
    t("experience.temperies.task_10"),
    t("experience.temperies.task_11"),
  ];

  const PUZZLE_TASKS = [
    t("experience.puzzle.task_1"),
    t("experience.puzzle.task_2"),
    t("experience.puzzle.task_3"),
    t("experience.puzzle.task_4"),
    t("experience.puzzle.task_5"),
    t("experience.puzzle.task_6"),
  ];

  const [
    role,
    project,
    task,
    stack,
    temperiesProject,
    temperiesStack,
    puzzleProject,
    puzzleStack,
    jobTitle,
  ] = [
    t("experience.role"),
    t("experience.project"),
    t("experience.task"),
    t("experience.stack"),
    t("experience.temperies.project"),
    t("experience.temperies.stack"),
    t("experience.puzzle.project"),
    t("experience.puzzle.stack"),
    t("job_title"),
  ];

  const experienceAnimation = () => {
    const EXPERIENCE = document.getElementById("work-experience");
    if (
      !!EXPERIENCE &&
      EXPERIENCE.getBoundingClientRect().top < innerHeight / 1.2
    ) {
      const [firstJob, timeline, secondJob] = EXPERIENCE!.children;
      const [first_div, line, third_div] = timeline.children;

      firstJob.classList.add("first-job");
      secondJob.classList.add("second-job");
      first_div.classList.add("circle");
      third_div.classList.add("circle");
      line.classList.add("line");

      removeEventListener("scroll", experienceAnimation);
    }
  };

  useEffect(() => {
    addEventListener("scroll", experienceAnimation);
  }, []);

  return (
    <div id="work-experience">
      <div>
        <div>
          <img
            src={TemperiesLogo}
            className="fst-job-logo"
            alt="Temperies logo"
          />
          <img
            src={TemperiesText}
            className="fst-job-title"
            alt="Temperies text"
          />
          <span>2022-2024</span>
        </div>
        <p>
          {role}: {jobTitle}
        </p>
        <p>
          {project}: {temperiesProject}
        </p>
        <p>{task}:</p>
        <ul>
          {TEMPERIES_TASKS.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
        <p>
          {stack}: {temperiesStack}
        </p>
      </div>
      <div className="timeline">
        <div>
          <div />
          <span>2022-2024</span>
        </div>
        <div />
        <div>
          <span>2021-2022</span>
          <div />
        </div>
      </div>
      <div>
        <div>
          <img src={Puzzle} alt="Puzzle logo" />
          <span>2021-2022</span>
        </div>
        <p>
          {role}: {jobTitle}
        </p>
        <p>
          {project}: {puzzleProject}
        </p>
        <p>{task}:</p>
        <ul>
          {PUZZLE_TASKS.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
        <p>
          {stack}: {puzzleStack}
        </p>
      </div>
    </div>
  );
};

export default Experience;
