/**
 * Function that returns a unique array of tags extracted from the given array of courses.
 * @param {Course[]} data The array of courses to extract tags from.
 * @return {string[]} An array of unique tags including "Все темы" and other tags present in the courses.
 */

export const getUniqueTags = (data: Course[]): string[] => {
  const tagSet: Set<string> = new Set();

  tagSet.add("Все темы");

  data.forEach((obj) => {
    obj.tags.forEach((tag) => {
      tagSet.add(tag);
    });
  });

  return Array.from(tagSet);
};
