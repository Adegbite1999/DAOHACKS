pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Ivestify is ERC20 {
    address owner = 0x1C1bc23E87903e87c60bE4Eb929E063c7Bd75c03;

    constructor() ERC20("Ivestify", "IVY") {
        _mint(owner, 100000000 * 10**18);
    }
}
