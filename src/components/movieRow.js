import React from 'react';
import './movieRow.css';
import IoIosArrowBack from 'react-icons/io';

export default ({title, items}) => {
    return (
        <div className='movieRow'>
            <h2>{title}</h2>

            <div className="movieRow--left">
                <IoIosArrowBack />
            </div>

            <div className='movieRow--listArea'>
                <div className='movieRow--list'>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className='movieRow--item'>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}