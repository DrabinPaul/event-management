import { Link } from "react-router-dom";


const Service = ({ service }) => {
    const { id, name, image, price, short_description, details, button } = service;
    return (
        <div>
            <div data-aos="fade-up" className="card card-compact  md:w-[350px] lg:w-[370px] bg-base-100 mb-5 shadow-lg">
                <figure>
                    <img className="rounded-t-lg w-full h-[200px] lg:h-[210px] lg:w-[370px]" src={image} alt="picture" />
                </figure>
                <div className="card-body rounded-b-lg h-[120px]">
                    <h3 className=" py-1 rounded-lg text-xl font-bold text-center">{name}</h3>
                    <h2 className="text-base font-medium text-center text-[#777]">{short_description}</h2>
                </div>
                <Link className="ml-5 mb-5 pt-3 flex justify-center" to={`/serviceDetails/${id}`}>
                    <button className="border bg-[#fe3e01] text-white rounded-md px-4 py-1 mt-2 uppercase font-medium">Details</button>
                </Link>            
                </div>
        </div>
    );
};

export default Service;