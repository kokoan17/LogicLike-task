import axios from "axios";

export const getCourses = async () => {
  try {
    const response = await axios.get(
      "https://logiclike.com/docs/courses.json",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error(error);
    return { success: false, error: error };
  }
};
