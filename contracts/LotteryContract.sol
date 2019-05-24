pragma solidity >=0.4.22 <0.7.0;


contract Lottery{
    address[] private addresses;
    string public name  = 'Lottery';
    string public symbol = 'LOT';
    uint256 public remaining_tickets = 10;
    uint256 public curr_num_of_tickets = 0;
    uint256 public random_num = 0;
    uint256 public winning_amount = 0;
    uint256 public max_tickets = 0;
    uint256 public prize = 1 ether;
    address public winner;


    constructor (string memory _name, string memory _symbol, uint256  _max_tickets)public{


        name = _name;
        symbol =  _symbol;
        remaining_tickets = _max_tickets;
        max_tickets = _max_tickets;
        buy_ticket();

    }

    function buy_ticket() public payable{

        require(remaining_tickets > 0,
        'doesnt meet requirements');
        remaining_tickets = remaining_tickets - 1;
        addresses.push(msg.sender);
        curr_num_of_tickets ++;
        if (remaining_tickets == 0){
            choose_winner();
        }

    }

    function choose_winner() public returns(uint256, address){

        random_num = uint256(block.blockhash(block.number-1)) % addresses.length;
        winner = addresses[random_num];
        winning_amount = max_tickets*prize;
        curr_num_of_tickets = 0;
        remaining_tickets = 10;
        delete addresses;
        return (winning_amount, winner);


    }

    function get() public view returns (uint256){
        return remaining_tickets;
    }

    function get_addresses() public view returns (address[]){
        return addresses;
    }



}