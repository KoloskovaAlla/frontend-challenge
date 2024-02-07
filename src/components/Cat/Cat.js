import classes from './Cat.module.scss';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { ReactComponent as IconEmptyLike } from './assets/favorite_border.svg'
import { ReactComponent as IconClickedLike } from './assets/favorite.svg'
import { useFavoriteCats, useFavorite } from '../../hooks';
import { useDispatch } from 'react-redux';

export const Cat = ({ cat }) => {
  const [isCatHover, setIsCatHover] = useState(false);
  const [isLikeVisible, setIsLikeVisible] = useState(false);
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const { isFavorite, setIsFavorite } = useFavorite();
  const [isHeartHovered, setIsHeartHovered] = useState(false);

  const dispatch = useDispatch();
  const likeButtonRef = useRef(null);
  const catRef = useRef(null);
  const { favoriteCats, setFavoriteCats } = useFavoriteCats();

  // useEffect(() => {
  //   console.log(isCatHover);
  // }, []);


  const handleCatMouseEnter = () => {
    setIsCatHover(true);
    setIsLikeVisible(true);
    // catRef.current.style.transform = 'scale(1.2)';
    catRef.current.style.scale = '1.2';
    catRef.current.style.transitionProperty = 'all';
    catRef.current.style.transitionDuration = '1s';
  };

  const handleCatMouseLeave = () => {
    setIsCatHover(false);
    setIsLikeVisible(false);
    catRef.current.style.scale = '1';
    catRef.current.style.transitionProperty = 'all';
  };

  const handleLikeMouseEnter = () => {
    setIsHeartHovered(true);
  };
  const handleLikeMouseLeave = () => {
    setIsHeartHovered(false);
  };

  const addToFavoriteCats = (cat) => {
    const newFavoriteCats = [...favoriteCats, cat];
    dispatch(setFavoriteCats(newFavoriteCats));
  };

  const removeFromFavoriteCats = (catToRemove) => {
    const updatedFavoriteCats = favoriteCats.filter(cat => cat !== catToRemove);
    dispatch(setFavoriteCats(updatedFavoriteCats));
  };

  const handleLikeClick = () => {
    if (favoriteCats.includes(cat)) {
      dispatch(setIsFavorite(false));
      removeFromFavoriteCats(cat);
    }
    else {
      addToFavoriteCats(cat);
      dispatch(setIsFavorite(true));
    }
  };

  return (
    <div
      ref={catRef}
      className={classes.cat}
      onMouseEnter={handleCatMouseEnter}
      onMouseLeave={handleCatMouseLeave}
    >
      <div className={classes.image}>
        <img

          src={cat?.url && cat.url}
          alt={'здесь был кот'}
        />
      </div>
      {isCatHover && isLikeVisible && !isFavorite && (
        <IconEmptyLike
          className={classes.like}
          ref={likeButtonRef}
          onClick={handleLikeClick}
          onMouseEnter={handleLikeMouseEnter}
          onMouseLeave={handleLikeMouseLeave}
        />
      )}
      {isLikeVisible && (isFavorite || isHeartHovered) && (
        <IconClickedLike
          className={classes.like}
          // ref={likeButtonRef}
          onClick={handleLikeClick}
          onMouseEnter={handleLikeMouseEnter}
          onMouseLeave={handleLikeMouseLeave}
        />
      )}
    </div>
  );
};
