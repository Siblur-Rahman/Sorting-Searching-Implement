import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";

const useServices = (asc, search) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // fetch(`${import.meta.env.VITE_API_URL}/services`)
        //     .then(res => res.json())
        //     .then(data => setServices(data));
        axiosSecure(`/services?sort=${asc? 'asc' : 'desc'}&search=${search}`)
        .then(res => setServices(res.data))
    }, [asc, search])
    return services
};

export default useServices;