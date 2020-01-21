import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>

            <Navbar color="light" light expand="md" nav-fill >
                <NavbarBrand href="/">致勝先師</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>

                            <NavLink href={`/secondpage/`}>關於我們</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                排課規劃
              </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    瀏覽課表
                </DropdownItem>
                                <DropdownItem>
                                    編輯課表
                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown><UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                學生資訊
              </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    新增
                </DropdownItem>
                                <DropdownItem>
                                    修改
                </DropdownItem>
                                <DropdownItem>
                                    刪除
                </DropdownItem>
                                <DropdownItem>
                                    查詢
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
                                    新增
                </DropdownItem>
                                <DropdownItem>
                                    修改
                </DropdownItem>
                                <DropdownItem>
                                    刪除
                </DropdownItem>
                                <DropdownItem>
                                    查詢
                </DropdownItem>
                                <DropdownItem>
                                    排班
                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>

                </Collapse>
            </Navbar>

        </div>
    );
}

export default Example;