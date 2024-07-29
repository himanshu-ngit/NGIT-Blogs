// made this file bcz its a good practice as if we have to send this code to production then all the variables will come in string format as a surity 

const config = {
    appwriteURL : String(process.env.REACT_APP_APPWRITE_URL),
    appwriteProjectId : String(process.env.REACT_APP_PROJECT_ID),
    appwriteDatabaseId : String(process.env.REACT_APP_DATABASE_ID),
    appwriteCollectionId : String(process.env.REACT_APP_COLLECTION_ID),
    appwriteBucketId : String(process.env.REACT_APP_BUCKET_ID)
}

export default config