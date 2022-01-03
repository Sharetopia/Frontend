import { Router } from "vue-router";
import { SearchModel } from "@/model/SearchModel";

class Routes {
  public static pushHomeRoute(router: Router): void {
    router.push({
      path: "/",
    });
  }

  public static pushSearchRoute(
    router: Router,
    searchModel: SearchModel
  ): void {
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
  }

  public static pushProductDetail(router: Router, id: string): void {
    router.push({
      path: "/productDetail",
      query: {
        id: id,
      },
    });
  }

  public static pushMyAdvertsRoute(router: Router): void {
    router.push({
      path: "/my/adverts",
    });
  }

  public static pushLoginRoute(router: Router): void {
    router.push({
      path: "/login",
    });
  }

  public static pushMyBookingsRoute(router: Router): void {
    router.push({
      path: "/my/bookings",
    });
  }
}

export { Routes };
