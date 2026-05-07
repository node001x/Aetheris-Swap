aetheris-dex/
├── contracts/
│   ├── AetherisPair.sol        # Core swap logic
│   └── AetherisFactory.sol     # Deploys new pairs
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── SwapCard.jsx    # Glassmorphism UI
│   │   ├── hooks/
│   │   │   └── useSwap.js      # Ethers.js logic
│   │   └── App.js
│   └── tailwind.config.js      # Custom theme setup
├── scripts/
│   └── deploy.js               # Hardhat deployment script
└── package.json
