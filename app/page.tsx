import { Icon } from "@iconify/react"

export default function Home() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="font-bold text-4xl text-[#548cec] text-right pt-16 pr-16">Jonathan canseco Avila</h1>
      <p className="text-white text-right mr-16 pb-4">#programador</p>
      <div className='flex justify-end cursor-pointer mr-16'>
          <div className='inline-flex gap-4'>
              <Icon className='text-white size-9  transition-all duration-300 hover:text-[#548cec] hover:drop-shadow-[0_0_10px_rgba(84,140,236,0.8)] ' icon="mdi:github" width="24" height="24" />
              <Icon className='text-white size-9  transition-all duration-300 hover:text-[#548cec] hover:drop-shadow-[0_0_10px_rgba(84,140,236,0.8)] ' icon="mdi:linkedin" width="24" height="24" />
          </div> 
      </div> 

    </div>
       
      
  );
}
