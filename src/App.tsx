import { useState } from "react";
import { AppProvider, useApp } from "./hooks/useApp";
import { ImagesProvider } from "./hooks/useImages";
import { AuthProvider } from "./hooks/useAuth";
import { I18nProvider } from "./i18n";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShareModal from "./components/ShareModal";
import EditPanel from "./components/EditPanel";
import type { Quote } from "./data/content";
import Home from "./pages/Home";
import Daily from "./pages/Daily";

import Topics from "./pages/Topics";
import Reader from "./pages/Reader";
import Duas from "./pages/Duas";
import Articles from "./pages/Articles";
import Media from "./pages/Media";
import About from "./pages/About";
import Nursi from "./pages/Nursi";
import Guide from "./pages/Guide";
import Audiobooks from "./pages/Audiobooks";
import Auth from "./pages/Auth";
import TranslatedPage from "./pages/Translated";
import Favorites from "./pages/Favorites";
import { useI18n } from "./i18n";

function Shell() {
  const { page, navigate } = useApp();
  const { lang } = useI18n();
  const [share, setShare] = useState<Quote | null>(null);

  const [readerId, setReaderId] = useState<number | undefined>();
  const onShare = (q: Quote) => setShare(q);


  const goRead = (id: number) => { setReaderId(id); navigate("books"); };

  return (
    <div className="min-h-screen paper-texture">
      <Navbar />
      <main>
        {lang !== "ckb" ? (
          <TranslatedPage page={page} />
        ) : (
          <>
            {page === "home" && <Home onRead={goRead} />}
            {page === "daily" && <Daily onRead={goRead} />}
            {page === "topics" && <Topics />}
            {page === "books" && <Reader key={readerId ?? "list"} initialId={readerId} />}
            {page === "duas" && <Duas />}
            {page === "articles" && <Articles onShare={onShare} />}
            {page === "media" && <Media />}
        {page === "nursi" && <Nursi />}
        {page === "guide" && <Guide />}
        {page === "audiobooks" && <Audiobooks />}
        {page === "auth" && <Auth />}
        {page === "about" && <About />}
        {page === "favorites" && <Favorites onShare={onShare} onBrowse={() => navigate("books")} />}
          </>
        )}
      </main>
      <Footer />
      <ShareModal quote={share} onClose={() => setShare(null)} />
      {lang === "ckb" && <EditPanel />}
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <AuthProvider>
        <ImagesProvider>
          <AppProvider>
            <Shell />
          </AppProvider>
        </ImagesProvider>
      </AuthProvider>
    </I18nProvider>
  );
}
