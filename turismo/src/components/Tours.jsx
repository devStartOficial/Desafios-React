import Tour from './Tour'

// eslint-disable-next-line react/prop-types
export default function Tours({tours, romeveTour}) {

  return (
    <section>
        <div className='title'>
             <h2>Our tours</h2>
             <div className='underline'></div>
        </div>
        <div>
            {
                // eslint-disable-next-line react/prop-types
                tours.map((tour)=> {
                    return <Tour key={tour.id} {...tour} romeveTour={romeveTour}  />
                })
            }
        </div>
    </section>
  )
}
