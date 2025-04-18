import React from "react";
import Link from "next/link";
import Image from 'next/image';
import logo from '../../../public/logo.svg';

import {DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse} from "flowbite-react";

export default function NavbarComponent() {
    return (
        <>
            <Navbar fluid rounded>
                <NavbarBrand as={Link} href="/">
                    <Image src={logo} width={50} height={50} alt="Flowbite React Logo" className="pr-2"/>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Meal Planner</span>
                </NavbarBrand>
                <NavbarCollapse>
                    <DarkThemeToggle />
                </NavbarCollapse>
            </Navbar>

        </>
    );
};