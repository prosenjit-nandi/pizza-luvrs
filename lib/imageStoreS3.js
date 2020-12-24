const AWS = require('aws-sdk')
const s3 = new AWS.S3()

module.exports.save = async (name, data) => {
    const params = {
        Bucket: 'pizza-luvrs-prosenjit',
        Key: `pizzas/${name}.png`,
        Body: Buffer.from(data, 'base64'),
        ContentEncoding: 'base64',
        ContentType: 'image/png'
    }

    await s3.putObject(params).promise()
    return `//pizza-luvrs-prosenjit.s3.us-east-2.amazonaws.com/${params.Key}`
}
