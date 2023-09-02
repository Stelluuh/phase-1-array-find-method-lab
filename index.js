const superbowlWin = (recordsArray) => {
    let winningRecord = recordsArray.find(r => r.result === "W")
    return winningRecord ? winningRecord.year : undefined;
}