const { ComprehendClient, DetectDominantLanguageCommand }  = require("@aws-sdk/client-comprehend");

exports.handler = async (event) => {
    const client = new ComprehendClient({});
    const command = new DetectDominantLanguageCommand({ Text: event.q });
    const command_response = await client.send(command)
    
    const response = {
       statusCode: 200,
       body: command_response,
    }
    return response
}
