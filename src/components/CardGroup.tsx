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
      {/* <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 ">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </a> */}

      <h3>{props.heading}</h3>
      <ul className="cards-container">
        {props.cards.map((card) => {
          return (
            <li key={card.value} className="card group">
              <a
                href={card.link}
                className="card-image h-full group-hover:h-auto"
                target="_blank"
              >
                <Image
                  className="card-img-top img-responsive"
                  src={card.image}
                  alt={card.value}
                  width={200}
                  height={200}
                />
              </a>
              <div className="bg-gray-50 p-4 text-center w-full hidden group-hover:block">
                <a
                  href={card.link}
                  target="_blank"
                  className="font-bold text-xl text-gray-900"
                >
                  {card.name}
                </a>
                <p className="text-base mt-2">{card.description}</p>
              </div>
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
