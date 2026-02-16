export interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export const navItems: NavItem[] = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];
