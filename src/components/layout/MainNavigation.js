import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';
const MainNavigation = ()=> {
    return <header className={classes.header}>
        <div className={classes.logo}>留言板</div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink to='/guestbook/quotes' activeClassName={classes.active}>
                        全部留言
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/guestbook/new-quote' activeClassName={classes.active}>
                        新增留言
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;