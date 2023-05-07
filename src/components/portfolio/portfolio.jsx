import React from "react";
import "./portfolio.css";
import IMAGE1 from "../../assets/Fitness-Pro.PNG";
import IMAGE2 from "../../assets/Gofa-Lik.PNG";
import IMAGE3 from "../../assets/igs.PNG";
import IMAGE4 from "../../assets/TodoListPortfolio.png";
import IMAGE5 from "../../assets/Showcase.png";

const data = [
  {
    id: 1,
    image: IMAGE1,
    title: "Fitness Pro | Coaching Programmes & Supplements Store",
    github: "https://github.com/AyadZakaria/FitnessPro",
    demo: "https://dribbble.com/shots/18839250-Fitness-Coaching-Supplements-Store?added_first_shot=true",
  },

  {
    id: 2,
    image: IMAGE2,
    title:
      "Gofa Lik | Digital Grocery Store With Delivery & Complete Payment System",
    github: "https://github.com/AyadZakaria/GofaLik",
    demo: "https://dribbble.com/shots/18839266-Gofa-Lik-Digital-Grocery-Store",
  },

  {
    id: 3,
    image: IMAGE3,
    title: "IGS | Ista Great Steps School Clubs Blog & Meetings Schedule",
    github: "https://github.com/AyadZakaria/igs",
    demo: "https://dribbble.com/shots/18839425-School-Clubs-Blog-meetings-schedule",
  },
  {
    id: 4,
    image: IMAGE4,
    title: "TaskMaster | Simple Laravel Todo List",
    github: "https://github.com/AyadZakaria/LaravelTodoList",
    demo: "https://dribbble.com/shots/20565399-TaskMaster-Simple-TodoList-App-Nice-And-Clean-Designe",
  },
  {
    id: 5,
    image: IMAGE5,
    title:
      "ShowCaseIT |Simple And Beautiful Landing Page for describing and show casing Your Mobile apps,",
    github: "https://github.com/AyadZakaria/Apps-Show-Case",
    demo: "https://dribbble.com/shots/21394165-Apps-Show-Case",
  },
];
const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work </h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title} </h3>
              <div className="portfolio__item-cta">
                <a href={github} target="_blank" className="btn">
                  {" "}
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  {" "}
                  Live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
