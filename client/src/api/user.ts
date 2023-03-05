import { get, post } from "../utils";

class UserApi {
  static hasAdmin<T>() {
    return get<T>("/api/user/has_admin");
  }

  static createAdmin<T>(data: unknown) {
    return post<T>("/api/user/create_admin", data);
  }

  static login<T>(data: unknown) {
    return post<T>("/api/user/login", data);
  }
}
export default UserApi;
