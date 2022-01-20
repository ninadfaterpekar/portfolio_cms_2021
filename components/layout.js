import Alert from "../components/alert";
import Footer from "../components/footer";
import Header from "../components/header";
import Meta from "../components/meta";
import Container from "@mui/material/Container";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div>
        <Header />
        <Container maxWidth="md">
          <main>{children}</main>
        </Container>
        <Footer />
      </div>
    </>
  );
}
