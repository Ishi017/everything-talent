import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import Image from "next/image"; // Import Image from next/image
import mainLogo from "@/public/everything-logo.png"; // Adjust the path to your logo
import React from 'react';
import lightMode from "@/public/light-mode.png";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navMenu}>
            <NavigationMenu >
                <NavigationMenuList> 
                <div className={styles.navbar}>

                <div className={styles.navbarLogo}>
                        <NavigationMenuItem>
                            <Image
                                src={mainLogo}
                                alt="Company Logo"
                                width={230}
                                height={230}
                                className="object-contain ml-8" 
                            />
                        </NavigationMenuItem>
                </div>

                <div className={styles.menuItems}> 
                            <NavigationMenuItem>
                                <span className={styles.menuItem}>Home</span>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <span className={styles.menuItem}>About</span>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <span className={styles.menuItem}>Use Cases</span>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <span className={styles.menuItem}>Prices</span>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <span className={styles.menuItem}>Resources</span>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <span className={styles.menuItem}>Blog</span>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <span className={styles.menuItem}>Support</span>
                            </NavigationMenuItem>
                        </div>

                    <div className={styles.navbarButtons}>
                    <NavigationMenuItem>
                        <Image
                            src={lightMode}
                            alt="Light Mode"
                            width={70}
                            height={70}
                            className={styles.navbarButtonLight} 
                        />
                    </NavigationMenuItem>
                    <Button className={styles.loginButton}> 
                        <p>Login</p> <ChevronRight />
                    </Button>
                    </div>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};

export default Navbar;