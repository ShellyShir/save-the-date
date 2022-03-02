import { useContext } from 'react'
import classes from './DateItem.module.css'
import Card from '../ui/Card'
import FavoriteContext from '../../store/favorities-context';

function DateItem(props) {
    const favoritesCtx = useContext(FavoriteContext);

    const itemIsFavorite =  favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoritesDateHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                date: props.date,
                image: props.image,
                description: props.description
            })
        }
    }

        return (
            <li className={classes.item}>
                <Card>  
                    <div className={classes.image}>
                        <img src={props.image} alt={props.title}/>
                    </div>
                    <div className={classes.content}>
                        <h3>{props.title}</h3>
                        <h3>{props.date}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className={classes.actions}>
                        <button on onClick={toggleFavoritesDateHandler}>{ itemIsFavorite ? 'Remove Favorite' : 'To Favorite'}</button>
                    </div>
                </Card> 
            </li>
        );
};

export default DateItem;
