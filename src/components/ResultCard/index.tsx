import './styles.css';

type Props = {
  title: string;
  description: string;
  link: boolean;
};

const ResultCard = ({ title, description, link }: Props) => {
  if (link === true) {
    return (
      <div className="result-container">
        <p className="result-title">
          {title}: <a href=''>{description}</a> {link}
        </p>
      </div>
    );
  } else {
    return (
      <div className="result-container">
        <p className="result-title">
          {title}: <span className="result-description">{description}</span>
        </p>
      </div>
    );
  }
};

export default ResultCard;
