import type { Metadata } from 'next';
import Header from '@/components/Header';
import SkillsGroup from '@/components/SkillsGroup';
import { skills } from '@/data/skills';

export const metadata: Metadata = {
  title: 'Philip Wisner - Skills',
};

export default function Skills() {
  return (
    <div className="container">
      <Header name="Skills" />
      <SkillsGroup heading={'Fundamentals'} skills={skills?.fundamentals} />
      <SkillsGroup
        heading={'CSS Frameworks, Libraries & Syntax'}
        skills={skills?.frameworks}
      />
      <SkillsGroup
        heading={'Web Design & Photography'}
        skills={skills?.design}
      />
      <SkillsGroup
        heading={'Hosting & Cloud Computing'}
        skills={skills?.hosting}
      />
      <SkillsGroup heading={'Learning'} skills={skills?.learning} />
      <SkillsGroup heading={'Want to Learn'} skills={skills?.learn} />
      <SkillsGroup heading={'Foreign Languages'} skills={skills?.languages} />
    </div>
  );
}
