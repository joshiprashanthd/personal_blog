"use client"

import * as React from "react"
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import {useTheme} from "next-themes"
import {Button} from "./ui/Button";

export function ThemeToggle() {
    const {setTheme, theme} = useTheme()

    return (

        <Button variant="icon" size="icon"
            onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}>
            {theme == 'light' &&
                <SunIcon className="stroke-black"/>}
            {theme == 'dark' && <MoonIcon
                className="stroke-white"/>}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
