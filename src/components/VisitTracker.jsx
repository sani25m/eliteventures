import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { recordVisit } from "../api/client";

const VISIT_RECORDED_KEY = "eliteventures_visit_recorded";

export default function VisitTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;
    if (typeof sessionStorage === "undefined") return;
    if (sessionStorage.getItem(VISIT_RECORDED_KEY)) return;
    sessionStorage.setItem(VISIT_RECORDED_KEY, "1");
    recordVisit().catch(() => {});
  }, [pathname]);

  return null;
}
