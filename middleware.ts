import { authMiddleware } from "@clerk/nextjs";

// 同系統のURLは、authMiddlewareの外でまとめる
const sqlPath = ["/sql/:id", "/sql/stage/:id"];

export default authMiddleware({
  publicRoutes: ["/"]
  // "/quests", ...sqlPath, "active_record/:id", "ruby/:id", ],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
