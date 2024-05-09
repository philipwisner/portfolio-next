import Image from 'next/image';

interface SkillType {
  name: string;
  value: string;
  image: string;
  width?: number;
}
interface Props {
  heading: string;
  skills: Array<SkillType>;
}

function SkillsGroup(props: Props) {
  return (
    <>
      <h3 className="text-center">{props.heading}</h3>
      <ul className="skills-container">
        {props.skills.map((skill) => {
          return (
            <li key={skill.value} className="skill-container">
              <Image
                src={skill.image}
                alt={skill.value}
                className="img-responsive center-block"
                width={skill.width ? skill.width : 80}
                height={skill.width ? skill.width : 80}
              />
              <p>{skill.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SkillsGroup;
