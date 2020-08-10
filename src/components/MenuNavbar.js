import React from 'react'
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem, FaGithub } from 'react-icons/fa';
import {Link} from 'react-scroll';
import sidebarBg from './../assets/navbg.jpg';

const MenuNavbar = ({toggled, handleToggleSidebar}) => {
    
    return ( 
        <ProSidebar image={sidebarBg} className="md" toggled={toggled} onToggle={handleToggleSidebar}>
            <div id="sideNav">
                <SidebarHeader style={{height:'auto', padding: '20px'}}>
                    <div
                        style={{
                            padding: '0 24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                        >
                            <img className="img-profile rounded-circle mx-auto mb-2" src="img/profile.png" alt="" />
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem icon={<FaGem />}>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                            >About</Link>
                        </MenuItem>
                        <MenuItem icon={<FaGem />}>
                            <Link
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                            >Experience</Link>
                        </MenuItem>
                        <MenuItem icon={<FaGem />}>
                            <Link
                                activeClass="active"
                                to="education"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                            >Education</Link>
                        </MenuItem>
                        <MenuItem icon={<FaGem />}>
                            <Link
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                            >Skills</Link>
                        </MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div className="sidebar-btn-wrapper">
                    <a
                        href="https://github.com"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span> with love</span>
                    </a>
                    </div>
                </SidebarFooter>
        
            </div>
        </ProSidebar>
        
     )
}
 
export default MenuNavbar;