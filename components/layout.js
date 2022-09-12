import Head from "next/head";
import Link from "next/link";
import classes from "../styles/layout.module.css";
import { useRouter } from "next/router";
import Image from 'next/image'
import React from "react";

export default function Layout({ children }) {
    let router = useRouter();
    let now = new Date();

    const onSelectChange = (e) => {
        const locale = e.target.value;
        router.push(router.asPath, router.asPath, {
            locale,
            scroll: false
        })
    }

    return (
        <div className={classes.wholeBlock}>
            <header className={classes.header}>
                <nav className={classes.nav}>
                    <Image src={'/dogovor.svg'} alt={'blog'} width={30} height={30} />
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                    <select name="languages" id="language-select" onChange={onSelectChange}>
                        {router.locales.map((locale, idx) => (
                            <option key={idx} value={locale}>{locale}</option>
                        ))}
                    </select>
                </nav>
            </header>

            <main className={classes.content}>{children}</main>

            <footer className={classes.footer}>
                <p style={{display: 'flex', justifyContent: 'center'}}>© {now.getFullYear()}</p>
            </footer>
        </div>
    );
}
