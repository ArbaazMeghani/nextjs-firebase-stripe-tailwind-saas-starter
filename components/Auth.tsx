import StyledFirebaseAuth from "./StyledFirebaseAuth";
import { auth } from "../lib/firebase";
import { uiConfig } from "../lib/firebaseui";

interface Props {
  redirect?: string;
}

export const Auth = ({ redirect = "/" }: Props) => {
  return (
    <div className="border-2 rounded-xl p-4 shadow-lg flex flex-col items-center justify-center">
      <h1 className="text-lg">Login</h1>
      <StyledFirebaseAuth
        uiConfig={{ ...uiConfig, signInSuccessUrl: redirect }}
        firebaseAuth={auth}
      />
    </div>
  );
};
