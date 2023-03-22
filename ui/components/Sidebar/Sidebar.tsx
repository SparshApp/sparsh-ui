import { useState } from "react";
import styled from "styled-components";
import Socials from "../Socials/Socials";

interface SidebarProps {
  isOpen: boolean;
}

const SidebarContainer = styled.div<SidebarProps>`
  position: fixed;
  top: 0;
  margin-left: 0;
  width: ${(props) => (props.isOpen ? "30rem" : "10rem")};
  height: 100%;
  background-color: eggshell;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  z-index: 100;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  width: 100%;
  background-color: white;
  border: 1px solid black;
  color: black;
`;

const SidebarToggle = styled.button`
  border: none;
  background-color: white;
  color: black;
  cursor: pointer;
  font-size: 1.5rem;
`;

const SidebarMenu = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SidebarMenuItem = styled.li`
  width: 100%;
`;

const SidebarMenuLink = styled.a<SidebarProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isOpen ? "flex-start" : "center")};
  height: 4rem;
  width: ${(props) => (props.isOpen ? "100%" : "6rem")};
  color: black;
  font-size: ${(props) => (props.isOpen ? "1rem" : "0")};
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    background-color: orange;
    color: #f4f4f4;
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarHeader>
        <SidebarToggle onClick={toggleSidebar}>
          {isOpen ? "×" : "☰"}
        </SidebarToggle>
      </SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuLink href="#" isOpen={isOpen}>
            Home
          </SidebarMenuLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuLink href="#" isOpen={isOpen}>
            Services
          </SidebarMenuLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuLink href="#" isOpen={isOpen}>
            Contact
          </SidebarMenuLink>
        </SidebarMenuItem>
      </SidebarMenu>
      <Socials />
    </SidebarContainer>
  );
};

export default Sidebar;
