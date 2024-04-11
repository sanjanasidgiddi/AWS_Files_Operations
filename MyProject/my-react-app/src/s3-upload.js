import { S3 } from "./aws-config";

const uploadFileToS3 = async (file) => {
    const s3 = new S3({
        apiVersion: "2006-03-01",
        params: { Bucket: "fovus-code-bucket" },
    });

    const params = {
        Bucket: "fovus-code-bucket",
        Key: `uploads/${file.name}`,
        Body: file,
        ACL: "public-read", 
    };

    try {
        const data = await s3.upload(params).promise();
        console.log("Upload Success", data);
        return data;
    } catch (err) {
        console.log("Upload Error", err);
        throw err;
    }
};
export default uploadFileToS3;