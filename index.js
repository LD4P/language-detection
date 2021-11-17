const { ComprehendClient, DetectDominantLanguageCommand }  = require("@aws-sdk/client-comprehend");

exports.handler = async (event) => {
    console.log("Event is", event)
    const client = new ComprehendClient({});
    const command = new DetectDominantLanguageCommand({ Text: 'zhe yang zhen hao' });
    const command_response = await client.send(command)

    const response = {
        statusCode: 200,
        body: command_response,
    }
    return response
}
