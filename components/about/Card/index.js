import Image from "next/image";
import {
    FaInstagram,
    FaDiscord,
    FaGlobe,
    FaYoutube,
    FaGithub,
    FaEnvelope,
} from "react-icons/fa";


export default function Card({ image, content, contact }) {
    return (
        <div className="relative flex flex-col items-center p-8 transition duration-500 ease-in-out transform rounded-lg shadow-md bg-base-300 hover:scale-105 max-w-[600px]">
            <Image
                src={image.src}
                alt={image.alt}
                width={image.width || 128}
                height={image.height || 128}
                className="object-cover w-32 h-32 mb-4 rounded-full select-none"
                draggable="false"
            />
            <h2 className="mb-4 text-2xl font-bold text-base-500">
                {content.name}
            </h2>
            <p className="mb-16 text-lg text-base-500">
                {content.text}
            </p>
            <div className="absolute bottom-0 flex flex-wrap items-center mb-8 text-center gap-5">
                {contact.website ? (
                    <a
                        className="hover:cursor-pointer"
                        href={contact.website}
                        target={"__blank"}
                    >
                        <FaGlobe className="text-3xl text-base-500" />
                    </a>
                ) : (
                    <></>
                )}
                {contact.mail ? (
                    <a
                        className="hover:cursor-pointer"
                        href={contact.mail}
                        target={"__blank"}
                    >
                        <FaEnvelope className="text-3xl text-base-500" />
                    </a>
                ) : (
                    <></>
                )}
                {contact.github ? (
                    <a
                        className="hover:cursor-pointer"
                        href={contact.github}
                        target={"__blank"}
                    >
                        <FaGithub className="text-3xl text-base-500" />
                    </a>
                ) : (
                    <></>
                )}
                {contact.instagram ? (
                    <a
                        className="hover:cursor-pointer"
                        href={contact.instagram}
                        target={"__blank"}
                    >
                        <FaInstagram className="text-3xl text-base-500" />
                    </a>
                ) : (
                    <></>
                )}
                {contact.discord ? (
                    <a
                        className="hover:cursor-pointer"
                        href={contact.discord}
                        target={"__blank"}
                    >
                        <FaDiscord className="text-3xl text-base-500" />
                    </a>
                ) : (
                    <></>
                )}
                {contact.youtube ? (
                    <a
                        className="hover:cursor-pointer"
                        href={contact.youtube}
                        target={"__blank"}
                    >
                        <FaYoutube className="text-3xl text-base-500" />
                    </a>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}