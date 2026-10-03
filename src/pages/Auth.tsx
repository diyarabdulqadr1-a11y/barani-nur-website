import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useApp } from "../hooks/useApp";
import Logo from "../components/Logo";
import { Arrow } from "../components/icons";

type Mode = "login" | "register";

function SocialLoginButton({ icon, label, color, textColor = "text-white" }: { icon: React.ReactNode; label: string; color: string; textColor?: string }) {
  return (
    <button className={`w-full flex items-center justify-center gap-3 py-3 rounded-xl ${color} ${textColor} text-sm font-medium transition-transform active:scale-95 shadow-md`}>
      <span className="text-xl">{icon}</span>
      {label}
    </button>
  );
}

export default function Auth() {
  const { login, register, user } = useAuth();
  const { navigate } = useApp();
  const [mode, setMode] = useState<Mode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (user) {
      navigate("home");
    }
  }, [user, navigate]);

  if (user) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (mode === "register") {
      if (!name || !email || !password || !confirmPassword) {
        setError("تکایە هەموو خانەکان پڕ بکەرەوە.");
        return;
      }
      if (password !== confirmPassword) {
        setError("پاسوۆردەکان یەک ناگرن.");
        return;
      }
      if (password.length < 4) {
        setError("پاسوۆرد دەبێت لانیکەم ٤ پیت بێت.");
        return;
      }
      const ok = register(name, email, password);
      if (ok) {
        setSuccess("بەخێربێیت بۆ بارانی نوور. لەمەودوا دەتوانیت خوێندنەوەی ڕۆژانەت تۆمار بکەیت و پەیامەکانت بپارێزیت.");
        setTimeout(() => navigate("home"), 2000);
      } else {
        setError("ئەم ئیمەیڵە پێشتر تۆمار کراوە.");
      }
    } else {
      if (!email || !password) {
        setError("تکایە ئیمەیڵ و پاسوۆرد بنووسە.");
        return;
      }
      const ok = login(email, password);
      if (ok) {
        setSuccess("بەخێربێیتەوە. هەنگاوەکانت بەرەو نوور بەردەوامن.");
        setTimeout(() => navigate("home"), 1500);
      } else {
        setError("ئیمەیڵ یان پاسوۆرد هەڵەیە.");
      }
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <div className="rounded-3xl border-2 border-gold/25 bg-gradient-to-br from-olive-deep/20 via-charcoal to-ink p-8 geo-pattern shadow-2xl">
        <div className="text-center">
          <Logo size={72} className="mx-auto" />
          <h1 className="mt-5 font-display text-3xl font-bold text-cream">
            {mode === "login" ? "چوونەژوورەوە بۆ هەژماری من" : "خۆتۆمارکردن لە بارانی نوور"}
          </h1>
          <p className="mt-3 text-sm text-beige/70 leading-loose">
            {mode === "login"
              ? "بگەڕێوە بۆ هەژمارەکەت، تا خوێندنەوەکانت، پەیامەکانت و بەردەوامییەکەت لە ڕێگای نوور بەردەوام بمێنێت."
              : "هەژمارێکی تایبەت بە خۆت دروست بکە، تا خوێندنەوەی ڕۆژانەت، پەیامە پاشەکەوتکراوەکانت و هەنگاوەکانت بەرەو نوور لەدەست نەچن."}
          </p>
        </div>

        {/* Social Logins */}
        <div className="mt-8 space-y-3">
          <SocialLoginButton 
            icon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 3.656 10.995 9 11.83v-8.369H5.917v-3.461h3.083V9.73c0-3.041 1.812-4.72 4.414-4.72 1.246 0 2.55.222 2.55.222v2.805h-1.437c-1.507 0-1.873.935-1.873 1.892v2.27h3.161l-.505 3.461h-2.656V23.903c5.344-.835 9-5.84 9-11.83z"/></svg>} 
            label="Continue with Facebook" 
            color="bg-[#1877F2]" 
          />
          <SocialLoginButton 
            icon={<svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.16H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.84l3.66-2.75z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.16l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>} 
            label="Continue with Google" 
            color="bg-white" 
            textColor="text-slate-700" 
          />
          <SocialLoginButton 
            icon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.152 6.896c-.115 0-.274.01-.403.01-.131 0-.268-.01-.334-.01-.25 0-.5.01-.734.03-.234.02-.455.053-.665.097a2.535 2.535 0 0 0-.61.2c-.19.09-.36.2-.5.334-.14.134-.252.28-.334.444-.082.163-.133.344-.15.542-.016.198-.025.404-.025.617s.009.419.025.617c.017.198.068.379.15.542.082.164.193.31.334.444.14.133.31.243.5.333.19.09.395.156.61.2.215.044.436.077.67.097.234.02.484.03.733.03.131 0 .268-.01.403-.01.135 0 .274.01.403.01.25 0 .5-.01.734-.03.234-.02.455-.053.665-.097a2.535 2.535 0 0 0 .61-.2c.19-.09.36-.2.5-.333.14-.134.252-.28.334-.444.082-.163.133-.344.15-.542.016-.198.025-.404.025-.617s-.009-.419-.025-.617c-.017-.198-.068-.379-.15-.542-.082-.164-.193-.31-.334-.444-.14-.133-.31-.243-.5-.333-.19-.09-.395-.156-.61-.2a4.417 4.417 0 0 0-.67-.097 9.08 9.08 0 0 0-.733-.03zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.152 14.19c-.314 0-.623-.013-.924-.04a7.712 7.712 0 0 1-.84-.122 4.145 4.145 0 0 1-.74-.244 3.738 3.738 0 0 1-.61-.41 3.738 3.738 0 0 1-.41-.61 4.145 4.145 0 0 1-.244-.74 7.712 7.712 0 0 1-.122-.84 11.238 11.238 0 0 1-.04-.924c0-.314.013-.623.04-.924a7.712 7.712 0 0 1 .122-.84 4.145 4.145 0 0 1 .244-.74 3.738 3.738 0 0 1 .41-.61 3.738 3.738 0 0 1 .61-.41 4.145 4.145 0 0 1 .74-.244c.26-.09.541-.17.84-.244.3-.027.61-.04.924-.04.314 0 .623.013.924.04a7.712 7.712 0 0 1 .84.122 4.145 4.145 0 0 1 .74.244c.24.11.444.247.61.41.222.215.359.418.41.61.09.24.17.486.244.74.027.28.082.56.122.84.027.3.04.61.04.924 0 .314-.013.623-.04.924a7.712 7.712 0 0 1-.122.84 4.145 4.145 0 0 1-.244.74 3.738 3.738 0 0 1-.41.61 3.738 3.738 0 0 1-.61.41 4.145 4.145 0 0 1-.74.244c-.26.09-.541.17-.84.244-.3.027-.61.04-.924.04z"/></svg>} 
            label="Continue with Apple" 
            color="bg-black" 
          />
        </div>

        <div className="relative my-8 flex items-center justify-center">
          <div className="h-px w-full bg-gold/15"></div>
          <span className="absolute bg-[#11110d] px-4 text-xs text-beige/40">یان بە ئیمەیڵ</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {mode === "register" && (
            <div>
              <label className="block text-sm text-gold/80 mb-1.5">ناو</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-gold/20 bg-ink/60 px-4 py-3 text-cream placeholder:text-beige/40 focus:border-gold focus:outline-none"
                placeholder="ناوت بنووسە"
              />
            </div>
          )}
          <div>
            <label className="block text-sm text-gold/80 mb-1.5">ئیمەیڵ</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-gold/20 bg-ink/60 px-4 py-3 text-cream placeholder:text-beige/40 focus:border-gold focus:outline-none"
              placeholder="ئیمەیڵەکەت بنووسە"
            />
          </div>
          <div>
            <label className="block text-sm text-gold/80 mb-1.5">پاسوۆرد</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-gold/20 bg-ink/60 px-4 py-3 text-cream placeholder:text-beige/40 focus:border-gold focus:outline-none"
              placeholder="پاسوۆرد"
            />
          </div>
          {mode === "register" && (
            <div>
              <label className="block text-sm text-gold/80 mb-1.5">دوبارەکردنەوەی پاسوۆرد</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-xl border border-gold/20 bg-ink/60 px-4 py-3 text-cream placeholder:text-beige/40 focus:border-gold focus:outline-none"
                placeholder="پاسوۆرد دوبارە بنووسە"
              />
            </div>
          )}

          {error && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}
          {success && (
            <div className="rounded-xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-gold">
              {success}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-l from-gold to-gold-soft py-3.5 text-sm font-semibold text-ink transition hover:brightness-110 active:scale-95"
          >
            {mode === "login" ? "چوونەژوورەوە" : "دروستکردنی هەژمار"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          {mode === "login" ? (
            <p className="text-beige/60">
              هێشتا هەژمارت نییە؟{" "}
              <button onClick={() => { setMode("register"); setError(""); setSuccess(""); }} className="text-gold hover:underline">
                هەژمارێکی نوێ دروست بکە
              </button>
            </p>
          ) : (
            <p className="text-beige/60">
              پێشتر هەژمارت هەیە؟{" "}
              <button onClick={() => { setMode("login"); setError(""); setSuccess(""); }} className="text-gold hover:underline">
                داخل ببە
              </button>
            </p>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <button onClick={() => navigate("home")} className="inline-flex items-center gap-2 text-sm text-beige/50 hover:text-gold">
            <Arrow className="h-4 w-4 rotate-180" /> گەڕانەوە بۆ سەرەتا
          </button>
        </div>
      </div>
    </div>
  );
}
