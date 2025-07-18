import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { awsRum } from "./main"; // ✅ Import from main.tsx

export default function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    awsRum.recordEvent("page_view", {
      name: "PageView",
      attributes: {
        path: location.pathname,
        timestamp: new Date().toISOString(),
      },
    });
  }, [location]);

  return null;
}
