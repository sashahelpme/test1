function duplicateString(input) {
    return input + input;
}

function sashaHi(input) {
    return input + " саша :)";
}

function sashaRabotaetOnHolidays(input) {
    return input + " стук";
}

const sendMessage = async () => {
  try {
    const result = "123";
    console.log('Message sent successfully.');
    console.log(result);
  } catch (error) {
    console.error(Message failed with error: ${error.message});
  }
};
sendMessage();

module.exports = { duplicateString, sashaHi, sashaRabotaetOnHolidays, sendMessage };
