import { Link, Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
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
      <Link to ="Subscribe"></Link>
      <section id="boxes">
      <div className="container"><Link to="Card"></Link></div>
      <Outlet/>
      
      </section>
    </div>
  );
};

export default Home;
