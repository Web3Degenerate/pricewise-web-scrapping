//Import Axios and Cheerio ~(1:15:20)
import axios from 'axios';
import * as cheerio from 'cheerio';  //import everything as cheerio from cheerio


// Set up at (1:08:35): https://youtu.be/lh9XVGv6BHs?si=303L2EDVo2GMf8HN&t=4115

export async function scrapeAmazonProduct(url: string){
    if(!url) return; //if no URL, exit

    //BrightData proxy configuration to get the product data
    const username = String(process.env.BRIGHT_DATA_USERNAME)
    const password = String(process.env.BRIGHT_DATA_PASSWORD)

    // curl --proxy brd.superproxy.io:22225 --proxy-user <username>:<pw> -k "http://lumtest.com/myip.json"

    //Define port
    const port = 22225

    const session_id = (1000000 * Math.random()) | 0;
    // (1:12:42): https://youtu.be/lh9XVGv6BHs?si=a34yor7LUauFJnJv&t=4362
    const options = {
      auth: {
        username: `${username}-session-${session_id}`,
        password,
      },
      host: 'brd.superproxy.io',
      port,
      rejectUnauthorized: false,
    }


  // (1:13:50) - make call
  try{
    //fetch amazon product page
      //get resposne
      const response = await axios.get(url, options);

      console.log(response.data);

  }catch(error: any){
    throw new Error(`Failed to scrape product: ${error.message}`)
  }


}