import RubberChar from "./RubberChar";
const RubberWord = ({ children, className, config }) => {
  const chars = children.map((dPath, index) => (
    <RubberChar key={index} d={dPath}></RubberChar>
  ));
  return (
    <svg
      {...config}
      xmlns="http://www.w3.org/2000/svg"
      data-dom="letter"
      className={className}
    >
      {chars}
    </svg>
  );
};

export default RubberWord;
