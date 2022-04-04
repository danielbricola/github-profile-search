import './styles.css';

type Props = {
    title: string;
    description: string;
}

const ResultCard = ( { title, description} : Props) => {

    return (
        <div className="result-container">
            <p className="result-title">{title}: <span className="result-description">{description}</span></p>
            {/* <p className="result-description">{description}</p> */}
        </div>
    );
}

export default ResultCard;