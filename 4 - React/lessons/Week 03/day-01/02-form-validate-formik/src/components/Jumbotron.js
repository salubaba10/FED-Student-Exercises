import Stack from "react-bootstrap/Stack";

// destructure the title and subTitle prop values from the prop object
export const Jumbotron = ({ title, subTitle }) => (
  <Stack gap={3} className="jumbotron">
    {/* title */}
    <div className="title">{title}</div>

    {/* sub-title */}
    {/* use the logical AND (&&) operator to render the sub-title div if subTitle is truthy */}
    {subTitle && <div className="sub-title">{subTitle}</div>}
  </Stack>
);
