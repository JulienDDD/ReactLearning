const heroImage = "https://static.wixstatic.com/media/e0c3a7_028403f123714317bd7576bf956184a1~mv2_d_3744_5616_s_4_2.jpg/v1/fill/w_560,h_770,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e0c3a7_028403f123714317bd7576bf956184a1~mv2_d_3744_5616_s_4_2.jpg"
const heroName = "Mon Nom"
const heroDesc = "Mon Nom"
const heroGradient = "bg-gradient-to-tr from-slate-900 via-zinc-700 to-neutral-800"


function Hero() {


    return (
<section
  id="hero"
  className={`h-screen flex flex-col justify-center items-center text-center p-4 
    ${heroGradient} bg-[length:200%_200%] animate-gradient text-white`}
>
        <div className="flex flex-col justify-center content-center text-center max-w-xl animate__animated animate__zoomIn"><img className="size-35 rounded-full shadow-2xl shadow-gray-500 animate-shadow mb-10 mx-auto object-cover object-top " src={heroImage}></img>
        <h2 className="text-4xl md:text-6xl font-bold rounded-full ">{heroName}</h2>
        <p className="text-lg md:text-xl mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar quam sit amet justo feugiat, fermentum tempor justo rhoncus. Duis sed tortor lacus. Donec sollicitudin dictum erat. Pellentesque ultrices feugiat mauris, ac eleifend massa efficitur vel. Proin elementum hendrerit neque ut feugiat. </p>
        <a href="#projects"   className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg shadow-md hover:bg-gray-200 transition cursor-pointer">
          Voir mes projets
        </a>
        </div>
      </section>
    );
  }
  
  export default Hero;
  