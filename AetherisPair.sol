// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract AetherisPair {
    IERC20 public token0;
    IERC20 public token1;

    uint256 public reserve0;
    uint256 public reserve1;

    event Swap(address indexed sender, uint amountIn, uint amountOut, address indexed to);

    constructor(address _token0, address _token1) {
        token0 = IERC20(_token0);
        token1 = IERC20(_token1);
    }

    // Basic x * y = k swap logic
    function swap(uint256 amountIn, bool isToken0) external returns (uint256 amountOut) {
        (IERC20 input, IERC20 output, uint256 resIn, uint256 resOut) = isToken0 
            ? (token0, token1, reserve0, reserve1) 
            : (token1, token0, reserve1, reserve0);

        input.transferFrom(msg.sender, address(this), amountIn);
        
        // 0.3% fee logic
        uint256 amountInWithFee = (amountIn * 997) / 1000;
        amountOut = (amountInWithFee * resOut) / (resIn + amountInWithFee);

        output.transfer(msg.sender, amountOut);

        // Update reserves
        if (isToken0) {
            reserve0 += amountIn;
            reserve1 -= amountOut;
        } else {
            reserve0 -= amountOut;
            reserve1 += amountIn;
        }

        emit Swap(msg.sender, amountIn, amountOut, msg.sender);
    }
}
