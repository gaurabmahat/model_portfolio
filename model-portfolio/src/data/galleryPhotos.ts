const CLOUDINARY_USER_NAME = "ffezyytu";

/**
    Example fetch from https://res.cloudinary.com/${CLOUDINARY_USER_NAME}/image/list/gallery.json:-
    {
        resources: [
            {
                asset_id: '281a3b9fc5162199022340776c71abd1',
                public_id: '20260817_170109000_iOS',
                version: 1787388196,
                format: 'jpg',
                width: 3808,
                height: 5711,
                type: 'upload',
                created_at: '2026-08-22T08:43:16Z',
                asset_folder: 'GalleryPage'
            },
            {
                asset_id: 'ce6028b82a1d3ffe252ba2dc0f07db1d',
                public_id: '20260817_165940000_iOS',
                version: 1787388196,
                format: 'jpg',
                width: 3807,
                height: 5712,
                type: 'upload',
                created_at: '2026-08-22T08:43:16Z',
                asset_folder: 'GalleryPage'
            },
        ]
    }
**/

export interface GalleryPhoto {
    id: string;
    url: string;
    alt: string;
}

interface CloudinaryResource {
    public_id: string;
    format: string;
}

export async function fetchGalleryPhotos(): Promise<GalleryPhoto[]> {
    const res = await fetch (
        `https://res.cloudinary.com/${CLOUDINARY_USER_NAME}/image/list/gallery.json`
    );

    if(!res.ok) {
        throw new Error("Failed to fetch gallery photos.");
    }

    const data = await res.json();
    const resources: CloudinaryResource[] = data.resources;

    return resources.map((resource) => ({
        id: resource.public_id,
        url: `https://res.cloudinary.com/${CLOUDINARY_USER_NAME}/image/upload/${resource.public_id}.${resource.format}`,
        alt: "Ganga Gallery Photo",
    }));
}
