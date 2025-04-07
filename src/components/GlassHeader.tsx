import ThemeToggle from "./ui/theme-toggle";
import { personalInfo } from "@/lib/data";
import { useState } from "react";
import { Menu, X, ChevronsLeft, ChevronsRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const navItems = [
    { label: "Educación", icon: "🎓", link: "education" },
    { label: "Habilidades", icon: "🛠️", link: "skills"},
    { label: "Proyectos", icon: "🚀", link: "projects"},
    { label: "Certificados", icon: "🏆", link: "titles"},
    { label: "Experiencia", icon: "💼", link: "exprience"},
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:fixed md:flex md:flex-col h-full ${
          isCollapsed ? "w-20" : "w-64"
        } bg-background/80 backdrop-blur-md border-r border-border/40 p-6 transition-all duration-300 z-50`}
      >
        <div className="flex justify-between items-center mb-8">
          {/* Nombre del usuario */}
          {!isCollapsed && (
            <motion.a
              href="/"
              className="text-xl font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ✨ {personalInfo.name}
            </motion.a>
          )}

          {/* Botón de flechas dobles para minimizar/maximizar */}
          <button
            onClick={toggleCollapse}
            className="text-foreground hover:text-primary transition-colors"
          >
            {isCollapsed ? (
              <ChevronsRight size={20} />
            ) : (
              <ChevronsLeft size={20} />
            )}
          </button>
        </div>

        <nav className="flex flex-col gap-4 text-sm font-medium">
          {navItems.map((item, i) => (
            <motion.a
              key={item.link}
              href={`#${item.link}`}
              className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <span className="text-lg">{item.icon}</span>
              {!isCollapsed && <span>{item.label}</span>}
            </motion.a>
          ))}
        </nav>

        <div className="mt-auto pt-6 flex flex-col gap-4 items-center">
          <ThemeToggle />
        </div>
      </aside>

      {/* Mobile Topbar + Menu */}
      <header className="md:hidden sticky z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/40 p-4 flex justify-between items-center">
        <motion.a
          className="text-lg font-medium"
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ✨ {personalInfo.name}
        </motion.a>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <motion.button
            onClick={toggleMenu}
            className="text-foreground"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden absolute top-16 left-0 w-full bg-background/90 backdrop-blur-md border-t border-border/10 p-4 flex flex-col space-y-4 z-40"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.link}
                href={`#${item.link}`}
                onClick={toggleMenu}
                className="text-sm font-medium text-foreground/60 hover:text-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                {item.icon} {item.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}