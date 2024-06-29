require('dotenv').config();
import { RESTDataSource } from "@apollo/datasource-rest";
import { Listing } from "../types";

export class ListingAPI extends RESTDataSource {
    baseURL = process.env.BASEURL;

    getFeaturedListings() {
        return this.get<Listing[]>("featured-listings")
    }
}