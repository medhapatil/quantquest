import './globals.css';
import 'katex/dist/katex.min.css';
import type {Metadata} from 'next';
export const metadata: Metadata = {
  title: 'QuantSponge',
  description: 'Daily quant brain training, offline',
  manifest: '/manifest.webmanifest',
  appleWebApp: {capable: true, title: 'QuantSponge', statusBarStyle: 'black-translucent'},
};
export default function Layout({children}: {children: React.ReactNode}) {
  return <html lang="en" className="dark" style={{colorScheme:'dark'}}><body>{children}</body></html>;
}
