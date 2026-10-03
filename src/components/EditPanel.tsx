import { useRef, useState } from "react";
import { IMAGE_REGISTRY, fileToDataUrl, useImages, type ImageKey } from "../hooks/useImages";

/* پانێڵی ئەدمین — بۆ گۆڕینی هەموو وێنەکانی پلاتفۆڕم لە یەک شوێن */
export default function EditPanel() {
  const { editMode, setEditMode, images, setImage, resetImage, resetAll } = useImages();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* دوگمەی شناوی Edit Mode */}
      <button
        onClick={() => {
          setEditMode(!editMode);
          if (!editMode) setOpen(true);
        }}
        className={`fixed bottom-5 left-5 z-[60] flex h-12 items-center gap-2 rounded-full border-2 px-5 text-sm font-semibold shadow-2xl transition-all ${
          editMode
            ? "border-gold bg-gold text-ink"
            : "border-gold/40 bg-ink/90 text-cream hover:border-gold hover:bg-charcoal"
        }`}
        title="دۆخی دەستکاریکردن"
      >
        <span className="text-base">{editMode ? "✓" : "✎"}</span>
        {editMode ? "دۆخی دەستکاری چالاکە" : "گۆڕینی وێنەکان"}
      </button>

      {/* دوگمەی پانێڵ — لە سۆخی edit-دا */}
      {editMode && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 left-[230px] z-[60] flex h-12 items-center gap-2 rounded-full border-2 border-gold/40 bg-ink/90 px-4 text-sm font-semibold text-cream shadow-2xl hover:border-gold"
        >
          ⚙ پانێڵی وێنەکان
        </button>
      )}

      {/* drawer */}
      {open && editMode && (
        <div className="fixed inset-0 z-[70] flex" onClick={() => setOpen(false)}>
          <div className="flex-1 bg-black/50 backdrop-blur-sm" />
          <aside
            className="relative h-full w-full max-w-md overflow-y-auto border-l border-gold/30 bg-ink shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
          >
            <header className="sticky top-0 z-10 border-b border-gold/20 bg-ink/95 px-6 py-4 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-display text-xl font-bold text-cream">پانێڵی گۆڕینی وێنەکان</h2>
                  <p className="mt-1 text-xs text-beige/60">
                    وێنەکان لە تەنها ئەم وێبگەڕەدا (بوراوسەردا) پاشەکەوت دەکرێن.
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-cream hover:bg-gold/10"
                >
                  ✕
                </button>
              </div>
            </header>

            <div className="space-y-4 p-6">
              {(Object.keys(IMAGE_REGISTRY) as ImageKey[]).map((k) => (
                <ImageRow
                  key={k}
                  k={k}
                  url={images[k]}
                  onChange={(v) => setImage(k, v)}
                  onReset={() => resetImage(k)}
                />
              ))}

              <div className="mt-6 space-y-3 rounded-2xl border border-gold/15 bg-charcoal/50 p-5">
                <h3 className="font-display text-sm font-bold text-cream">کارگەلی گشتی</h3>
                <button
                  onClick={() => {
                    if (confirm("هەموو وێنەکان دەگەڕێنرێنەوە بۆ بنەڕەتی. دڵنیایت؟")) resetAll();
                  }}
                  className="w-full rounded-full border border-red-500/30 px-4 py-2.5 text-sm text-red-300 hover:bg-red-500/10"
                >
                  ↺ گەڕاندنەوەی هەموو وێنەکان بۆ بنەڕەتی
                </button>
                <button
                  onClick={() => {
                    setEditMode(false);
                    setOpen(false);
                  }}
                  className="w-full rounded-full bg-gradient-to-l from-gold to-gold-soft py-2.5 text-sm font-semibold text-ink hover:brightness-110"
                >
                  ✓ تەواوبوون و دەرچوون لە دۆخی دەستکاری
                </button>
              </div>

              <p className="rounded-2xl border border-gold/15 bg-charcoal/40 p-4 text-xs text-beige/60 leading-relaxed">
                💡 <strong>تێبینی:</strong> دەتوانیت ڕاستەوخۆ کلیک لەسەر هەر وێنەیەک لە پلاتفۆڕمەکە بکەیت
                (لە دۆخی دەستکاری) بۆ گۆڕینی.
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

function ImageRow({
  k,
  url,
  onChange,
  onReset,
}: {
  k: ImageKey;
  url: string;
  onChange: (v: string) => void;
  onReset: () => void;
}) {
  const meta = IMAGE_REGISTRY[k];
  const ref = useRef<HTMLInputElement>(null);

  const handle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 3 * 1024 * 1024) {
      alert("قەبارەی وێنە لە ٣ مێگابایت زیاترە!");
      return;
    }
    const data = await fileToDataUrl(f);
    onChange(data);
  };

  return (
    <div className="rounded-2xl border border-gold/15 bg-charcoal/40 p-4">
      <div className="mb-3 flex gap-3">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gold/20 bg-ink">
          <img src={url} alt={meta.label} className="h-full w-full object-cover" />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-sm font-bold text-cream">{meta.label}</h3>
          <p className="mt-1 text-xs text-beige/60 leading-relaxed">{meta.description}</p>
        </div>
      </div>
      <p className="mb-2 text-[11px] text-gold/70">💡 {meta.recommended}</p>
      <div className="flex gap-2">
        <button
          onClick={() => ref.current?.click()}
          className="flex-1 rounded-full bg-gradient-to-l from-gold to-gold-soft px-3 py-2 text-xs font-semibold text-ink hover:brightness-110"
        >
          ✎ گۆڕین
        </button>
        <button
          onClick={onReset}
          className="rounded-full border border-gold/30 px-4 py-2 text-xs text-cream hover:bg-gold/10"
        >
          ↺ بنەڕەتی
        </button>
      </div>
      <input ref={ref} type="file" accept="image/*" className="hidden" onChange={handle} />
    </div>
  );
}
