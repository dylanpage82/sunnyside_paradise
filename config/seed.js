require('dotenv').config()
require('./database')

const Location = require('../models/location')

const starterLocations = [
  {
    title: 'HALCYON BEACH',
    destination: 'Castries, Saint Lucia',
    category: '2',
    url: 'https://www.sandals.com/halcyon-beach/',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/61/ce/ef/sandals-halcyon-beach.jpg?w=700&h=-1&s=1',
    text: 'Set on the breathtaking 220-acre La Toc Estate, Sandals Regency La Toc truly exudes beauty from every gorgeous angle. With its lush tropical scenery and rolling fairways at the challenging executive-style golf course onsite, it truly represents the utmost in luxury accommodations including the prestigious Sunset Oceanview Bluff Village, an exclusive resort within a resort. Known as the “Emerald of the Caribbean” because of its sparkling emerald waters, Sandals Regency La Toc hugs a magnificent half-mile, crescent-shaped beach. Indulge in nine 5-Star Global Gourmet®'

  },
  {
    title: 'CARNIVAL CONQUEST',
    destination: 'Nassu, Bahamas',
    category: '0',
    url: 'https://www.carnival.com/cruise-search?pageNumber=1&numadults=2&ptport=NAS&pagesize=8&sort=fromprice&showBest=true',
    image: 'https://www.nassauparadiseisland.com/sites/default/files/styles/card_small_2x/public/images/properties/hero/stay-atlantis-paradise-island.jpg?itok=H4hDvgBh',
    text: "Sightseeing, swimming and soaking up the island flavor — it's all yours for the taking on a Carnival cruise to Nassau, Bahamas. Boasting balmy breezes and jumping to a bouncy calypso beat, Nassau promises sizzling fun in the sun. The historic and cultural heart of The Bahamas is one of the world’s most popular cruise destinations — one million travelers board cruises to Nassau every year. Carnival guests come for fine beaches, shopping, water sports, and fun-filled attractions at the Atlantis Resort, connected to Nassau by a bridge to Paradise Island. Throw in a chance to swim with dolphins, or do a little slipping and sliding at a water park, and it's clear what makes Nassau a top spot for cruisers of all ages. "
  },
  {
    title: 'SOUTH BEACH',
    destination: 'Miami, Florida',
    category: '1',
    url: 'https://www.tripadvisor.com/Hotel_Review-g34439-d7606777-Reviews-1_Hotel_South_Beach-Miami_Beach_Florida.html',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/27/34/0c/1-hotel-south-beach.jpg?w=2000&h=-1&s=1',
    text: "Occupying an entire city block on Collins Ave, 1 Hotel South Beach sits on 600 ft of beachfront & offers unparalleled views of the Atlantic Ocean & Downtown Miami. Throughout the 426-room resort the celebration of nature is evident, from the notes of driftwood furnishings to the abundance of reclaimed natural material. Guest rooms average 700 sq ft which include spacious Studio Suites, 5 bedroom Homes & everything in between. Explore your #daylife with 4 outdoor swimming pools, including South Beach's largest Rooftop pool & lounge. We also offers unique experiences on property for guests to relax, reflect & discover nature around you. Our Seedlings club invites children to explore environmental fun & learning."

  },
  {
    title: 'HYATT REGENCY MAUI RESORT AND SPA',
    destination: 'Hawaii',
    category: '1',
    url: 'https://www.hyatt.com/en-US/hotel/hawaii/hyatt-regency-maui-resort-and-spa/oggrm?src=redirect_retiredsite_hyattregencymaui.com',
    image: 'https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2016/11/02/1558/Hyatt-Regency-Maui-Resort-and-Spa-P258-Resort-Evening.jpg/Hyatt-Regency-Maui-Resort-and-Spa-P258-Resort-Evening.16x9.jpg?imwidth=960',
    text: "Set on 40 acres on Kaanapali Beach, the completely-reimagined Hyatt Regency Maui Resort and Spa is a getaway in paradise. Enjoy Hawaiian hospitality with stargazing and a traditional nightly lu'au on-site, stay loose on the links with oceanfront golf, or unwind at our beachfront spa."
  },
  {
    title: 'HARRAHS RESORT',
    destination: 'Southern California',
    category: '1',
    url: 'https://harrahssocal.com/?utm_source=google&utm_medium=ppc&utm_term=resorts+in+california&utm_content=Exact+-+Resort&utm_campaign=CAM-RIN-Occ-Generic-National-INC-Exact-All&gclid=CjwKCAiA-8SdBhBGEiwAWdgtcKSWggQlzP6U2EOjO-OB9bGT4JP4HYiVDwN076Cl1_CubFIOt8JKdxoCUnIQAvD_BwE&gclsrc=aw.ds',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9VfRRJ7l9PHi3esIsb-rOEdfGdl1OgGHYw&usqp=CAU',
    text: "Serving as a destination resort, this bustling hotel and casino is 10.7 miles from Hellhole Canyon Preserve and 19 miles from the San Diego Zoo Safari Park. Homey rooms offer flat-screen TVs, glass-enclosed showers, minifridges and Wi-Fi (fee). Sleek suites add living rooms with pull-out sofas. Amenities include free chilled water, 3 pools (1 with a swim-up bar), and a 400-ft lazy river ride. The casino features 1,700 slots and more than 59 gaming tables; there's also a sports bar, a gift shop, and a beauty and wellness spa. On-site dining options include an upscale steakhouse, a casual oyster bar and a Mexican restaurant."
  },
  {
    title: 'TURTLE BAY RESORT',
    destination: 'Hawaii',
    category: '2',
    url: 'https://www.tripadvisor.com/Hotel_Review-g60651-d87158-Reviews-Turtle_Bay_Resort-Kahuku_Oahu_Hawaii.html',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/20/8b/a8/95/turtle-bay-resort.jpg?w=1400&h=-1&s=1',
    text: "The only resort of its kind set on the North Shore of O'ahu, Turtle Bay spans across nearly 1,300 acres of lush, historic land, featuring five miles of untouched coastline and twelve miles of breathtaking trails. Turtle Bay is located approximately 55 minutes from Honolulu International Airport, and a few minutes away from the Polynesian Cultural Center, Historic Hale'iwa Town, Waimea Valley, and world-famous surf breaks. With stunning oceanfront accommodations and spa services, golf courses, access to extraordinary water experiences, and holistic dining menus incorporating native culinary traditions, Turtle Bay pays tribute to the rich culture of Hawai'i while ensuring every aspect of the guest experience deepens a connection to the North Shore spirit. "
  },
  {
    title: 'BAHIA PRINCIPE LUCURY RUNAWAY BAY',
    destination: 'Jamaica',
    category: '2',
    url: 'https://www.cheapcaribbean.com/HotelById?onsaleid=1349554&los=3&hotelcode=72059&remotesourcecode=HBSHotel&vendorcode=CCV&redirect=false&destinationcode=MBJ&dynamicpackageid=AH01&traveldate=2023-04-30#!/',
    image: 'https://images2.triseptsolutions.com/Hotels/LTMSImg/OCJLRUN/slideshow/ocjlrun_m01.jpg',
    text: "Bahia Principe Luxury Runaway Bay is situated in the heart of Runaway Bay on a beautiful site on the northern coast of Jamaica. It combines Victorian style with soothing colors and a warm, inviting atmosphere. The hotel offers 525 Junior Suite Deluxe rooms featuring garden views, ocean views or ocean front. Experience the exclusive services at the most luxurious brand of Bahia Principe, exclusively for adults. You'll also have access to all the services of Bahia Principe Grand Jamaica. Come and find your place in the paradise of Runaway Bay.   Unlimited à la carte dining at specialty restaurants of the complex (subject to availability), wide selection of international and premium liquors, exclusive beach and pool bar service, unlimited drinks at all hotel bars with a large selection of domestic liquor and beer and free 24-hour WiFi throughout the hotel"
  },
  {
    title: 'SONESTA RESORT',
    destination: 'Hilton Head Island, SC',
    category: '1',
    url: 'https://www.booking.com/hotel/us/sonesta-resort-hilton-head-island.html?aid=356281&label=metatripad-link-dmetaus-hotel-77850_xqdz-4b4787e67cfe051d1551d5589961eb7a_los-01_bw-014_tod-18_dom-com_curr-USD_gst-02_nrm-01_clkid-459d971e-4105-4708-9a31-b9b9db53297c_aud-0000_mbl-M_pd-B_sc-2_defdate-0_spo-0_clksrc-0_mcid-10&sid=fc18e3f230c791643486e2ef43ca3c7b&all_sr_blocks=18610506_83021636_4_0_0&checkin=2023-01-15&checkout=2023-01-16&dest_id=20116958&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=3&highlighted_blocks=18610506_83021636_4_0_0&hpos=3&matching_block_id=18610506_83021636_4_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=18610506_83021636_4_0_0__14320&srepoch=1672619388&srpvid=6a8e037d58a50110&type=total&ucfs=1&activeTab=main',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/341650760.jpg?k=9acfbc207ab89c171d92080d891f12d0cba12b2966e4dbb573e6850cf011c795&o=&hp=1',
    text: 'Directly on the beach, Sonesta Resort Hilton Head Island is 10 minutes from Shelter Cove Marina and The Mall at Shelter Cove. Guests will enjoy on-site dining options and Wi-Fi.All spacious rooms offer either private balconies or patios with views of the resort or Atlantic Ocean. A flat-screen cable TV and small refrigerator are also provided.Van Der Meer Tennis and Shipyard Golf Course are adjacent to this Hilton Head Island hotel. Coligny Plaza and Sea Pines Forest Preserve are 2 miles away. '
  },
  {
    title: 'HOTEL RIU',
    destination: 'Cancun, Mexico',
    category: '2',
    url: 'https://www.riu.com/en/hotel/mexico/cancun/hotel-riu-cancun/index.jsp',
    image: 'https://www.riu.com/en/binaris/Cancun-(7)_tcm55-181616.jpg?v=tm090222_1551',
    text: "The Hotel Riu Cancun (All Inclusive 24 hours) is situated in the heart of one of Cancun's most popular areas for tourists, in a prime location on a white sandy beach with turquoise water. If you’re looking for a few days to pamper your body, we strongly recommend our Renova Spa with a wide range of treatments, as well as a gym and Jacuzzi. Or simply regain your strength on holiday by sunbathing at any of our three fresh water swimming pools. The hotel's culinary options include a buffet restaurant with a wide variety of dishes, as well as themed restaurants which will satisfy your palate with the best international cuisine. The 24h All Inclusive system at the Hotel Riu Cancun means you'll never get bored, as it offers a long list of activities to enjoy every day with your family, friends or as a couple. We provide Gym and entertainment for all ages, including the RiuLand programme for the little ones and entertainment options day and night for the adults. You can watch shows, listen to live music, enjoy water sports, and dance to excellent music in the “Pacha” club at night. "
  },
  {
    title: 'GRAND EUROPEAN TOUR',
    destination: 'Amsterdam',
    category: '0',
    url: 'https://www.vikingrivercruises.com/cruise-destinations/europe/grand-european-tour/2023-amsterdam-budapest/index.html?cid=DIS|CC|999&utm_medium=paid_display&utm_source=direct_cruisecritic_CPCMeta&dclid=CjgKEAiA-8SdBhCW7e-wsfqSkEMSJACXXgKHGcdhpdZ6LJC9JcABeO_N4XJ3Zr_dRJuVg9tBhnHvuPD_BwE',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1fNgU6qnOA0_DnQxsqLxKUzqXOWFXW36CQ&usqp=CAU',
    text: "Admire Rhine Valley vistas from a 900-year-old castle. Sample the food and wine of Austria's Wachau Valley. Learn the Viennese waltz and linger in Budapest’s Café Gerbeaud. Indulge all your senses on this 15-day journey spanning the best of Europe. Our most iconic itinerary traces the Rhine, Main and Danube Rivers between the windmill-dotted waterways of Holland and the stunning landscapes of Hungary, with engaging encounters at every bend."
  }

]
Location.deleteMany({})
  .then(() => {
    Location.create(starterLocations)
      .then((createdLocations) => {
        console.log('created Locations', createdLocations)
      })
      .catch(err => {
        console.log(err)
      })
  })
  .catch(err => {
    console.log(err)
  })
