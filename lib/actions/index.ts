"use server"

import { scrapeAmazonProduct } from "../scrapper";

// Set up at (1:06:55): https://youtu.be/lh9XVGv6BHs?si=eObVhgh8LZ4enCMa&t=4015

export async function scrapeAndStoreProduct (productUrl: string) {
  if(!productUrl) return

  try{
    const scrapedProduct = await scrapeAmazonProduct(productUrl);
  }catch(error: any){
    throw new Error(`Failed to create/update product: ${error.message}`)
  }
}