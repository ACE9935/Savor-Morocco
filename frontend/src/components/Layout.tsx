import { Outlet, Link } from "react-router-dom";
import Logo from "./Logo";
import { Slide, useScrollTrigger } from "@mui/material";
import { useUser } from "../context/auth-context";
import AppNavBar from "./AppNavBar";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement<unknown>;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

const Layout = ({...props}) => {

  const {user,loading}=useUser()

  return (
    <>
    <HideOnScroll {...props}>
      <AppNavBar/>
      </HideOnScroll>
      <main className="min-h-screen bg-orange-100/60 pt-32">
      <Outlet />
      </main>
    </>
  )
};

export default Layout;