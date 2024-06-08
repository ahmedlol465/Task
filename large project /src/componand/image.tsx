interface IProps {
    alt: string;
    imageUrl: string;
    className: string;
}

const Image = ({alt, imageUrl, className}: IProps) => {
    return (
        <img src={imageUrl} alt={alt} className={className}></img>
    )
}


export default Image;