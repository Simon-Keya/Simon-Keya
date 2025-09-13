
'use client'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, Variants } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

// Navigation links data
const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

// Animation variants
const navbarVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' as const
    }
  }
}

const linkVariants: Variants = {
  initial: { y: -20, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { 
      delay: i * 0.1 + 0.3, 
      duration: 0.4,
      ease: 'easeOut' as const
    },
  }),
  hover: { 
    y: -2,
    transition: { 
      duration: 0.2, 
      ease: 'easeOut' as const 
    }
  },
}

const mobileMenuVariants: Variants = {
  closed: { 
    opacity: 0, 
    height: 0,
    transition: { 
      duration: 0.3,
      ease: 'easeInOut' as const
    }
  },
  open: { 
    opacity: 1, 
    height: 'auto',
    transition: { 
      duration: 0.4,
      ease: 'easeInOut' as const
    }
  },
}

const mobileLinkVariants: Variants = {
  closed: { x: -20, opacity: 0 },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: 'easeOut' as const
    }
  })
}

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  // Handle scroll effect
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const getNavbarStyles = () => {
    const baseStyles = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-br from-black via-slate-950 to-blue-950"
    return isScrolled
      ? `${baseStyles} bg-slate-900/95 backdrop-blur-md border-b border-slate-700/30 shadow-lg`
      : `${baseStyles} bg-slate-900/70 backdrop-blur-sm`
  }

  const getLinkStyles = (isActive: boolean) => {
    const baseStyles = "relative text-sm font-medium transition-all duration-200 px-3 py-1 group"
    return isActive
      ? `${baseStyles} text-blue-400`
      : `${baseStyles} text-slate-300 hover:text-blue-400`
  }

  const getMobileLinkStyles = (isActive: boolean) => {
    const baseStyles = "block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 relative overflow-hidden"
    return isActive
      ? `${baseStyles} text-blue-400 bg-slate-800/60 border-l-4 border-blue-400`
      : `${baseStyles} text-slate-300 hover:text-blue-400 hover:bg-slate-800/40`
  }

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={getNavbarStyles()}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' as const }}
          >
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight group text-blue-400"
            >
              <span className="relative">
                Simon Keya
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' as const }}
                />
              </span>
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center md:space-x-4">
            {navigationLinks.map((link, index) => (
              <motion.div
                key={link.href}
                custom={index}
                variants={linkVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="relative"
              >
                <Link
                  href={link.href}
                  className={getLinkStyles(pathname === link.href)}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                  {/* Active indicator */}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.3, ease: 'easeOut' as const }}
                    />
                  )}
                  {/* Hover indicator */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400/40 to-purple-500/40 origin-center"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.2, ease: 'easeOut' as const }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 rounded-lg transition-all duration-200 text-slate-400 hover:text-blue-400 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' as const }}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' as const }}
                  >
                    <Bars3Icon className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden border-t overflow-hidden bg-slate-900/95 backdrop-blur-md border-slate-700/30"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    custom={index}
                    variants={mobileLinkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={link.href}
                      className={getMobileLinkStyles(pathname === link.href)}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={pathname === link.href ? 'page' : undefined}
                    >
                      <span className="relative z-10">{link.label}</span>
                      {/* Mobile active indicator */}
                      {pathname === link.href && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                          layoutId="mobileActiveTab"
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          transition={{ duration: 0.3, ease: 'easeOut' as const }}
                        />
                      )}
                      {/* Mobile hover indicator */}
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400/40 to-purple-500/40 origin-center"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileHover={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.2, ease: 'easeOut' as const }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
