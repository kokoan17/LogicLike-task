import React from "react";
// eslint-disable-next-line no-unused-vars
React;

import styles from "./styles.module.scss";
import { useCourses } from "./hooks/useCourses";
import { CourseCard } from "../../components/CourseCard";
import { Tags } from "../../components/Tags";

const Courses = () => {
  const { courses, tags, filterCoursesByTag } = useCourses();

  return (
    <div className={styles.coursesPage}>
      <div className={styles.coursesPage__content}>
        <div className={styles.coursesPage__content__tags}>
          <Tags tags={tags} onClick={filterCoursesByTag} />
        </div>
        <div className={styles.coursesPage__content__courses}>
          {courses?.map((item) => (
            <CourseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Courses };
