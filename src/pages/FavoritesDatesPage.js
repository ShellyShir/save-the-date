import { useContext } from 'react';

import FavoritesContext from '../store/favorities-context';
import DateList from '../components/dates/DateList';

function FavoritesDatesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if(favoritesCtx.totalFavorites === 0) {
        content =  <p>You Got No Favoriets Yet..Feel Free To Add Some</p>
    } else {
        content = <DateList dates={favoritesCtx.favorites} />

    }

    return (
        <section>
            <h1>My Favorite Dates!</h1>
            {content}
        </section>
    );
}

export default FavoritesDatesPage;
