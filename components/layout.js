import Alert from "../components/alert";
import Footer from "../components/footer";
import Header from "../components/header";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div>
        <Header />
        <div
          className="max-w-md"
          style={{ width: "min-content", margin: "0 auto" }}
        >
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
