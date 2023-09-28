import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters:FilterProps) {
    const {manufacturer,year,model, limit, fuel} = filters
    
    const headers =  {
        'X-RapidAPI-Key': '338d5fef9fmsh160255915baa1e4p18450djsn9c642f0561c5',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(`${process.env.CAR_API}?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fule_type=${fuel}`,{headers:headers})
    const results = await response.json();

    return results
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 4155; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

  export const generatCarUrl = (car:CarProps,angle?:string) =>{
    const url = new URL(`${process.env.CAR_IMAGE_URL}`);

    const {make,year,model} = car
    url.searchParams.append('customer',`${process.env.CAR_IMAGE_KEY}`);
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;
    

  }


  export const updateSearchParams = (type:string,value:string) =>{
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set(type,value)
    let newPathName = `${window.location.pathname}?${searchParams.toString()}`
    return newPathName
  }


