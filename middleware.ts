import { authMiddleware } from "@clerk/nextjs";
import { TESTING } from "./data/content";

// 同系統のURLは、authMiddlewareの外でまとめる
const sqlPath = ["/sql/:id", "/sql/stage/:id"];

export default authMiddleware({
  publicRoutes: TESTING ? ["/", "/quests", ...sqlPath, "active_record/:id", "ruby/:id"] : ["/"]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
