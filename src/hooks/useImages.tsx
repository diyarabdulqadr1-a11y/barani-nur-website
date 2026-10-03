import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

/* سیستەمی بەڕێوەبردنی وێنەکان */

export type ImageKey = "logo" | "hero" | "nursi" | "nursiHero";

export interface ImageMeta {
  key: ImageKey;
  label: string;
  description: string;
  default: string;
  recommended: string;
}

const DRIVE_IMAGE = (id: string, size = 1200) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;

export const PROJECT_LOGO_URL = "/images/logo.png";
export const NURSI_IMAGE_URL = "/images/mamosta.png";

export const IMAGE_REGISTRY: Record<ImageKey, ImageMeta> = {
  logo: {
    key: "logo",
    label: "لۆگۆی بارانی نوور",
    description: "لۆگۆی سەرەکیی پلاتفۆڕم لە سەرناونووسە و Footer-دا بەکاردێت.",
    default: PROJECT_LOGO_URL,
    recommended: "PNG چوارگۆشە، باشترە ٥١٢×٥١٢ پیکسێل.",
  },
  hero: {
    key: "hero",
    label: "وێنەی پاشبنەمای لاپەڕەی سەرەکی",
    description: "وێنەی پاشبنەمای بەشی Hero لە سەرەتای پلاتفۆڕمدا.",
    default: "/images/hero.jpg",
    recommended: "وێنەی لاندسکەیپ، باشترە ١٩٢٠×١٠٨٠ پیکسێل.",
  },
  nursi: {
    key: "nursi",
    label: "وێنەی م. سەعیدی نوورسی (بازنە)",
    description: "وێنەی پۆرترەی نوورسی کە لە لاپەڕەی «مامۆستا نوورسی»دا بەکاردێت.",
    default: NURSI_IMAGE_URL,
    recommended: "وێنەی پۆرترەی چوارگۆشە، باشترە ٨٠٠×٨٠٠ پیکسێل.",
  },
  nursiHero: {
    key: "nursiHero",
    label: "وێنەی پاشبنەمای نوورسی",
    description: "وێنەی پاشبنەمای hero لە لاپەڕەی نوورسیدا.",
    default: NURSI_IMAGE_URL,
    recommended: "هەمان وێنەی پۆرترە یان لاندسکەیپ ڕێزدار.",
  },
};

interface ImagesContextType {
  images: Record<ImageKey, string>;
  setImage: (key: ImageKey, value: string) => void;
  resetImage: (key: ImageKey) => void;
  resetAll: () => void;
  editMode: boolean;
  setEditMode: (v: boolean) => void;
}

const ImagesCtx = createContext<ImagesContextType | null>(null);
const STORAGE_KEY = "bn_images_v2";

export function ImagesProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<Record<ImageKey, string>>(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      const init = {} as Record<ImageKey, string>;
      (Object.keys(IMAGE_REGISTRY) as ImageKey[]).forEach((k) => {
        init[k] = saved[k] || IMAGE_REGISTRY[k].default;
      });
      return init;
    } catch {
      const init = {} as Record<ImageKey, string>;
      (Object.keys(IMAGE_REGISTRY) as ImageKey[]).forEach((k) => {
        init[k] = IMAGE_REGISTRY[k].default;
      });
      return init;
    }
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
    } catch {}
  }, [images]);

  const setImage = useCallback((key: ImageKey, value: string) => {
    setImages((s) => ({ ...s, [key]: value }));
  }, []);
  const resetImage = useCallback((key: ImageKey) => {
    setImages((s) => ({ ...s, [key]: IMAGE_REGISTRY[key].default }));
  }, []);
  const resetAll = useCallback(() => {
    const init = {} as Record<ImageKey, string>;
    (Object.keys(IMAGE_REGISTRY) as ImageKey[]).forEach((k) => {
      init[k] = IMAGE_REGISTRY[k].default;
    });
    setImages(init);
  }, []);

  return (
    <ImagesCtx.Provider value={{ images, setImage, resetImage, resetAll, editMode, setEditMode }}>
      {children}
    </ImagesCtx.Provider>
  );
}

export function useImages() {
  const ctx = useContext(ImagesCtx);
  if (!ctx) throw new Error("useImages must be used within ImagesProvider");
  return ctx;
}

/* بەکارهێنانی ساکارتر: گرتنی یەک وێنە بەو کلیلە */
export function useImage(key: ImageKey): string {
  const { images } = useImages();
  return images[key];
}

/* فایل دەکاتە base64 string بۆ پاشەکەوتکردن لە localStorage */
export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result as string);
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}
