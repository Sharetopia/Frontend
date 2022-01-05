import { Router } from "vue-router";
import { SearchModel } from "@/model/SearchModel";

export function useRoutes(router: Router) {
  const pushHomeRoute = () => {
    router.push({
      path: "/",
    });
  };

  const pushSearchRoute = (searchModel: SearchModel) => {
    console.log("wir pushen search", searchModel);
    router.push({
      path: "/search",
      query: {
        query: searchModel.query,
        radius: searchModel.radius,
        postalCode: searchModel.postalCode,
        start: searchModel.timeRange.start?.toDateString(),
        end: searchModel.timeRange.end?.toDateString(),
      },
    });
  };

  const pushProductDetail = (id: string) => {
    router.push({
      path: "/productDetail",
      query: {
        id: id,
      },
    });
  };

  const pushMyAdvertsRoute = () => {
    router.push({
      path: "/my/adverts",
    });
  };

  const pushLoginRoute = () => {
    router.push({
      path: "/login",
    });
  };

  const pushMyBookingsRoute = () => {
    router.push({
      path: "/my/bookings",
    });
  };

  return {
    pushHomeRoute,
    pushProductDetail,
    pushMyAdvertsRoute,
    pushLoginRoute,
    pushMyBookingsRoute,
    pushSearchRoute,
  };
}
