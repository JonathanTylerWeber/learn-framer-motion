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
