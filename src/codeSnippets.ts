// basics
export const fadeInCode = `
<motion.div
  className="h-[150px] w-[150px] bg-white rounded-full"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2 }}
/>
`;

export const textAnimationCode = `
<motion.p
  className='text-white text-3xl'
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2 }}
>
  Hello World
</motion.p>
`;

export const colorAnimationCode = `
<motion.div
  className="h-[150px] w-[150px] rounded-full"
  initial={{ backgroundColor: '#ffffff' }}
  animate={{ backgroundColor: '#ffff00' }}
  transition={{ duration: 2 }}
/>
`;

export const positionAnimationCode = `
<motion.div
  className="h-[150px] w-[150px] bg-white rounded-full"
  initial={{ x: -50, y: -50 }}
  animate={{ x: 50, y: 50 }}
  transition={{ duration: 2 }}
/>
`;

export const rotationAnimationCode = `
<motion.div
  className="h-[150px] w-[150px] bg-white rounded-md"
  initial={{ rotate: 0 }}
  animate={{ rotate: 180 }}
  transition={{ duration: 2 }}
/>
`;

export const scaleAnimationCode = `
<motion.div
  className="h-[150px] w-[150px] bg-white rounded-full"
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
/>
`;

export const starterCircle = `
<motion.div
  className="h-[150px] w-[150px] bg-white rounded-full"
  // add animation 
/>
`;

// gestures
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
  className="w-48 h-12 bg-white text-black flex items-center justify-center rounded-full cursor-grab"
  whileDrag={{ rotate: 15 }}
  whileTap={{ cursor: 'grabbing' }}
  drag
>
  Drag Me
</motion.div>
`;
