import { useContext } from 'react'
import FavoritesContext from '../../../store/favorities-context';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';


function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);


    return (
        <header className={classes.header}>
            <div className={classes.logo}>Save My Date</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All My Dates</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>
                            My Favorites
                            <span>{favoritesCtx.totalFavorites}</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/add-new-date'>Add New Date</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
