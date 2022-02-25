import { createContext, useState} from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoritesDates) => {},
    removeFavorite: (dateId) => {},
    itemIsFavorite: (dateId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoritesHandler(favoritesDates) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoritesDates);
        });
    }

    function removeFavoriteHandler(dateId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(date => date.id !== dateId);
        });

    }
    function itemIsFavoriteHandler(dateId) {
        return userFavorites.some(date => date.id  === dateId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return(
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;