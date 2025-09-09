/**
 * lib/image.ts
 * Small helper that constructs a URL for the a0 image generation endpoint.
 * The app will use these URLs as remote image placeholders for project/card previews and avatars.
 */

export function generateA0ImageUrl(prompt: string, aspect: '1:1' | '16:9' | '4:3' = '16:9', seed?: string) {
    const encode = (s: string) => encodeURIComponent(s);
    let query = `text=${encode(prompt)}&aspect=${encode(aspect)}`;
    if (seed) query += `&seed=${encode(seed)}`;
    return `https://api.a0.dev/assets/image?${query}`;
}