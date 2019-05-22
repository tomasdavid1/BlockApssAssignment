pragma solidity >=0.4.0 <0.6.0;

contract Test {
    uint storedData;

    function testSet(uint x) public {
        storedData = x;
    }

    function testGet() public view returns (uint) {
        return storedData;
    }
}
