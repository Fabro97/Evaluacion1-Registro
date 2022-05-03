//SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

/**
@notice This contract register the students
 */
contract StudentRegistry {

  mapping (address => uint256) public studentAddress;
  mapping (address => uint8) public studentScore;

  function addStudent(uint256 _studentNumber) external {
    studentAddress[msg.sender] = _studentNumber;
    studentScore[msg.sender] = 1;
  }

  function getScore() external view returns(uint256 score){
    return studentScore[msg.sender];
  }

  /**
    * @notice Subcribe a student to a group
    * @param _groupIndex It is the group identifier
    */
  function subscribeToGroup(uint8 _groupIndex) external {}

  /**
    * @notice Get the student's group identifier
    * @return _groupID It is the student's group identifier
    */
  function getGroupFromAddress() external view returns(uint8 _groupID) {}

  /**
    * @notice Send the contract address that represents the delivered task
    * @param _conractAddress It is the contract address that represents the delivered task
    */
  function sendTask(address _conractAddress) external {}

  /**
    * @notice Get the task score by task number
    * @param _taskNumber It is the task number
    * @return _score It is the score of the task number
    */
  function getTaskScoreByTaskNumber(uint256 _taskNumber) external view returns (uint256 _score) {}
}