import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


const products = [
  {
    id: 1,
    name: 'Video 1',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1674231386741-211eec6d6173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
    imageAlt: "Video 1.",
  },
  {
    id: 2,
    name: 'Video 2',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1674304985678-f1ab79f726c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    imageAlt: "Video 2.",
  },
  {
    id: 3,
    name: 'Video 3',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1674320702836-3cb3f45103aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=672&q=80',
    imageAlt: "Video 3.",
  },
  // More products...
]

function App() {

  const[show,setShow]=useState(false)

  return (
    <>
      <div className="isolate bg-white">
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-8xl pt-16">
              <div>
                <div className="mx-auto max-w-4xl pt-24 lg:max-w-7xl">
                  <div>
                    <h2 className="th-title justify-start mx-20">Taun Healy</h2>
                    <div className="flex mx-20">
                      <p className="mr-auto my-auto th-subtitle">Video Editor</p>
                      <p className="ml-auto my-auto th-extra hover:text-gray-700 hover:border-green-200 hover:cursor-pointer duration-200">taunhealy@gmail.com</p>
                    </div>
                  </div>

                  <div id="default-carousel" class="relative w-full" data-carousel="static">
                    <div class="relative h-auto mx-20 my-10 overflow-hidden">
                      <div className="grid grid-cols-3 gap-8 h-full" data-carousel-item>
                        {products.map((product) => (
                          <>
                            <div key={product.id} className="group relative">
                              <div className="color-overlay aspect-w-1 aspect-h-1 w-full overflow-hidden lg:aspect-none">
                                <group onClick={()=>setShow(!show)}>
                                  <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full max-h-[32rem] object-cover object-center lg:h-full lg:w-full"
                                  />
                                  <div className="overlay">
                                    <div className="overlay-text th-item-title">{product.name}</div>
                                  </div>
                                </group>
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                    <div class="z-30 flex">
                      <div className="mx-auto space-x-3">
                        <button type="button" class="w-4 h-4 rounded-full border-[0.125rem] border-gray-400/50 bg-transparent focus:bg-green-300/50 focus:border-green-400/50" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" class="w-4 h-4 rounded-full border-[0.125rem] border-gray-400/50 bg-transparent focus:bg-green-300/50 focus:border-green-400/50" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" class="w-4 h-4 rounded-full border-[0.125rem] border-gray-400/50 bg-transparent focus:bg-green-300/50 focus:border-green-400/50" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div>
          <div>
              {show &&  <div className="py-12 bg-gray-50/50 transition duration-250 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
                  <div role="alert" className="container mx-auto h-full flex">
                      <div className="relative th-modal align-middle mx-auto my-auto">
                          <div className="w-auto my-28 mx-16 flex">
                            <iframe class="min-w-[500px] aspect-video" title="video" src="/video.mp4"></iframe>
                            <div className="mx-10">
                              <h1 className="th-modal-title mt-4">Title</h1>
                              <h3 className="th-modal-subtitle mt-2">Client subtitle</h3>
                              <p className="th-modal-text md:max-w-[300px] mt-8">Portfolio details go here such as why the project was created, how it was executed, what challenges were encountered and how they were solved.</p>
                            </div>
                          </div>

                          <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 transition duration-150 ease-in-out" onClick={()=>setShow(!show)} >
                              <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <line x1={18} y1={6} x2={6} y2={18} />
                                  <line x1={6} y1={6} x2={18} y2={18} />
                              </svg>
                          </div>
                      </div>
                  </div>
              </div>}
          </div>
      </div>
    </>
  );
}

export default App;
