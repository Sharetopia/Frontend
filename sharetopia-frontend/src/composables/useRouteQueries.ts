import {LocationQuery} from "vue-router";
import {SearchModel} from "@/model/SearchModel";

export function useRouteQueries(locationQuery: LocationQuery) {
    const id = locationQuery["id"];
    const query = locationQuery["query"];
    const postalCode = locationQuery["postalCode"];
    const radius = locationQuery["radius"];
    const start = locationQuery["start"];
    const end = locationQuery["end"];

    let productId: string | undefined = undefined;
    if (typeof id === "string") {
        productId = id;
    }

    let searchModel: SearchModel | undefined = undefined;
    if (
        typeof query === "string" &&
        typeof postalCode === "string" &&
        typeof radius === "string" &&
        typeof start === "string" &&
        typeof end === "string"
    ) {
        searchModel = {
            postalCode: postalCode,
            query: query,
            radius: Number(radius),
            timeRange: {
                start: new Date(start),
                end: new Date(end),
            },
        };
    }
    return {
        productId,
        searchModel,
    };
}