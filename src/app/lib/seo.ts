import { createOgImage } from './createOgImage';
import type { DefaultSeoProps } from 'next-seo';

const title = `Jorge`
const description = `Welcome to my professional portfolio where I share most of my relevant experience as a systems engineer`
const domain = `jorgepalaciios.github.io`
const x = `@jorgepalaciios`
const meta = `Systems Engineer graduated at Universidad De Oriente Monagas, Ve.`

export const seo: DefaultSeoProps = {
  title: title + ' | ' + meta,
  description,
  openGraph: {
    title,
    type: 'website',
    url: `https://${domain}`,
    siteName: title,
    images: [
      {
        url: createOgImage({ title, meta }),
        width: 1600,
        height: 836,
        alt: title,

      }
    ]
  },
  twitter: {
    handle: x,
    cardType: 'summary_large_image'
  }
}