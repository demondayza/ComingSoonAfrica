import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Coming Soon - Validator.africa">
    <img
      src="/images/xera.svg"
      alt="Themeptation "
      className="absolute h-96 -top-20 -right-16 lg:right-5 lg:top-10 animate-blob"
    />
    <img
      src="/images/shapes.svg"
      alt="hero"
      className="absolute w-full left-24 bottom-24 animate-blob2"
    />
    <div className="relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900">
      <div className="text-center space-y-10">
        <h3 className="font-light text-xl uppercase tracking-wider">
          Coming soon
        </h3>
        <h1 className="text-7xl lg:text-9xl font-extrabold">We’re changing the validator game</h1>
        <p className="text-xl lg:text-2xl tracking-wide mx-10 lg:max-w-xl lg:mx-auto">
        Africa.validator - The first truly African Validator service
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
