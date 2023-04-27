import { root } from "../../api/src/config";

export function getUrl(url: string, isFrontUrl = false): string {
	if (url.startsWith("https://")) return url;
	return `${isFrontUrl ? root.FRONT_URL : root.API_URL}${url}`;
}
