import Image from 'next/image';

interface CardType {
  name: string;
  value: string;
  image: string;
  description: string;
  link: string;
}
interface Props {
  heading: string;
  cards: Array<CardType>;
}

function CardGroup(props: Props) {
  return (
    <>
      <h3>{props.heading}</h3>
      <ul className="cards-container">
        {props.cards.map((card) => {
          return (
            <li key={card.value} className="card-container">
              <a href={card.link} target="_blank">
                <Image
                  className="card-img-top img-responsive"
                  src={card.image}
                  alt={card.value}
                  width={200}
                  height={200}
                />
              </a>
              <a href={card.link} target="_blank">
                {card.name}
              </a>
              <p className="card-text">{card.description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
//   <div className="card">
//     <a href="https://s2igrp.com" target="_blank">
//       <Image
//         className="card-img-top img-responsive"
//         src="../images/S2i.svg"
//         alt="S2i"
//         width={100}
//         height={100}
//       />
//     </a>
//     <div className="card-body">
//       <h4 className="card-title">
//         <a href="https://s2igrp.com" target="_blank">
//           S2i Group
//         </a>
//       </h4>
//       <p className="card-text">
//         Landing page for a technical consulting company made with
//         WordPress.
//       </p>
//     </div>
//   </div>
// </div>;

export default CardGroup;
