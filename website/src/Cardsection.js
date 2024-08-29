import React from "react";
import Card
 from "./Card";
const Cardsection = () => {
    return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
            <Card title="LCO" buttonText="Open LCO" text="This is LCO website" link="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
          </div>
          <div className="col-4">
            <Card title="Sample" buttonText="Go" text="Some quick example text to build on the card title and make up
                  the bulk of the card's content." link="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
          </div>
          <div className="col-4">
            <Card title="LCO" buttonText="Open LCO" text="This is LCO website" link="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
          </div>
        </div>
      </div>
    </section>

    )
}

export default Cardsection;