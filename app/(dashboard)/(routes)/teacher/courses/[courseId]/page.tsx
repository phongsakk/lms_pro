import React from "react";

const CourseIdPage = ({
  params,
}: {
  params: {
    courseId: string;
  };
}) => {
  return <div>Course id {params.courseId}</div>;
};

export default CourseIdPage;
