// SPDX-License-Identifier: MIT
pragma solidity >=0.8.9;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

contract ERC721Token is ERC721Burnable  {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    event awardNewItem(uint256 indexed newItemId);

    constructor(string memory name, string memory symbol)
        ERC721(name, symbol)
    {}

    function awardItem(address player)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);

        emit awardNewItem(newItemId);

        return newItemId;
    }
}
