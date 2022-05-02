// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IContractInvest {
    function includeBusiness(
        uint256 proposalId,
        address business,
        bytes32 descriptionHash
    ) external;
}
