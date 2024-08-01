import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Btn from "../components/Btn"


const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">

      <div className="flex-1 ">

        <img 
        src={offer} 
        alt=""
        width={773}
        height={687}
        className="object-contain w-full" />

      </div>

      <div className="flex flex-1 flex-col">

      
<h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
  
    <span
  className="text-coral-red ">
    &nbsp;Special 
    </span> Offer
  
  </h2>
  <p className="mt-4 lg:max-w-lg info-text ">Limited-time offer: Grab your favorite shoes at unbeatable prices. Don't miss out on these incredible savings. Shop now!</p>

  <p className="mt-6 lg:max-w-lg info-text">Special shoe sale: Enjoy huge discounts on top-quality footwear. Hurry, this limited-time offer won't last long. Shop today!</p>

  <div className="mt-11 flex flex-wrap gap-4">
  <Btn label="Shop now"
  iconURL={arrowRight} />
  <Btn
  label="Learn more"
  backgroundColor = "bg-white"
  borderColor = "border-slate-gray"
  textColor = "text-slate-gray"
  />
  </div>
  </div>

    </section>
  )
}

export default SpecialOffer