export const basicVariant = `
function Example() {
  const variants = {
    start: { rotate: 180 },
    hoverState: { borderRadius: "75px" },
    tapState: { backgroundColor: "#ffd700" },
  };

  return (
    <motion.div
      className="h-[150px] w-[150px] rounded-lg bg-white cursor-pointer"
      variants={variants}
      animate="start"
      whileHover="hoverState"
      whileTap="tapState"
    />
  );
}


//ignore this line
render(<Example />);
`;

export const starterVariant = `
function Example() {
  const variants = {
  // add variants here
  };

  return (
    <motion.div
      className="h-[150px] w-[150px] rounded-lg bg-white cursor-pointer"
      variants={variants}
      // add animations here
    />
  );
}


//ignore this line
render(<Example />);
`;
