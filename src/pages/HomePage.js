import Hero from "../components/Hero";
import BigSlogan from "../components/BigSlogan";
import ProductInfo from "../components/ProductInfo";
import Testimonials from "../components/Testimonials";

export default function HomePage(props) {
  return (
    <>
      <div className="columns is-multiline is-gapless">
        <Hero />
        <BigSlogan />
        <ProductInfo />
        <Testimonials />
      </div>
    </>
  );
}
