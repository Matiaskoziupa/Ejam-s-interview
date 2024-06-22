import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Steps from "./components/Steps";
import Body from "./components/Body";

function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto sm:min-w-[380px] px-4 md:px-14 bg-body text-main">
        <section className="container py-4 text-main flex items-center justify-between">
          <img className="lg:w-32" src="/images/logo-image.png" width={100} height={50} alt="clarifion logo" />
          <div className="flex justify-center items-center gap-2">
            <img className="lg:w-28" src="/images/mcafee-logo.png" width={80} height={80} alt="macfee logo" />
            <img className="lg:w-28" src="/images/norton-logo.png" width={50} height={50} alt="norton logo" />
          </div>
        </section>
        <section className="text-wrap py-4 space-y-2">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-normal text-center">Wait! Your Order In Progress.</h1>
          <p className="text-sm md:text-base xl:text-2xl text-center text-zinc-500">Lorem Ipsum Dolor Sit Amet, Consectetur Adipscing</p>
        </section>
        <Steps />
        <Body />
      </main>
      <Footer />
    </>
  );
}

export default App;

