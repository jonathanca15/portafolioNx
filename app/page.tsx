import { Icon } from "@iconify/react"

export default function Home() {
  return (
    <main className="min-h-screen h-24 w-full bg-linear-to-tr from-black to-purple-950">
        <div className="animate-fade-in-up">
          <h1 className="font-bold text-4xl text-[#548cec] text-right pt-16 pr-16">Jonathan canseco Avila</h1>
          <p className="text-white text-right mr-16 pb-4">#programador</p>
          <div className='flex justify-end cursor-pointer mr-16'>
              <div className='inline-flex gap-4'>
                  <a href="https://github.com/jonathanca15">
                      <Icon className='text-white size-9  transition-all duration-300 hover:text-[#548cec] hover:drop-shadow-[0_0_10px_rgba(84,140,236,0.8)] ' icon="mdi:github" width="24" height="24" />
                  </a>
                  <a href="www.linkedin.com/injonathan-canseco-avila-3928b72b0">
                     <Icon className='text-white size-9  transition-all duration-300 hover:text-[#548cec] hover:drop-shadow-[0_0_10px_rgba(84,140,236,0.8)] ' icon="mdi:linkedin" width="24" height="24" />
                  </a>
                  
                  
              </div>
          </div>

          <div id="sobreMi" className="grid grid-cols-[220px_1fr]">
            <div id="imgSobreMi">
              <img src="" alt="" />
            </div>
            <div id="bodySobreMi" className="">
                <h2 className="text-2xl font-bold mb-3.75 ">SOBRE MI</h2>
                <p className="text-justify">Soy Jonathan Canseco Avila , Ingeniero en Sistemas Computacionales egresado del IEU con un fuerte enfoque en el desarrollo de software. Actualmente me encuentro especializándome de manera autónoma en tecnologías web y lenguajes de programación como Python y Java. Soy una persona proactiva, con gran capacidad de aprendizaje técnico y motivado por iniciar mi trayectoria profesional aportando soluciones lógicas y eficientes.</p>

                <button id="masInfo" className="py-1.5 px-7 bg-[#548cec] ">Más Info</button>
            </div> 
          </div>





        </div>
    </main>
    
       
      
  );
}
