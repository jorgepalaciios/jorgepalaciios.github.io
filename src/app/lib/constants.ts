// show customised outline when an element has focus (but only if the user is
// using the keyboard)
// TODO: move this to a global css rule
export const FOCUS_VISIBLE_OUTLINE = `focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600/70`

export const LINK_STYLES = `text-red-800/90 underline decoration-red-900/30 underline-offset-2 transition-all hover:text-red-800 hover:decoration-red-900/50`

export const LINK_SUBTLE_STYLES = `hover:underline hover:decoration-red-300/30 hover:underline-offset-2 hover:text-red-200/90`

export const HEADING_LINK_ANCHOR = `before:content-['#'] before:absolute before:-ml-[1em] before:text-red-800/0 hover:before:text-red-800/50 pl-[1em] -ml-[1em]`