import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components'
import { fuels, yearsOfProduction } from '@/constants';
import { FilterProps, HomeProps } from '@/types'
import { fetchCars } from '@/utils'


export default async function Home({searchParams}:HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  console.log(allCars)
  const isDataEmpty:Boolean = !Array.isArray(allCars) || allCars.length<1 || !allCars
  console.log(isDataEmpty)
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Car Catalogue
          </h1>
          <p>
            Explore the car's you might like.
          </p>

        </div>
        <div className='home__filter'>
          <SearchBar/>
          <div className='home__filter-container'>
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>

          </div>

        </div>
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car:any)=>(
                <CarCard car={car}/>

              ))}

            </div>
            <ShowMore pageNumber={(searchParams.limit || 10) / 10} isNext={(searchParams.limit || 10)>allCars.length} />
          </section>
        ):(
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            
          </div>
        )}

      </div>
    </main>
  )
}
