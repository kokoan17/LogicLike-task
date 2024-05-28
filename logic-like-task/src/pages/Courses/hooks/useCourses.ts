import React, { useState, useEffect } from "react";
import { getCourses } from "../http";
import { getUniqueTags } from "../utils";
// eslint-disable-next-line no-unused-vars
React;

const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [initialCourses, setInitialCourses] = useState<Course[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesResponse = await getCourses();
        if (coursesResponse.success) {
          setCourses(coursesResponse.data);
          setInitialCourses(coursesResponse.data);
          setTags(getUniqueTags(coursesResponse.data));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  /**
   * Function that filters courses based on the selected tag.
   * @param {string} tag The selected tag to filter by.
   * @return {void} This function updates the state of courses based on the selected tag.
   */

  const filterCoursesByTag = (tag: string): void => {
    if (tag === "Все темы") {
      setCourses(initialCourses);
    } else {
      const filteredCourses = initialCourses.filter((course) =>
        course.tags.includes(tag)
      );
      setCourses(filteredCourses);
    }
  };

  return { courses, tags, filterCoursesByTag };
};

export { useCourses };
