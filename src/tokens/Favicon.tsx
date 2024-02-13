import { useAsync } from 'react-unique-hooks';
import favicon from '../utils/favicon';

export type FaviconProps = {
    size: string | number;
    url: string;
    src?: string;
}
function Favicon({ size = 16, src, url }: FaviconProps) {

    const [icon] = useAsync(() => src ? Promise.resolve(src) : favicon(url), [url]);
    return (
        <span className="w-8 aspect-square placeholder" style={{ width: size, minWidth: size, backgroundImage: icon && `url(${icon})` }} />
    )
}

export default Favicon
