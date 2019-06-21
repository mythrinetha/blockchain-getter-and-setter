pragma solidity >=0.4.22 <0.6.0;
contract Courses {
 
 string fName;
 uint age;
 
 function setInstructor(string memory _fName, uint _age) public {
   fName = _fName;
   age = _age;
 }
 
 function getInstructor() public returns (string memory, uint) {
   return (fName, age);
 }
 
}