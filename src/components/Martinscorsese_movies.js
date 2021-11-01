import './Martinscorsese_movies.css';

function MartinScorsese({ name, pic, summary, rating, year }) {

    return (
        <div className="movies-list">
            <img className="movie-poster" src={pic} alt="poster"/>
            <div className="movie-content">
                <h2 className="movie-name">{name} - <small>({year})</small></h2>
                <p className="movie-summary">{summary}</p>
                <strong className="movie-rating">{rating}</strong>
            </div>
        </div>
    )
}

export default MartinScorsese;