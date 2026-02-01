
import { Project, SkillCategory, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'iot-ac-control',
    title: 'IoT Central AC Control System for Pottery Storage',
    date: 'Aug 2025',
    tech: ['Python', 'Raspberry Pi', 'Flask', 'HTML'],
    description: [
      'Developed an IoT-based secondary control loop to regulate smart central AC units in unmonitored zones like basements.',
      'Integrated HVAC sensors with a Raspberry Pi to automate temperature adjustments, maintaining ±1°C stability.',
      'Built an interactive Flask-based web dashboard with real-time data visualization and system controls.'
    ]
  },
  {
    id: 'neck-rest',
    title: 'Orientation Sensor-Activated Neck Rest',
    date: 'May 2025',
    tech: ['Raspberry Pi', 'Python', '3D printing', 'Solid-modelling'],
    description: [
      'Led a 4-member team to design and code 3D-printed sensor-activated head supports integrated in a neck pillow.',
      'Spearheaded configuration of Raspberry Pi-powered orientation sensors, improving safety metrics by 25%.',
      'Collaborated with the modeling team to integrate electrical components and modeled a 3D-printed safety chamber.'
    ]
  }
];

// Added EXPERIENCES to fix missing member error in Experience.tsx
export const EXPERIENCES: Experience[] = [
  {
    id: 'mcmaster-university',
    role: 'Electrical & Biomedical Engineering Student',
    company: 'McMaster University',
    date: 'Sept 2024 - Present',
    points: [
      'Maintaining a 3.96 GPA while specializing in integrated systems and medical technology applications.',
      'Spearheading IoT and robotics projects within the engineering lab environment.',
      'Collaborating with multi-disciplinary teams to bridge theory and practical implementation.'
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Software',
    items: ['GitHub', 'C/C++', 'HTML/CSS', 'Python', 'Javascript', 'MATLAB', 'Assembly', 'Verilog', 'Java', 'SQL']
  },
  {
    category: 'Engineering & Hardware',
    items: ['CAD', 'Autodesk Inventor', 'AutoCAD', 'Sketch Up', 'Raspberry Pi', 'PCB Theory', 'Microcontrollers', 'Soldering', 'PSpice']
  },
  {
    category: 'Interests',
    items: ['Weightlifting', 'Guitar & Oud', 'Hackathons', 'Soccer', 'Antique Collecting', 'Pottery']
  }
];
