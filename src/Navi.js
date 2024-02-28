import './Navi.css';
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';
import { FormGroup, Input, Label } from 'reactstrap';
import { FaUserCircle } from "react-icons/fa";
import Logo from './images/EXL_logo.png';

function Navigation(args) {
    const [isOpen, setIsOpen] = useState(false);
    const [btnText, setbtnText] = useState('Available');
    const [btnColor, setbtnColor] = useState('success');
    const [tswitch, setTswitch] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const change = () => {
        if (btnText === 'Available') {
            setbtnText('Unavailable');
            setbtnColor('danger');
        }
        else if (btnText === 'Unavailable') {
            setbtnText('Available');
            setbtnColor('success');
        }
    }

    return (
        <div>
            <Navbar {...args} expand="md" color="dark" dark>
                <NavbarBrand href="/">
                    <img className="ms-3 me-2" alt="logo" src={Logo} style={{ height: 20, width: 50 }} />
                    {args.title}
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="d-flex justify-content-end align-items-center ms-auto" navbar>
                        <NavItem className='d-flex flex-row align-items-center'>
                            <FormGroup switch>
                                <Input
                                    type="switch"
                                    checked={tswitch}

                                    onClick={() => {
                                        setTswitch(!tswitch);
                                    }}
                                />
                            </FormGroup>
                            <Button onClick={change} color={btnColor} size="sm">{btnText}</Button>
                        </NavItem>
                        
                        <Input size="sm ms-2" name="select" type="select" id='dropdown1'>
                            <option>Ready for calls</option>
                            <option>Busy on call</option>
                            <option>Out of office</option>
                        </Input>
                                

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret> 
                            <FaUserCircle color='white' /> Aman Gupta
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Sign Out</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;