export default function Card({ title, content }) {
    return (
        <div className="card w-[375px] bg-neutral shadow-xl max-[600px]:w-[80vw] transition duration-500 ease-in-out transform hover:scale-110">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
}