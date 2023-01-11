
export default function AllInclusivePage ({ locations }) {
  return (
    <>
      {
                locations
                  ? (
                    <main>
                      {
                            locations
                              .filter(location => location.category === '2')
                              .map((location) => {
                                return (
                                  <article className='vacation' key={location._id}>
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
                  : <h1>Error</h1>
            }
    </>
  )
}
