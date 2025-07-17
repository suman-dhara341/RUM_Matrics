import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/Store.ts";
import App from "./App.tsx";
import { AwsRum } from "aws-rum-web";

const config: AwsRumConfig = {
  sessionSampleRate: 1,
  identityPoolId: "us-east-1:fa34c40d-fe0a-40dc-bfc8-e041cfce03a8",
  endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
  telemetries: ["performance", "errors", "http"],
  allowCookies: true,
  enableXRay: true,
  signing: true,
  APPLICATION_ID: "181c4d9c-839e-4e8b-9e44-3085430f298b",
  APPLICATION_VERSION: "1.0.0",
  APPLICATION_REGION: "us-east-1",
};

try {
  new AwsRum(
    config.APPLICATION_ID,
    config.APPLICATION_REGION,
    config.identityPoolId,
    config
  );
} catch (error) {
  console.warn("Error initializing RUM:", error);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
