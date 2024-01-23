
const fetchLink = fetch('http://ip-api.com/json/point.md')


// fetchLink.then( data => data.json() )
//             .then( data => console.log(data) )

//       v
//       v
//       v

// the same example with async-await:

const getIpData = async () => {
    let data = await fetchLink;
    data = await data.json();
    console.log(data)
}