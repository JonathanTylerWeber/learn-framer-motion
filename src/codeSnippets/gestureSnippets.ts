export const starterClick = `
<motion.div
  className="w-48 h-12 bg-white text-black flex items-center justify-center rounded-full cursor-pointer"
  // add animation
>
  Click Me
</motion.div>
`;

export const gestureCode = `
<motion.div
  className="w-48 h-12 bg-white text-black flex items-center justify-center rounded-full"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  Click Me
</motion.div>
`;

export const whileHoverCode = `
<motion.div
  className="w-48 h-12 bg-white text-black flex items-center justify-center rounded-full cursor-pointer"
  whileHover={{ scale: 1.1 }}
>
  Hover Me
</motion.div>
`;

export const whileTapCode = `
<motion.div
  className="w-48 h-12 bg-white text-black flex items-center justify-center rounded-full cursor-pointer"
  whileTap={{ scale: 0.9 }}
>
  Tap Me
</motion.div>
`;

export const whileFocusCode = `
<motion.input
  className="w-48 h-12 bg-white text-black rounded-full px-4 py-2 outline-none"
  style={{ 
    background: 'white',
    outline: 'none'
  }}  
  whileFocus={{
    background: 'yellow', 
  }}
  placeholder="Focus Me"
/>

`;

export const whileDragCode = `
<motion.div
  className="w-20 h-20 bg-white text-black flex items-center justify-center rounded-lg cursor-grab"
  whileDrag={{ rotate: 20 }}
  whileTap={{ cursor: 'grabbing' }}
  drag
>
  Drag Me
</motion.div>
`;
