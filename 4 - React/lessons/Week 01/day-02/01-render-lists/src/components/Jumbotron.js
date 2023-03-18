/**
 * props is an object with 2 keys
 * title: string
 * subTitle: string
 */
export const Jumbotron = (props) => {
  // retrieve the title from the props object
  const title = props.title;

  // retrieve the subTitle from the props object
  const subTitle = props.subTitle;

  return (
    <div className="jumbotron">
      {/* title */}
      <div className="title">{title}</div>

      {/* sub-title */}
      <div className="sub-title">{subTitle}</div>
    </div>
  );
};
