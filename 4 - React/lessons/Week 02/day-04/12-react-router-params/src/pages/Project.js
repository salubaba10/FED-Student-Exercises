// import useParams from react-router-dom which is a custom hook
import { useParams } from "react-router-dom";

import { Banner } from "../components/Banner";

export const Project = () => {
  // use the useParams hook to receive an object of all url params and extract the projectId from the params object

  // because the route was registered as /projects/:projectId useParams will access the value for projectId from the params object. For example if the path is /project/12345 then the projectId value is 12345
  const { projectId } = useParams();

  return (
    <Banner
      title="Project"
      // pass the projectId as the info prop to see the projectId in an alert
      info={projectId}
    />
  );
};
