type CookieBannerProps = {
  content: {
    message: string;
    necessary: string;
    accept: string;
  };
};

export function CookieBanner({ content }: CookieBannerProps) {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl rounded-[28px] border border-[color:var(--line)] bg-white/95 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.14)] backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm text-[color:var(--slate)]">
          {content.message}
        </p>
        <form action="/api/preferences/cookies" method="post" className="flex gap-3">
          <button type="submit" name="consent" value="necessary" className="btn-secondary px-4 py-2 text-sm">
            {content.necessary}
          </button>
          <button type="submit" name="consent" value="accepted" className="btn-accent px-4 py-2 text-sm">
            {content.accept}
          </button>
        </form>
      </div>
    </div>
  );
}
