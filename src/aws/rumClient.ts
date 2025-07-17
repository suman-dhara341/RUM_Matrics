// src/utils/awsRumUtils.ts
import { AwsRum } from "aws-rum-web";

// Check if window.awsRum exists (only after initialization)
const rum = (window as any).awsRum as AwsRum | undefined;

/**
 * Publish a custom RUM event
 */
export const publishRUMEvent = (
  type: string,
  data: Record<string, any>
): void => {
  if (!rum) {
    console.warn("RUM not initialized or missing");
    return;
  }

  try {
    rum.recordEvent(type, {
      ...data,
      timestamp: Date.now(),
      page: window.location.pathname,
    });
  } catch (err) {
    console.error("Failed to publish RUM event:", err);
  }
};
