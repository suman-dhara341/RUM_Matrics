import { AwsRum, AwsRumConfig } from "aws-rum-web";

let awsRum: AwsRum | null = null;

try {
  const config: AwsRumConfig = {
    sessionSampleRate: 1,
    endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
    telemetries: ["performance", "errors", "http"],
    allowCookies: true,
    enableXRay: false,
    signing: false,
  };

  const APPLICATION_ID = "59b807bf-2365-42ee-9205-22339f86211e";
  const APPLICATION_VERSION = "1.0.0";
  const APPLICATION_REGION = "us-east-1";

  awsRum = new AwsRum(
    APPLICATION_ID,
    APPLICATION_VERSION,
    APPLICATION_REGION,
    config
  );
} catch (error) {
  console.error("Failed to initialize AWS RUM", error);
}

export default awsRum;
