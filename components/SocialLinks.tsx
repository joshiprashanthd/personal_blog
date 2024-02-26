import React from 'react'
import TwitterIcon from '../icons/TwitterIcon'
import GithubIcon from '../icons/GithubIcon'
import {ThemeToggle} from "./ThemeToggle";
import {Button} from "./ui/Button";
import Link from "next/link";

export default function SocialLinks() {
    return (
        <div className="flex gap-4">
            <Button asChild variant="icon" size="icon">
                <Link href="https://www.github.com/joshiprashanthd" target="_blank">
                    <GithubIcon className="dark:stroke-white stroke-black"/>
                </Link>
            </Button>
            <Button asChild variant="icon" size="icon">
                <Link href="https://www.github.com/joshiprashanthd"
                      target="_blank">
                    <TwitterIcon className="dark:stroke-blue-400 stroke-blue-600"/>
                </Link>
            </Button>
            <ThemeToggle/>
        </div>
    )
}
