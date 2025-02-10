import { useMemo } from 'react';

type FavoriteButtonProps = {
  isFavorite: boolean;
  className?: string;
}

const DEFAULT_CLASS_NAME = 'place-card';

export default function FavoriteButton({isFavorite, className = DEFAULT_CLASS_NAME} : FavoriteButtonProps) {
  const accessibileText = isFavorite ? 'In bookmarks' : 'To bookmarks';
  const imgWidth = useMemo(() => className === DEFAULT_CLASS_NAME ? 18 : 31, [className]);
  const imgHeight = useMemo(() => className === DEFAULT_CLASS_NAME ? 19 : 33, [className]);

  return (
    <button className={`${className}__bookmark-button button${isFavorite ? ` ${className}__bookmark-button--active` : ''}`} type="button">
      <svg className={`${className}__bookmark-icon`} width={imgWidth} height={imgHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{accessibileText}</span>
    </button>
  );
}
