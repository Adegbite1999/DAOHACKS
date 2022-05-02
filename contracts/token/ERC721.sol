// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/draft-ERC721Votes.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol"; // tokenUri
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract ERC721GovernanceToken is ERC721URIStorage, ERC721Votes, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor()
        ERC721("GovernanceToken", "GT")
        EIP712("Invesitfy", "^0.8.0")
    {
        console.log("GovernanceToken constructor");
    }

    // The functions below are overrides required by Solidity.

    function mintNFT(string memory _tokenURI) public {
        // Get the current tokenId, this starts at 0.
        uint256 newItemId = _tokenIds.current();

        // Actually mint the NFT to the sender using msg.sender.
        _safeMint(msg.sender, newItemId);

        // Set the NFTs data.
        _setTokenURI(newItemId, _tokenURI);

        // Increment the counter for when the next NFT is minted.
        _tokenIds.increment();
        console.log(
            "An NFT w/ ID %s has been minted to %s",
            newItemId,
            msg.sender
        );
    }

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC721Votes, ERC721) {
        super._afterTokenTransfer(from, to, amount);
    }

    function _getVotingUnits(address account)
        internal
        override(ERC721Votes)
        returns (uint256)
    {
        return super._getVotingUnits(account);
    }

    function _burn(uint256 tokenId)
        internal
        virtual
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function _mint(address to, uint256 amount) internal override(ERC721) {
        super._mint(to, amount);
    }

    function _safeMint(address to, uint256 amount) internal override(ERC721) {
        super._safeMint(to, amount);
    }
}
