import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {

    const services = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const service = services.find((service) => service.id === idInt);
    console.log(service, idInt);

    return (
        <div className="max-w-6xl mx-auto">
            <div className="items-center flex justify-center mt-10">
            <img className="h-[500px] object-cover rounded-t-lg mb-5 " src={service.image} alt="" />
            </div>
            <h1 className="text-2xl font-bold pb-2">{service.name}</h1>
            <hr className="w-[370px] border" style={{ borderColor: '#fe3e01' }}/>
            <p className="font-medium text-base pt-2 pb-2">{service.details}</p>
            <p className="text-center font-bold text-xl text-[#fe3e01] pb-2">{service.price}</p>
            <div className=" flex justify-center">
            <button className="btn bg-[#1f1f1f] text-[#fe3e01] w-1/3 mb-10">Book Now</button>
            </div>

        </div>
    );
};

export default ServiceDetails;