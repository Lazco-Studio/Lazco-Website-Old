import Image from "next/image";
import { useRouter } from "next/router";


export default function Card({ title, description, image, url }) {
    const router = useRouter();

    return (
        <div className="card w-[375px] bg-base-100 shadow-xl image-full max-[600px]:w-[80vw] transition duration-500 ease-in-out transform hover:scale-110">
            <figure>
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width || 640}
                    height={image.height || 427}
                    loading="lazy"
                />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl text-white card-title">{title}</h2>
                <p>{description}</p>
                <div className="justify-end card-actions">
                    <button
                        className="btn btn-primary"
                        onClick={() => router.push(url)}
                    >
                        立即詢問
                    </button>
                </div>
            </div>
        </div>
    );
}