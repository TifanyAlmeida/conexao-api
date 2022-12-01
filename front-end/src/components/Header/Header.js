import React, {useEffect, useState} from 'react';

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import classes from './Header.module.scss';
import { Link, Outlet} from 'react-router-dom';

const Header = () =>{

    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    /*
        redimencinar as propriedades de largura e altura
        useEffect - algo que será feito após a renderização 
    */

    useEffect(() => {
        const handleResize = () =>{
            setSize({
                width:window.innerWidth,
                height:window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    // screen resolution responsive quando menu estiver aberto
    useEffect(() =>{
        if(size.width> 928 && menuOpen){
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);
    
    // arrow function que alterará o estado da função de abertura e fechamento do menu
    const menuToggleHandler = () =>{
        setMenuOpen((p) => !p);

    };
    
    return (
        <>
            <header className={classes.header}>

                <div className={classes.header__content}>
                    <Link to="/" className={classes.header__content__logo}>crazyBank</Link>

                    <nav className={`${classes.header__content__nav} ${menuOpen && size.width < 928 ? classes.isMenu : ""}`}>
                        <ul>
                            <li>
                                <span><Link to='/' onClick={menuToggleHandler}>Home</Link></span>
                            </li>

                            <li>
                                <span><Link to='/cadastro' onClick={menuToggleHandler}>Cadastro</Link></span>
                            </li>
                            <li>
                                <a href='/login' onClick={menuToggleHandler}><button>Login</button></a>
                            </li>
                        </ul>
                    </nav>

                    <div className={classes.header__content__toggle}>
                        {!menuOpen ? 
                            (<BiMenuAltRight onClick = {menuToggleHandler}/>)
                            :
                            (<AiOutlineClose onClick = {menuToggleHandler}/>)
                        }
                        
                    </div>
                    
                </div>
                
            </header>
        
            <Outlet/>
        </>
    );
};
export default Header;