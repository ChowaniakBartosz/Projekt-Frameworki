import { FC } from "react"

interface IImageProps {
    src: string,
    alt: string,
    title?: string,
    width?: number,
    height?: number
}

const Image: FC<IImageProps> = ({src, alt, ...props}) => {
    return (
        <img src={src} alt={alt} {...props} />
    )
}

export default Image;