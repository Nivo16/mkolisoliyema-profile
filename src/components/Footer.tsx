export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="gradient-text font-semibold">Liyema Mkoliso</span>. All rights reserved.
      </p>
    </footer>
  );
}
