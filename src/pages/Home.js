import { Link } from "react-router-dom";
import Subscribe from "../components/subscribe/Subscribe";

const Home = () => {
  return (
    <div className="root">
      <section id="showcase">
        <div className="container">
          <h1>Professional Web Design</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem
            interdum condimentum.
          </p>
        </div>
      </section>
      <div>
      <Link to={"/subscribe"}/>
      </div>
      
      <section id="boxes">
        <div className="container">{/* use Card component here */}</div>
      </section>
    </div>
  );
};

export default Home;
