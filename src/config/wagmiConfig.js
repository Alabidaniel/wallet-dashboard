import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia } from 'wagmi/chains';

const config = getDefaultConfig({
  appName: 'Wallet Dashboard',
  projectId: '17a95eb8621774fd357283467c0d3c78',
  chains: [sepolia],
  ssr: false,
});

export default config;
