import Reviewcard from "../components/Reviewcard"
import { reviews } from "../constants"


const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className=" font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red ">

           &nbsp;Customers</span>
           &nbsp; Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center ">Customers rave about our Nike shoes: incredibly comfortable, stylish, durable, and perfect for workouts. Experience quality and performance like never before!</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) =>(
          <Reviewcard
          key={review.customerName}
          imgURL = {review.imgURL}
          customerName={review.customerName}
          rating ={review.rating}
          feedback = {review.feedback}

          
          
          />
        ))}

      </div>
    </section>
  )
}

export default CustomerReviews