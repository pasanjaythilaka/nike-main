import { shoe8 } from "../assets/images";
import Btn from "../components/Btn";


const SuperQuality = () => {
  return (
   <section
    id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">

      <div className="flex flex-1 flex-col">

      
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You 
            <span
          className="text-coral-red ">
            &nbsp;Super 
            </span> 
            <span
          className="text-coral-red ">
            &nbsp;Quality
            </span> Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text ">Discover our premium-quality shoes, crafted with top-notch materials for ultimate comfort and durability. Elevate your style with our exquisite designs, perfect for any occasion. Step into luxury today!</p>

          <p className="mt-6 lg:max-w-lg info-text">Our dedication to quality ensures premium, stylish, and durable shoe products.</p>

          <div className="mt-11">
          <Btn label="View Details"/>
          </div>
         


      </div>
      <div className="flex-1 flex justify-center items-center">
        <img 
        src={shoe8} 
        alt="shoe8"
        width={570}
        height={522}
        className="object-contain" />
        
      </div>


   </section>
  )
}

export default SuperQuality