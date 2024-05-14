import Image from 'next/image';

export interface SkillType {
  name: string;
  value: string;
  image: string;
  width?: number;
}

function SkillsGroup({
  heading,
  skills,
}: {
  heading: string;
  skills: SkillType[];
}) {
  return (
    <>
      <h3 className="text-center">{heading}</h3>
      <ul className="skills-container">
        {skills.map((skill) => {
          return (
            <li key={skill.value} className="skill-container">
              <Image
                src={skill.image}
                alt={skill.value}
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
