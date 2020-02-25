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

} from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SecondPage from '../secondpage';
import ThirdPage from "../thirdPage";

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Router>
                <Navbar color="light" light expand="md" nav-fill >
                    <NavbarBrand href="/">致勝先師</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/about">關於我們</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    排課規劃
              </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink className="dropdown-item" to="/about">
                                            瀏覽課表
      </NavLink>

                                    </DropdownItem>
                                    <DropdownItem>
                                        編輯課表
                </DropdownItem>

                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
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


                <Switch>
                    <Route exact path="/"></Route>
                    <Route path="/about"> <SecondPage />
                    </Route>
                    <Route path="/teacher"><ThirdPage></ThirdPage></Route>
                </Switch>
            </Router>
        </>
    );
}

export default Example;