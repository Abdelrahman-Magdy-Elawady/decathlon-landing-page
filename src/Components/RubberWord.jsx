import RubberChar from "./RubberChar";
const RubberWord = ({ children, className }) => {
  const chars = children.map((dPath, index) => (
    <RubberChar key={index} d={dPath}></RubberChar>
  ));
  return (
    <svg
      width="960"
      height="169"
      viewBox="0 0 960 169"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-dom="letter"
      className={className}
    >
      {chars}
    </svg>
  );
};

export default RubberWord;
