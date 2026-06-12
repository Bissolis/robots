import Robot from './assets/images/Robot.png'

export default function Page(){
  return(
    <main className="bg-neutral-950 w-full h-1/3 grid grid-cols-12 grid-rows-12 text-white overflow-hidden">
      {/* Parte Principal */}
      <div className='bg-radial from-red-500/100 via-red-500/55 to-transparent z-0 row-start-1 col-start-1 row-span-12 col-span-12 rounded-full blur-[150px]'></div>
      <img src={Robot} alt="robo" className='z-10 row-start-2 col-start-4 row-span-12 col-span-9'/>

      <h1 className='z-9 font-American row-start-9 col-start-1 text-[300px] -rotate-45 text-white/10 leading-64'>ARTIFICIAL INTELIGENSE</h1>
      <div className='flex flex-col gap-8 items-center row-start-3 col-start-2 bg-white/80 row-span-8 col-span-3 z-20 rounded-3xl border-2 shadow-md shadow-red-700 p-5'>
        <h1 className='mt-8 text-red-700 font-bold text-[20px]'>What is Artificial Intelligence?</h1>
        <p className='text-red-600 text-justify'>Artificial Intelligence (AI) is a technology that enables computers to perform tasks that normally require human intelligence, such as learning, problem-solving, decision-making, and understanding language. AI is widely used in applications like virtual assistants, recommendation systems, and image recognition, helping automate tasks and improve efficiency in many areas.</p>
      </div>
      {/* meu Footer */}
      <footer className=''>

      </footer>
    </main>
  );
}