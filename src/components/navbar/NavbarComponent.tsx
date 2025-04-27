'use client';

import React from "react";
import Link from "next/link";
import Image from 'next/image';
import logo from '../../../public/logo.svg';

import {Button, DarkThemeToggle, Navbar, NavbarBrand} from "flowbite-react";
import {useUser} from "@auth0/nextjs-auth0";

export default function NavbarComponent() {
    const { user } = useUser();

    return (
        <>
            <Navbar fluid rounded>
                <NavbarBrand as={Link} href="/">
                    <Image src={logo} width={50} height={50} alt="Flowbite React Logo" className="pr-2"/>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Meal Planner</span>
                </NavbarBrand>

                    <div className="flex md:order-2">
                        <DarkThemeToggle className="mr-4"/>
                        {user ? <Button href="/auth/logout">Log Out</Button> : null}
                    </div>
            </Navbar>

        </>
    );
};