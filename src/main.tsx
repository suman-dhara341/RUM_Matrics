// main.tsx or index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AwsRum, AwsRumConfig } from "aws-rum-web";
import { Provider } from "react-redux";
import store from "./store/Store.ts";

// ✅ Export awsRum instance to use in other files
export let awsRum: AwsRum;

try {
  const config: AwsRumConfig = {
    sessionSampleRate: 1,
    endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
    telemetries: ["performance", "errors", "http"],
    allowCookies: true,
    enableXRay: false,
    signing: false,
    sessionEventLimit: 1000,
  };

  const APPLICATION_ID: string = "59b807bf-2365-42ee-9205-22339f86211e";
  const APPLICATION_VERSION: string = "1.0.0";
  const APPLICATION_REGION: string = "us-east-1";

  awsRum = new AwsRum(
    APPLICATION_ID,
    APPLICATION_VERSION,
    APPLICATION_REGION,
    config
  );
  console.log("✅ AWS RUM initialized");
} catch (error) {
  console.error("❌ Failed to initialize AWS RUM:", error);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
