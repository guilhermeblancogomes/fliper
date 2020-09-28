import { URL_API, ADMIN_SECRET } from "../environment/api";
import { HttpLink } from "apollo-link-http";

export const link = new HttpLink({
  uri: URL_API,
  headers: {
    "x-hasura-admin-secret": ADMIN_SECRET,
    "content-type": "application/json"
  }
});
