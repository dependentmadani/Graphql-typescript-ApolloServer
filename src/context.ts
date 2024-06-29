import { ListingAPI } from "./datasource-rest/listing-api";

export type DataSourceContext = {
    dataSources: {
        listingAPI: ListingAPI;
    };
}