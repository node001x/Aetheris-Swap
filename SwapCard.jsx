import React, { useState } from 'react';

const SwapCard = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center font-sans text-white">
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full top-1/4 left-1/3" />
      
      <div className="w-full max-w-md p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold tracking-tight">Swap</h2>
          <button className="p-2 hover:bg-white/10 rounded-lg transition">⚙️</button>
        </div>

        {/* Input Field */}
        <div className="space-y-2">
          <div className="bg-black/20 p-4 rounded-2xl border border-white/5 focus-within:border-purple-500/50 transition">
            <div className="flex justify-between text-sm text-slate-400 mb-1">
              <span>From</span>
              <span>Balance: 1.24 ETH</span>
            </div>
            <div className="flex justify-between">
              <input type="number" placeholder="0.0" className="bg-transparent text-2xl outline-none w-full" />
              <button className="bg-white/10 px-3 py-1 rounded-full text-sm font-medium hover:bg-white/20">ETH</button>
            </div>
          </div>

          {/* Divider/Arrow */}
          <div className="flex justify-center -my-3 relative z-10">
            <div className="bg-slate-800 p-2 rounded-xl border border-white/10 cursor-pointer hover:scale-110 transition">
              ⬇️
            </div>
          </div>

          {/* Output Field */}
          <div className="bg-black/20 p-4 rounded-2xl border border-white/5">
            <div className="flex justify-between text-sm text-slate-400 mb-1">
              <span>To (Estimated)</span>
              <span>Balance: 0.0</span>
            </div>
            <div className="flex justify-between">
              <input type="number" placeholder="0.0" className="bg-transparent text-2xl outline-none w-full" readOnly />
              <button className="bg-purple-600 px-3 py-1 rounded-full text-sm font-medium">Select Token</button>
            </div>
          </div>
        </div>

        <button className="w-full mt-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-bold text-lg hover:opacity-90 transition shadow-lg shadow-purple-500/20">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default SwapCard;
