pragma solidity ^0.8.0;
import "./IUSDT.sol";

contract Investify {
    address[] public DAOmembers;
    uint256 public constant MINIMUMMEMBER = 5;
    uint256 public contractBalance;
    //struct holding information of business

    IUSDT usdt = IUSDT(address(0xdAC17F958D2ee523a2206206994597C13D831ec7));
    struct BusinessOwner {
        string name;
        address business;
        uint256 amount;
        uint256 AmountGenerated;
        address[] investors;
        mapping(address => uint256) investorsBalances;
    }

    mapping(address => bool) whiteListedBusiness;
    mapping(address => mapping(address => bool)) memberVote;
    mapping(address => uint256) VotesCount;
    mapping(address => BusinessOwner) public businessowner;

    event Business(address, bool);
    event Investment(
        address from,
        address to,
        uint256 amount,
        uint256 moneyGeneratedperBusiness
    );
    event EquityDetails(string _name, uint256 _amount, address Business);

    constructor(address[] memory _DAOmembers) {
        require(_DAOmembers.length >= MINIMUMMEMBER);
        DAOmembers = _DAOmembers;
    }

    // members have to  vote before a business can be whiteListed, if vote >= 70% of then an address is whitliested

    function VoteWhitelistBusiness(address _addr) public returns (uint256) {
        assert(checkMember());
        assert(!(memberVote[msg.sender][_addr]));
        VotesCount[_addr]++;
        if (VotesCount[_addr] >= calMinimumVote()) {
            WhiteListBusiness(_addr);
        }
        memberVote[msg.sender][_addr] = true;
        return VotesCount[_addr];
    }

    function VoteBlacklistBusiness(address _addr) public returns (uint256) {
        assert(checkMember());
        assert((memberVote[msg.sender][_addr]));
        VotesCount[_addr]++;
        if (VotesCount[_addr] >= calMinimumVote()) {
            BlacklistBusiness(_addr);
        }
        memberVote[msg.sender][_addr] = false;
        return VotesCount[_addr];
    }

    function AddMembertoDAO(address _addr) public returns (uint256) {
        assert(checkMember());
        assert(!(memberVote[msg.sender][_addr]));
        VotesCount[_addr]++;
        if (VotesCount[_addr] == calMinimumVote()) {
            DAOmembers.push(_addr);
        }
        memberVote[msg.sender][_addr] = true;
        return VotesCount[_addr];
    }

    function addBusiness(string memory _name, uint256 _amount) public {
        assert(checkMember());
        BusinessOwner storage BO = businessowner[msg.sender];
        assert(whiteListedBusiness[msg.sender]);
        BO.business = msg.sender;
        BO.amount = _amount;
        BO.name = _name;

        emit EquityDetails(BO.name, BO.amount, BO.business);
    }

    function InvestInBusiness(address business, uint256 _amount)
        public
        payable
    {
        BusinessOwner storage BO = businessowner[business];
        require(usdt.balanceOf(msg.sender) >= _amount, "insufficiient amount");
        require(
            BO.amount + _amount < BO.AmountGenerated,
            "Required Loan amount met"
        );
        usdt.transferFrom(msg.sender, address(this), _amount);
        BO.AmountGenerated += _amount;
        BO.investors.push(msg.sender);
        BO.investorsBalances[msg.sender] += _amount;
        contractBalance += _amount;
        uint256 _moneyGenerated = moneyGenerated(business);

        emit Investment(
            msg.sender,
            BO.business,
            BO.investorsBalances[msg.sender],
            _moneyGenerated
        );
    }

    function moneyGenerated(address bus) public view returns (uint256) {
        return businessowner[bus].AmountGenerated;
    }

    function viewWhiteListedBusiness(address _addr) public view returns (bool) {
        return whiteListedBusiness[_addr];
    }

    function WhiteListBusiness(address _addr) internal {
        assert(!whiteListedBusiness[_addr]);
        whiteListedBusiness[_addr] = true;
        emit Business(_addr, true);
    }

    function BlacklistBusiness(address _addr) internal {
        whiteListedBusiness[_addr] = false;
    }

    function checkMember() internal view returns (bool status) {
        status;
        for (uint256 i; i < DAOmembers.length; i++) {
            if (DAOmembers[i] == msg.sender) status = true;
        }
    }

    function calMinimumVote() internal view returns (uint256 value) {
        value = (DAOmembers.length * 70) / 100;
    }
}
