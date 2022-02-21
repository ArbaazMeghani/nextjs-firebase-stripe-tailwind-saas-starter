import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/firebase-config";
import { uiConfig } from "../firebase/firebaseui-config";

interface Props {
  redirect?: string;
}

export const Auth = ({ redirect = "/" }: Props) => {
  return (
    <div className="border-2 rounded-xl p-4 shadow-lg flex flex-col items-center justify-center">
      <h1 className="text-lg">Login</h1>
      <StyledFirebaseAuth
        uiConfig={{ ...uiConfig, signInSuccessUrl: redirect }}
        firebaseAuth={firebase.auth()}
      />
    </div>
  );
};
