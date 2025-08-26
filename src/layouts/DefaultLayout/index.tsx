import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { ScrollToTop } from "../../components/ScrollToTop";

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <ScrollToTop />
    </div>
  );
}
