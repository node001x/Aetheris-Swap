const connectBtn = document.getElementById('connect-wallet');
const inputAmount = document.getElementById('input-amount');
const outputAmount = document.getElementById('output-amount');

// 1. Connect Wallet Logic
connectBtn.addEventListener('click', async () => {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            connectBtn.innerText = "Wallet: " + accounts[0].slice(0, 6) + "...";
            connectBtn.style.background = "#22c55e"; // Green for connected
        } catch (error) {
            alert("Connection failed");
        }
    } else {
        alert("Please install MetaMask!");
    }
});

// 2. Simple Swap Math (Price simulation: 1 ETH = 3500 USDT)
const exchangeRate = 3500;

inputAmount.addEventListener('input', (e) => {
    const val = e.target.value;
    if (val > 0) {
        outputAmount.value = (val * exchangeRate).toFixed(2);
    } else {
        outputAmount.value = "";
    }
});
