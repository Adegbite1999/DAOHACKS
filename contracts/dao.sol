pragma solidity ^0.8.0;

contract Governance{
    
}


contract WhiteList{
    // members have to  vote before a business can be whiteListed, if vote >= 70% of then an address is whitliested 

    mapping(address => bool) whiteListedBusiness;

    event Business(address, bool);
    function WhiteListBusiness(address _addr) public returns (bool){
        require(whiteListedBusiness[_addr] != true);
        whiteListedBusiness[_addr] = true;

        emit Business(_addr, true);
    }

    function viewWhiteListedBusiness(address _addr) public view returns (bool){
        return whiteListedBusiness[_addr];
    }

}