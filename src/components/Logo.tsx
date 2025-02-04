const Logo = ({ color }: { color: "white" | "black" }) => {
  const bgColor = color === "white" ? "white" : "black";

  return (
    <div className="flex flex-col items-center w-fill relative font-balginLight tracking-widest">
      <p>plantry</p>
      <div
        className={`absolute top-[115%] left-1/2 transform -translate-x-1/2 bg-${bgColor} w-[1rem] h-[3%]`}
      ></div>
    </div>
  );
};

export default Logo;
