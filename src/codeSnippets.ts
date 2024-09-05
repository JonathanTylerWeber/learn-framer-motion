export const fadeInCode = `
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2 }}
>
  <div className="h-[150px] w-[150px] bg-white rounded-full"></div>
</motion.div>
`;

export const textAnimationCode = `
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2 }}
  className='text-white text-3xl'
>
  Hello World
</motion.p>
`;

export const colorAnimationCode = `
<motion.div
  initial={{ backgroundColor: '#ffffff' }}
  animate={{ backgroundColor: '#ffff00' }}
  transition={{ duration: 2 }}
  className="h-[150px] w-[150px] rounded-full"
/>
`;

export const positionAnimationCode = `
<motion.div
  initial={{ x: -50, y: -50 }}
  animate={{ x: 50, y: 50 }}
  transition={{ duration: 2 }}
  className="h-[150px] w-[150px] bg-white rounded-full"
/>
`;

export const rotationAnimationCode = `
<motion.div
  initial={{ rotate: 0 }}
  animate={{ rotate: 180 }}
  transition={{ duration: 2 }}
  className="h-[150px] w-[150px] bg-white rounded-md"
/>
`;
