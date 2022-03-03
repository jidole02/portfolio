export type stack =
  | "React"
  | "Next JS"
  | "Context API"
  | "Recoil"
  | "Redux"
  | "Typescript"
  | "XD"
  | "Figma";

export interface props {
  title: string;
  description: string;
  tag: string[];
  stack: stack[];
  projectName: string;
}
