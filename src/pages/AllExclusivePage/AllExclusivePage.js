
export default function AllExclusivePage ({ locations }) {
  return (
    <>
      {
                locations && locations.length
                  ? (
                    <main>
                      {
                            locations
                              .filter(location => location.category === '1')
                              .map((location) => {
                                return (
                                  <article key={location._id} className='vacation'>
                                    <h1>{location.title}</h1>
                                    <h3>{location.destination}</h3>
                                    <img src={location.image} alt='' />
                                    <p>{location.text}</p>
                                    <button className='resort' onClick={() => { window.location.href = location.url }}>VIEW RESORT</button>

                                  </article>
                                )
                              })
                        }
                    </main>
                    )
                  : <h1>Resorts</h1>
            }
    </>
  )
}
