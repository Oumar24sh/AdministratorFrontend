// https://dev.to/franciscomendes10866/secure-your-remixjs-app-a-guide-to-authentication-and-authorization-2plc
import { Authenticator, AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { sessionStorage } from "~/utils/session.server";
import { Login } from "../../api";
import { api } from "~/http";

// Create an instance of the authenticator, pass a Type, User,  with what
// strategies will return and will store in the session
const authenticator = new Authenticator<Login | Error | null>(sessionStorage, {
  sessionKey: "sessionKey", // keep in sync
  sessionErrorKey: "sessionErrorKey", // keep in sync
});
authenticator.use(
  new FormStrategy(async ({ form }) => {
    try {
      let username = form.get("username") as string;
      let password = form.get("password") as string;

      // login the user, this could be whatever process you want
      const response = await api.auth.apiAuthenticationLoginPost({
        login: {
          username,
          password,
        },
      });
      if (response.statusCode === 1) {
        return Promise.resolve(response);
      }
    } catch (error) {
      if(error.response.status === 400){
        throw new AuthorizationError(
            "Invalid credentials, please try again"
        );
      }else if(error.response.status === 500){
        throw new AuthorizationError(
            "Server error, please try again later."
        );
      }
      throw new AuthorizationError(
        "Could not log you in, please try again later."
      );
    }
  })
);

export default authenticator;

