import React from 'react';
import type { IconType } from 'react-icons';
import {
  FaPython, FaJava, FaDatabase, FaReact, FaLinux, FaChartBar,
  FaUsers, FaGraduationCap, FaProjectDiagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaGithub, FaExternalLinkAlt, FaChevronRight
} from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiPowers, SiNumpy } from 'react-icons/si';
import { MdWork, MdSchool } from 'react-icons/md';

const iconMap: Record<string, IconType> = {
  // Technologies
  python: FaPython,
  java: FaJava,
  sql: FaDatabase,
  react: FaReact,
  tailwind: SiTailwindcss,
  linux: FaLinux,
  framer: SiFramer,
  powerbi: SiPowers,
  numpy: SiNumpy,
  // Catégories
  graduation: FaGraduationCap,
  work: MdWork,
  school: MdSchool,
  project: FaProjectDiagram,
  chart: FaChartBar,
  users: FaUsers,
  // Contact
  linkedin: FaLinkedin,
  email: FaEnvelope,
  phone: FaPhone,
  location: FaMapMarkerAlt,
  github: FaGithub,
  external: FaExternalLinkAlt,
  chevronRight: FaChevronRight,
};

export interface IconProps {
  name: keyof typeof iconMap;
  size?: number;
  className?: string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 20, className = '', color }) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const style = color ? { color } : {};

  return (
    <IconComponent 
      size={size} 
      className={className} 
      style={style}
      aria-label={name}
    />
  );
};

export default Icon;