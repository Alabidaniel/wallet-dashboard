import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia } from 'wagmi/chains';

const config = getDefaultConfig({
  appName: 'Wallet-Dashboard',
  projectId: import.meta.env.VITE_PROJECT_ID, // ✅ Use env variable
  chains: [sepolia],
  ssr: false,
});

export default config;
