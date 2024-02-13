import axios from "axios";

const FALLBACK: string = `/assets/fallback.png`;

export type FaviconResponse = {
    hasIcon: boolean;
    icon: string;
    format: string;
}

async function favicon(url: string) {
    return new Promise<string>((resolve) => {
        try {
            const plainUrl = new URL(url);
            return resolve(`https://icon.horse/icon/${plainUrl.hostname}`);
            axios.get<FaviconResponse>(`http://www.google.com/s2/favicons?domain=${plainUrl.hostname}&sz=256?json`)
                .then(({ data }) => {
                    if (data.hasIcon) {
                        resolve(data.icon);
                    } else {
                        resolve(FALLBACK);
                    }
                })
                .catch(error => {
                    console.error(error);
                    resolve(FALLBACK);
                });
        } catch (error) {
            resolve(FALLBACK);
        }
    });


}

export default favicon


// function favicon(url: string, size: number = 32, scale: number = 1, fallback: boolean = true) {
//     try {
//         const encoded = encodeURIComponent(new URL(url).href);
//         return `chrome://favicon2/?size=${size}&scaleFactor=${scale}x&pageUrl=${encoded}&allowGoogleServerFallback=${fallback ? 1 : 0}`;
//     } catch (error) {
//         return `chrome://favicon2/?size=${size}&scaleFactor=${scale}x&pageUrl=&allowGoogleServerFallback=${fallback ? 1 : 0}`;
//     }
// }