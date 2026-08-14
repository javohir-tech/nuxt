import { USER_ROUTES } from "~/shared/config/routes";

export const menu = [
  { title: "user", to: USER_ROUTES.USER },
  { title: "my productes", to: USER_ROUTES.PRODUCTES },
  { title: "create product", to: USER_ROUTES.CREATE_PRODUCT },
  { title: "cart", to: USER_ROUTES.CART },
  { title: "my orders", to: USER_ROUTES.MY_ORDERS },
];
