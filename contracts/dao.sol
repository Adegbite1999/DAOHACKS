pragma solidity ^0.8.0;

contract Governance{
    
}


contract WhiteList{

    address[] public DAOmembers;
    uint constant public MINIMUMMEMBER = 5;
    //struct holding information of business 
    struct BusinessOwner{
        string  name;
        address business;
        uint duration;
        uint amount;
        uint AmountGenerated;
        address[] investors;
        mapping (address => uint) investorsBalances;
    }
    // members have to  vote before a business can be whiteListed, if vote >= 70% of then an address is whitliested 


    mapping(address => bool) whiteListedBusiness;
    mapping (address => uint) VotesCount;
    mapping(address => BusinessOwner) public businessowner;

    constructor(address[] memory _DAOmembers){
        require(_DAOmembers.length >= MINIMUMMEMBER);
        DAOmembers = _DAOmembers;

    }

    event Business(address, bool);

    function VoteWhitelisBusiness(address _addr) internal returns(uint){
        require(checkMemeber(), "not a member of the DAO");
        VotesCount[_addr]++;
        if(VotesCount[_addr]>=5){
            // WhiteListBusiness(_addr, amount);
        }


    }
    function checkMemeber() internal view returns(bool){
        for (uint i; i < DAOmembers.length; i++){
            if (DAOmembers[i] == msg.sender) return true;
        }
        return false;

    }
    function WhiteListBusiness(address _addr, uint amount) public returns (bool){
        assert(!whiteListedBusiness[_addr]);
        businessowner[_addr].amount = amount;
        whiteListedBusiness[_addr] = true;
        emit Business(_addr, true);
    }
    function BlacklistBusiness(address _addr) public {
        whiteListedBusiness[_addr] = true;
    }

    function viewWhiteListedBusiness(address _addr) public view returns (bool){
        return whiteListedBusiness[_addr];
    }

    function addBusiness(string memory _name, uint duration, address businessAddress) public{
        BusinessOwner storage BO = businessowner[businessAddress];
        assert(whiteListedBusiness[businessAddress]);
        BO.business = businessAddress;
        BO.name = _name;
        BO.duration = duration;       
    }
    function InvestInBusiness(address business) public payable {
        //Thinking their money invested on behalf of the business should go straight to supperfluid taggged to a particular business.
        BusinessOwner storage BO = businessowner[business];
        require(msg.value > 0, "you can't invest 0 value");
        require(BO.amount + msg.value > BO.AmountGenerated, "Required Loan amount met");
        BO.AmountGenerated += msg.value;
        BO.investors.push(msg.sender);
        BO.investorsBalances[msg.sender] += msg.value;
    }

}