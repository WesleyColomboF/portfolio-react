import angularImage from "../../assets/angular.png";
import vueImage from "../../assets/vue.png";
import jsImage from "../../assets/js.png";
import cssImage from "../../assets/css.png";
import htmlImage from "../../assets/html.png";
import reactSvg from "../../assets/react.svg";
import javaImage from "../../assets/java.png";
import nodeImage from "../../assets/node.png";

import { ISkillSection } from "./SkillSection";

export const backendAbilities: ISkillSection[] = [
  {
    name: "Node",
    image: nodeImage,
    percent: 75,
    text: "Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.",
  },
];

export const basicAbilities: ISkillSection[] = [
  {
    name: "HTML",
    image: htmlImage,
    percent: 95,
    text: "Lorem  Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.",
  },
  {
    name: "CSS",
    image: cssImage,
    percent: 93,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.",
  },
  {
    name: "JS",
    image: jsImage,
    percent: 95,
    text: "Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.",
  },
];

export const abilities: ISkillSection[] = [
  {
    name: "React",
    image: reactSvg,
    percent: 90,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.",
  },
  {
    name: "Angular",
    image: angularImage,
    percent: 60,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.",
  },
  {
    name: "Vue",
    image: vueImage,
    percent: 70,
    text: "Lorem, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.",
  },
];
