import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,

} from 'reactstrap';
import { AiOutlineCalendar } from 'react-icons/ai';
import { IconContext } from "react-icons";

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
                <Navbar color="inherit" light expand="md" nav-fill >

                    <NavbarBrand href="/">  <AiOutlineCalendar size="1em"></AiOutlineCalendar>致勝先師</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    排課規劃
              </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink href="/calendar">
                                            瀏覽課表
      </NavLink>

                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="/calendar">
                                            編輯課表</NavLink>
                                    </DropdownItem>

                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    學生資訊
              </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink href="/student">
                                            新增</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="/student">
                                            修改</NavLink>
                                    </DropdownItem>
                                    <DropdownItem><NavLink href="/student">
                                        刪除</NavLink>
                                    </DropdownItem>
                                    <DropdownItem><NavLink href="/student">
                                        查詢</NavLink>
                                    </DropdownItem>

                                </DropdownMenu>
                            </UncontrolledDropdown><UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    學生報表
              </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        每月授課計畫表
                </DropdownItem>
                                    <DropdownItem>
                                        每月類別堂數表
                </DropdownItem>
                                    <DropdownItem>
                                        每月科別堂數表
                </DropdownItem>
                                    <DropdownItem>
                                        每月星期堂數表
                </DropdownItem>
                                    <DropdownItem>
                                        每月個別學生堂數表
                </DropdownItem>

                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    教師資訊
              </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink href="/teacher">新增</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="/teacher">修改</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="/teacher">刪除</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="/teacher">查詢</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="/teacher">排班</NavLink>
                                    </DropdownItem>

                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>

                    </Collapse>
                </Navbar>
            </IconContext.Provider>


        </>
    );
}

export default NavBar