import pattern from "../assets/imgs/pattern.png";

export default function Divider({ className }) {
  return (
    <div
      className={`bg-custom_blue border-2 border-black rounded-md ${className}`}
      style={{
        backgroundImage: `url(${pattern})`,
      }}
    ></div>
  );
}
