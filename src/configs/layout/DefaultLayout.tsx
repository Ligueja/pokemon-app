import { Stack } from "@mui/material";
import { Navbar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Stack spacing={2} alignItems='center'>
      <Navbar />
      {children}
      <Footer />
    </Stack>
  );
}
