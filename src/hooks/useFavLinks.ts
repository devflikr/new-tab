import { sync_favorite_links } from '../config';
import { FavoriteLink } from '../types/favorites';
import useStorage from './useStorage';

function useFavLinks(): [list: FavoriteLink[], push: (element: FavoriteLink) => void] {

    const [[lastId, list], update] = useStorage<FavoriteLink[]>(sync_favorite_links, [0, []]);

    const pushWithId = (fav: FavoriteLink) => {
        update([...list, { ...fav, id: lastId }]);
    }

    return [list, pushWithId];
}

export default useFavLinks;
