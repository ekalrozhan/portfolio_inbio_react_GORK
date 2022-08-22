import "./portfolio.css";
import Card from "./Card";
import { portfolio_data } from "./portfolio_data";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio top" id="portfolio">
        <div className="container">
          <div className="heading text-center">
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My Porfolio</h1>
          </div>

          <div className="content grid">
            {portfolio_data.map((val, index) => {
              return (
                <Card
                  key={index}
                  image={val.image}
                  category={val.category}
                  totalLike={val.totalLike}
                  title={val.title}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
