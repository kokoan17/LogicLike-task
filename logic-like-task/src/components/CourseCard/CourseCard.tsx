import React from "react";
// eslint-disable-next-line no-unused-vars
React;

import styles from "./styles.module.scss";

type Props = {
  item: Course;
};

const CourseCard = ({ item }: Props) => {
  return (
    <div className={styles.courseCard}>
      <div
        className={styles.courseCard__img}
        style={{ background: item.bgColor }}
      >
        <img src={item.image} alt="course image" />
      </div>
      <div className={styles.courseCard__title}>
        <p>{item.name}</p>
      </div>
    </div>
  );
};

export { CourseCard };
