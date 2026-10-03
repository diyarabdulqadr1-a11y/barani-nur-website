import { useRef, useState, type ImgHTMLAttributes } from "react";
import { useImage, useImages, fileToDataUrl, type ImageKey } from "../hooks/useImages";

interface Props extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  imageKey: ImageKey;
  src?: string; // ئەگەر دانرا، فۆڵبەک دەبێت
}

export default function EditableImage({ imageKey, alt, className, style, src: fallback, ...rest }: Props) {
  const url = useImage(imageKey);
  const { editMode, setImage, resetImage } = useImages();
  const [hover, setHover] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const pickFile = () => inputRef.current?.click();
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 3 * 1024 * 1024) {
      alert("قەبارەی وێنە لە ٣ مێگابایت زیاترە! تکایە وێنەیەکی بچوکتر هەڵبژێرە.");
      return;
    }
    try {
      const data = await fileToDataUrl(f);
      setImage(imageKey, data);
    } catch {
      alert("هەڵە لە خوێندنەوەی فایلەکە.");
    }
  };

  if (!editMode) {
    return <img src={url || fallback} alt={alt} className={className} style={style} {...rest} />;
  }

  return (
    <div
      className={`relative inline-block ${className?.includes("h-full") ? "h-full" : ""} ${className?.includes("w-full") ? "w-full" : ""}`}
      style={{ width: style?.width, height: style?.height }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={url || fallback} alt={alt} className={className} style={style} {...rest} />

      {/* edit overlay */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-[inherit] bg-black/70 backdrop-blur-sm transition-opacity ${
          hover ? "opacity-100" : "opacity-90"
        }`}
        style={{ borderRadius: "inherit" }}
      >
        <button
          type="button"
          onClick={pickFile}
          className="rounded-full bg-gradient-to-l from-gold to-gold-soft px-4 py-2 text-xs font-semibold text-ink shadow-lg hover:brightness-110"
        >
          ✎ گۆڕینی وێنە
        </button>
        <button
          type="button"
          onClick={() => resetImage(imageKey)}
          className="rounded-full border border-gold/50 px-3 py-1 text-[11px] text-cream hover:bg-gold/15"
        >
          ↺ گەڕانەوەی بنەڕەتی
        </button>
      </div>
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={onChange} />
    </div>
  );
}
