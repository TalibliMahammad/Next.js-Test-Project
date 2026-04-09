import { ImageLoader } from "next/dist/client/image-component";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface image {
     src: string | StaticImport;
    alt: string;
    width?: number | `${number}`;
    height?: number | `${number}`;
    fill?: boolean;
    loader?: ImageLoader;
    quality?: number | `${number}`;
}

const photos = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/600/400?random=${i + 1}`,
  alt: `Foto${i + 1}`,
}));

export default function GalleryPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1  className="text-3xl font-bold mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div className="relative overflow-hidden rounded-lg" key={photo.id} >
            <Image src={photo.src} alt={photo.alt} width={600} height={400}
            priority={index === 0}
            sizes="(max-width:640) 100vw
            (max-width:768) 50vw, 33vw
            
            "
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
