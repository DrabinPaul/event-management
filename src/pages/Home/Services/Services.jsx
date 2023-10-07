import { useEffect, useState } from "react";
import Service from "../Service/Service";


const Services = () => {
    const [services, setServices] = useState();

    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then((data) =>{
                setServices(data);
            });
    }, [])

    return (
        <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-center pb-10"><span className="text-[#fe3e01]">Dwedding</span> Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5 lg:p-0">
                {
                    services?.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;