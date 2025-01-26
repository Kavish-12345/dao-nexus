// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenContract is ERC20 {
    uint256 public constant TOKEN_AMOUNT = 10 * 10**18;

    constructor() ERC20("MyToken", "MTK") {
        _mint(msg.sender, 100000 * 10**18); // Mint initial supply to the deployer
    }

    function mint() public {
        _mint(msg.sender, TOKEN_AMOUNT);
    }
}