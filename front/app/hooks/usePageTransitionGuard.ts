import { useEffect } from "react";

export const usePageTransitionGuard = () => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.target instanceof Element &&
        event.target.closest('a:not([target="_blank"]')
      ) {
        if (
          !window.confirm(
            "解答状況は保存されません、画面を切り替えていいですか？"
          )
        ) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
    };

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      return (event.returnValue = "");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("click", handleClick, true);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("click", handleClick, true);
    };
  }, []);
};
