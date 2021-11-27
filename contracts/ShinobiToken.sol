// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ShinobiToken is ERC20 {
    uint256 public initialSupply = 100 * (10 ** uint256(decimals()));

    constructor() ERC20("ShinobiToken", "SHIN") {
        _mint(msg.sender, initialSupply);
    }
}